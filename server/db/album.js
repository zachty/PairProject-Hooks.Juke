const Sequilize = require('sequelize');
const db = require('./db');

const Album = db.define('album', {
    name: {
        type: Sequilize.STRING,
        allowNull: false,
    },
    artworkUrl: {
        type: Sequilize.STRING,
        defaultValue: 'default-ablum.jpg',
    },
});

module.exports = Album;
