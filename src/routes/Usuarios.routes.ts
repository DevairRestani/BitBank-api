import { Router } from "express";

import CreateUsuariosService from "../services/createUsuarios.service";
import PessoasRepository from "../repositories/Pessoas";
import verificarAutenticado from "../middleware/VerificarUsuario";

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

            return res.status(201).json(User);
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    })
    .post("/buscar", async (req, res) => {
        try {
            const { email } = req.body;

            const pessoas = new PessoasRepository();
            let pessoa = await pessoas.ListAll(email);

            if (pessoa) {
                pessoa.senha = "/";
            }

            return res.status(200).json({ pessoa });
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    });

export default usuariosRouter;
