const router = require('express').Router();
const { Album, Artist, Song } = require('../db');

// connect your API routes here!
router.get('/albums', async (req, res, next) => {
    try {
        const data = await Album.findAll({ include: Artist });
        res.send(data);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get('/albums/:id', async (req, res, next) => {
    try {
        const data = await Album.findOne({
            where: { id: req.params.id },
            include: [{ model: Artist }, { model: Song }],
        });
        res.send(data);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;
