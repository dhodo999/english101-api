const db = require('../models');
const Mats = db.material;

module.exports = {
    create: async(req, res) => {
        try {
            const data = await Mats.create(req.body)
            res.json({
                message: "Material created successfully!!",
                data: data,
            });
        } catch (err) {
            res.status(500).json({
                message: err.message,
                data: null
            });
        }
    },
    getAll: async(req, res) => {
        try {
            const material = await Mats.findAll()
            res.json({
                message: "Materials Retrived Successfully!!!",
                data: material,
            });
        } catch (err) {
            res.status(500).json({
                message: err.message || "Errors occurred while rerieving Materials",
                data: null
            });
        }
    },
    update: async(req, res) => {
        const id = req.params.id
        try {
            const materials = await Mats.findByPk(id, { rejectOnEmpty: true })
            materials.update(req.body, {

                where: { id }
            });
            res.json({
                message: "Material Updated Successfully!!!",
                data: materials,
            });
        } catch (err) {
            res.status(500).json({
                message: err.message || "Errors occurred while rerieving Material",
                data: null
            });
        }
    },
    delete: async(req, res) => {
        const id = req.params.id
        try {
            const materials = await Mats.findByPk(id, { rejectOnEmpty: true })
            materials.destroy()
            res.json({
                message: "Material Deleted Successfully!!!",
            });
        } catch (err) {
            res.status(500).json({
                message: err.message || "Errors occurred while rerieving Material",
                data: null
            });
        }
    },
    findOne: async(req, res) => {
        const id = req.params.id
        try {
            const materials = await Mats.findByPk(id, { rejectOnEmpty: true })
            materials.destroy()
            res.json({
                message: `Material Retrieved Successfully!!! with id: ${id}`,
                data: materials,
            });
        } catch (err) {
            res.status(500).json({
                message: err.message || "Errors occurred while rerieving Material",
                data: null
            });
        }
    },
    getByCategoryId: async(req, res) => {
        const id = req.params.id
        try {
            const materials = await Mats.findAll({
                where: {
                    categoryId: id
                }
            })

            res.json({
                message: "Material Retrieved Successfully!!!",
                data: materials,
            })
        } catch (err) {
            res.status(500).json({
                message: err.message || "Errors occurred while rerieving Material",
                data: null
            });
        }
    },
    getByLevelId: async(req, res) => {
        const id = req.params.id
        try {
            const materials = await Mats.findAll({
                where: {
                    LevelId: id
                }
            })

            res.json({
                message: "Material Retrieved Successfully!!!",
                data: materials,
            })
        } catch (err) {
            res.status(500).json({
                message: err.message || "Errors occurred while rerieving Material",
                data: null
            });
        }
    }
}