const express = require("express");

const cors = require("cors");

const app = express();

require("./startup/db")();

app.use(cors());

app.use(express.json());

const UsuarioRouter =
require("./src/routes/UsuarioRouter");

const MusicaRouter =
require("./src/routes/MusicaRouter");

const ReviewRouter =
require("./src/routes/ReviewRouter");

app.use("/usuarios", UsuarioRouter);

app.use("/musicas", MusicaRouter);

app.use("/reviews", ReviewRouter);

app.listen(3000,()=>{

    console.log(
        "Servidor rodando na porta 3000"
    );

});