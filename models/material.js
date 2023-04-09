const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Mats = sequelize.define('material', {
        materi: {
            type: Sequelize.STRING,
        },
        categoryId: {
            type: Sequelize.INTEGER,
        }
    });
    return Mats;
}