import express from "express";
import routes from "./routes/index.routes";
import cors from "cors";

import "./database";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log("(☞ﾟヮﾟ)☞ Server Iniciado ☜(ﾟヮﾟ☜)");
});
