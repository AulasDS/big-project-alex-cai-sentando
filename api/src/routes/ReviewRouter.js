const express = require("express");

const router = express.Router();

const Review =
require("../models/Review");

router.post("/", async(req,res)=>{

    try{

        const review =
        await Review.create({

            usuario:req.body.usuario,

            musica:req.body.musica,

            comentario:req.body.comentario

        });

        res.send(review);

    }catch(err){

        res.status(500).send(err);

    }

});

router.get("/", async(req,res)=>{

    try{

        const reviews =
        await Review.find()

        .populate("usuario")

        .populate("musica");

        res.send(reviews);

    }catch(err){

        res.status(500).send(err);

    }

});

module.exports = router;