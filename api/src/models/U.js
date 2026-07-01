const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({

    nome:String,

    foto:String,

    curtidas:[

        {

            type:mongoose.Schema.Types.ObjectId,

            ref:"Musica"

        }

    ]

});

module.exports =
mongoose.model(
    "Usuario",
    UsuarioSchema
);