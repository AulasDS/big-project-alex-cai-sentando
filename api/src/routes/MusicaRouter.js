const express = require("express");

const router = express.Router();

const Musica =
require("../models/M");

router.get("/", async(req,res)=>{

    const musicas =
    await Musica.find();

    res.send(musicas);

});

router.post("/", async(req,res)=>{

    const musica =
    await Musica.create(req.body);

    res.send(musica);

});

module.exports = router;