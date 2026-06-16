const express = require('express');
const router = express.Router();
const pController = require('../controllers/PlaylistController');

router.get('/', pController.getAll); // com filtro
router.get('/:id', pController.getById);

module.exports = router;