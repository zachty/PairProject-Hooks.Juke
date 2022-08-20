const Sequilize = require('sequelize');
const db = require('./db');

const Artist = db.define('artist', {
    name: {
        type: Sequilize.STRING,
        allowNull: false,
    },
});

module.exports = Artist;
