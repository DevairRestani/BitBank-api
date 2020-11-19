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
    acesso: boolean;
    moedas: Moedas;
    senha: string;
}

class CreateUsuariosServices {
    public async execute({
        nome,
        documento,
        email,
        telefone,
        tipo,
        tipoPessoa,
        acesso,
        moedas,
        senha,
    }: Request): Promise<Pessoas> {
        const PessoasRepository = getRepository(Pessoas);
        const MoedasRepository = getRepository(Moedas);

        const MoedasUsuario = MoedasRepository.create({
            bch: moedas.bch,
            bnb: moedas.bnb,
            bsv: moedas.bsv,
            btc: moedas.btc,
            dot: moedas.dot,
            eth: moedas.eth,
            ltc: moedas.ltc,
            usdt: moedas.usdt,
            xrp: moedas.xrp,
            link: moedas.link,
        });

        const MoedasSalvo = await MoedasRepository.save(MoedasUsuario);

        const senhaCripto = await hash(senha, 8);

        const Usuario = PessoasRepository.create({
            nome,
            documento,
            email,
            telefone,
            tipo,
            tipoPessoa,
            acesso,
            moedas: MoedasSalvo,
            senha: senhaCripto,
        });

        let usuarioSalvo = await PessoasRepository.save(Usuario);

        if (!usuarioSalvo) {
            throw new Error("Não foi possivel salvar o usuario");
        }

        return await PessoasRepository.save(Usuario);
    }
}

export default CreateUsuariosServices;
