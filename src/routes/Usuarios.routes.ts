import { Router } from "express";

import CreateUsuariosService from "../services/createUsuarios.service";
import Usuario from "../services/Usuario.service";

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
    .post("/atualizar", async (req, res) => {
        try {
            const {
                id,
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

            const AtualizarUser = new Usuario();

            const usuarioAtualizado = await AtualizarUser.salvar({
                id,
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

            return res.status(200).json(usuarioAtualizado);
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    })
    .post("/recuperar", async (req, res) => {
        try {
            const { id } = req.body;

            const AtualizarUser = new Usuario();

            const usuario = await AtualizarUser.recuperar(id);

            return res.status(200).json(usuario);
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    });

export default usuariosRouter;
