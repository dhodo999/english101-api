module.exports = (sequelize, Sequelize) => {
    const material = sequelize.define('material', {
        materi: {
            type: Sequelize.STRING,
        }
    });
    return material;
}