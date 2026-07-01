const Usuario = require("../models/U");

const listarUsuarios = async (req, res) => {

    const usuarios = await Usuario.find();

    res.json(usuarios);
};

const curtirMusica = async (req, res) => {

    const { userId, musicaId } = req.body;

    const usuario = await Usuario.findById(userId);

    usuario.musicasCurtidas.push(musicaId);

    await usuario.save();

    res.json(usuario);
};

const biblioteca = async (req, res) => {

    const usuario = await Usuario.findById(req.params.id)
    .populate("musicasCurtidas");

    res.json(usuario);
};

module.exports = {
    listarUsuarios,
    curtirMusica,
    biblioteca
};