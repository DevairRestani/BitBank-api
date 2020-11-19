import { Router } from "express";

import AutenticacaoUserService from "../services/AutenticacaoUsuario.service";

const loginRouter = Router();

loginRouter.post("/", async (request, response) => {
    try {
        const { email, senha } = request.body;

        const autenticacaoUser = new AutenticacaoUserService();

        const { usuario, token } = await autenticacaoUser.execute({
            email,
            senha,
        });

        return response.json({ usuario, token });
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default loginRouter;
