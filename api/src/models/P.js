const mongoose = require("mongoose");

const PlaylistSchema = new mongoose.Schema({
    nome: String,

    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    },

    musicas: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Musica"
        }
    ]
});

module.exports = mongoose.model("Playlist", PlaylistSchema);