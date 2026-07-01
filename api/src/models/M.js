const mongoose = require("mongoose");

const MusicaSchema = new mongoose.Schema({

    nome:String,

    artista:String,

    capa:String

});

module.exports =
mongoose.model(
    "Musica",
    MusicaSchema
);