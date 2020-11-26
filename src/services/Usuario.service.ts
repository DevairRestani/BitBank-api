import { getRepository } from "typeorm";
import { hash } from "bcryptjs";

import { Pessoas } from "../models/entities/Pessoas";
import { Moedas } from "../models/entities/Moedas";

interface Request {
    nome: string;
    documento: string;
    email: string;
    telefone: string;
    tipo: string;
    tipoPessoa: boolean;
    acesso: boolean | true;
    moedas: Moedas;
    senha: string;
    id: string;
}

class Usuario {
    public async salvar({
        nome,
        documento,
        email,
        telefone,
        tipo,
        tipoPessoa,
        acesso,
        moedas,
        senha,
        id,
    }: Request): Promise<Pessoas> {
        const PessoasRepository = getRepository(Pessoas);
        const MoedasRepository = getRepository(Moedas);

        let usuario = await PessoasRepository.findOneOrFail({
            where: { id: id },
            relations: ["moedas"],
        });

        if (!usuario) {
            throw new Error("Usuario não encontrado.");
        }

        let MoedasSalvo = await MoedasRepository.findOneOrFail({
            where: { id: usuario.moedas.id },
        });

        MoedasSalvo.bch = moedas.bch;
        MoedasSalvo.bnb = moedas.bnb;
        MoedasSalvo.bsv = moedas.bsv;
        MoedasSalvo.btc = moedas.btc;
        MoedasSalvo.dot = moedas.dot;
        MoedasSalvo.eth = moedas.eth;
        MoedasSalvo.link = moedas.link;
        MoedasSalvo.ltc = moedas.ltc;
        MoedasSalvo.usdt = moedas.usdt;
        MoedasSalvo.xrp = moedas.xrp;

        MoedasSalvo = await MoedasRepository.save(MoedasSalvo);

        const senhaCripto = await hash(senha, 8);

        usuario.nome = nome;
        usuario.documento = documento;
        usuario.email = email;
        usuario.telefone = telefone;
        usuario.senha = senhaCripto;
        usuario.tipoPessoa = tipoPessoa;
        usuario.acesso = acesso;
        usuario.tipo = tipo;
        usuario.moedas = MoedasSalvo;

        let usuarioSalvo = await PessoasRepository.save(usuario);

        if (!usuarioSalvo) {
            throw new Error("Não foi possivel salvar o usuario");
        }

        return usuarioSalvo;
    }

    public async recuperar(id: string): Promise<Pessoas> {
        const PessoasRepository = getRepository(Pessoas);

        const usuario = await PessoasRepository.findOneOrFail({
            where: { id: id },
            relations: ["moedas"],
        });

        return usuario;
    }
}

export default Usuario;
