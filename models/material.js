const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Mats = sequelize.define('material', {
        materi: {
            type: Sequelize.STRING,
        }
    });
    return Mats;
}