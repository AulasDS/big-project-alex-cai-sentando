const express = require('express');
const musicaRouter = require('../src/routes/MusicaRouter');

module.exports = (app) => {
    app.use(express.json());
    
    // Rotas principais do Spotify
    app.use('/M', musicaRouter);
    app.use('/U', require('../src/routes/UsuarioRouter'));
    app.use('/P', require('../src/routes/PlaylistRouter'));
    
    // Nova rota para os Álbuns 🎵
    app.use('/A', require('../src/routes/AlbumRouter'));
};