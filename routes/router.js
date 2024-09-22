const express = require('express');

const router = express.Router();
const jamp3 = require("../controller/jamp3");

router.get('/', jamp3.index);
router.get('/music/songs', jamp3.songs);
router.get('/music/playlist', jamp3.playlist);
router.get('/music/albums', jamp3.albums);
router.get('/music/artist', jamp3.artist);

module.exports = router;