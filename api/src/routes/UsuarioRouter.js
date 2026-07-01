const express = require("express");

const router = express.Router();

const Usuario =
require("../models/U");

router.get("/", async(req,res)=>{

    const usuarios =
    await Usuario.find()

    .populate("curtidas");

    res.send(usuarios);

});

router.post("/", async(req,res)=>{

    const usuario =
    await Usuario.create(req.body);

    res.send(usuario);

});

router.put("/:id/curtir", async(req,res)=>{

    const usuario =
    await Usuario.findById(req.params.id);

    const musicaId =
    req.body.musicaId;

    const jaCurtiu =
    usuario.curtidas.includes(musicaId);

    if(!jaCurtiu){

        usuario.curtidas.push(
            musicaId
        );

    }

    await usuario.save();

    res.send(usuario);

});

module.exports = router;