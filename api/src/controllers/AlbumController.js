const Album = require('../models/A');

const aController = {
    // POST '/'
    create: async (req, res) => {
        try {
            const { nome, artista, capaUrl, ano } = req.body;

            if (!nome || !artista) {
                return res.status(400).json({
                    message: 'Nome e artista são obrigatórios.'
                });
            }

            const novoAlbum = await Album.create({
                nome,
                artista,
                capaUrl,
                ano
            });

            return res.status(201).json({
                message: 'Álbum criado com sucesso!',
                data: novoAlbum
            });

        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao criar álbum.',
                error: error.message
            });
        }
    },

    // GET '/'
    getAll: async (req, res) => {
        try {
            const albuns = await Album.find();

            return res.status(200).json(albuns);

        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao buscar álbuns.',
                error: error.message
            });
        }
    },

    // GET '/:id'
    getById: async (req, res) => {
        try {
            const { id } = req.params;

            const album = await Album.findById(id);

            if (!album) {
                return res.status(404).json({
                    message: 'Álbum não encontrado.'
                });
            }

            return res.status(200).json(album);

        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao buscar álbum.',
                error: error.message
            });
        }
    },

    // PUT '/:id'
    update: async (req, res) => {
        try {
            const { id } = req.params;

            const albumAtualizado = await Album.findByIdAndUpdate(
                id,
                req.body,
                { new: true, runValidators: true }
            );

            if (!albumAtualizado) {
                return res.status(404).json({
                    message: 'Álbum não encontrado.'
                });
            }

            return res.status(200).json({
                message: 'Álbum atualizado com sucesso!',
                data: albumAtualizado
            });

        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao atualizar álbum.',
                error: error.message
            });
        }
    },

    // DELETE '/:id'
    delete: async (req, res) => {
        try {
            const { id } = req.params;

            const album = await Album.findByIdAndDelete(id);

            if (!album) {
                return res.status(404).json({
                    message: 'Álbum não encontrado.'
                });
            }

            return res.status(200).json({
                message: 'Álbum deletado com sucesso!'
            });

        } catch (error) {
            return res.status(500).json({
                message: 'Erro ao deletar álbum.',
                error: error.message
            });
        }
    }
};

module.exports = albumController;