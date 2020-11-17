import { Router } from "express";
// import loginRouter from "./login.routes";
import usuariosRouter from "./Usuarios.routes";
import loginRouter from "./Autenticacao.routes";

const routes = Router();

routes.use("/usuarios", usuariosRouter);
routes.use("/login", loginRouter);

export default routes;
