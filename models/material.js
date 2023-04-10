const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Mats = sequelize.define('material', {
        materi: {
            type: Sequelize.TEXT,
        },
        categoryId: {
            type: Sequelize.INTEGER,
        }
    });
    return Mats;
}