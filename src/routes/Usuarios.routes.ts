import { Router } from "express";

import CreateUsuariosService from "../services/createUsuarios.service";
import PessoasRepository from "../repositories/Pessoas";
import verificarAutenticado from "../middleware/VerificarAutenticado";

const usuariosRouter = Router();

usuariosRouter
    .post("/cadastrar", async (req, res) => {
        try {
            const {
                nome,
                documento,
                email,
                telefone,
                tipo,
                tipoPessoa,
                acesso,
                moedas,
                senha,
            } = req.body;

            const CreateUser = new CreateUsuariosService();

            const User = await CreateUser.execute({
                nome,
                documento,
                email,
                telefone,
                tipo,
                tipoPessoa,
                acesso,
                moedas,
                senha,
            });

            return res.json(User);
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    })
    .post("/buscar", verificarAutenticado, async (req, res) => {
        try {
            const IdPessoa = req.usuario.id;

            const pessoas = new PessoasRepository();
            let pessoa = await pessoas.ListAll(IdPessoa);

            if (pessoa) {
                pessoa.senha = "/";
            }

            return res.status(200).json({ pessoa });
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    });

export default usuariosRouter;
