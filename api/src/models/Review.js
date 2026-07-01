const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({

    usuario:String,

    nomeUsuario:String,

    musica:String,

    comentario:String

});

module.exports =
mongoose.model(
    "Review",
    ReviewSchema
);