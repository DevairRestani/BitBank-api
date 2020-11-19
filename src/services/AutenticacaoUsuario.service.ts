import { getRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import authConfig from "../config/auth";

import { Pessoas } from "../models/entities/Pessoas";

interface Request {
    email: string;
    senha: string;
}

interface Response {
    usuario: Pessoas;
    token: string;
}

class AutenticacaoUserService {
    public async execute({ email, senha }: Request): Promise<Response> {
        const UsuarioRepository = getRepository(Pessoas);

        const usuario = await UsuarioRepository.findOne({ email });

        if (!usuario) {
            throw new Error("Email ou senha incorretos!");
        }
        const passordMatched = await compare(senha, usuario.senha);

        if (!passordMatched) {
            throw new Error("Email ou senha incorretos!");
        }

        const token = sign({}, authConfig.jwt.secret, {
            subject: usuario.id,
            expiresIn: authConfig.jwt.expiresIn,
        });

        return { usuario, token };
    }
}

export default AutenticacaoUserService;
