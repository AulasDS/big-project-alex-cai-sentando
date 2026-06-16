const Musica = require("../models/M");

const listar = async (req, res) => {

    const genero = req.query.genero;

    let musicas;

    if(genero){

        musicas = await Musica.find({ genero });

    }else{

        musicas = await Musica.find();

    }

    res.json(musicas);
};

const buscarPorId = async (req, res) => {

    const musica = await Musica.findById(req.params.id);

    res.json(musica);
};

module.exports = {
    listar,
    buscarPorId
};