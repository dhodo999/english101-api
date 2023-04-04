const db = require('../models');
const material = db.material;

module.exports = {
    create: async(req, res) => {
        try {
            const data = await material.create(req.body)
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
            const material = await material.findAll()
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
            const material = await material.findByPk(id, { rejectOnEmpty: true })
            material.update(req.body, {

                where: { id }
            });
            res.json({
                message: "Material Updated Successfully!!!",
                data: material,
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
            const material = await material.findByPk(id, { rejectOnEmpty: true })
            material.destroy()
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
            const material = await material.findByPk(id, { rejectOnEmpty: true })
            material.destroy()
            res.json({
                message: `Material Retrieved Successfully!!! with id: ${id}`,
                data: material,
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
            const material = await material.findAll({
                where: {
                    categoryId: id
                }
            })

            res.json({
                message: "Material Deleted Successfully!!!",
                data: material,
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
            const material = await material.findAll({
                where: {
                    LevelId: id
                }
            })

            res.json({
                message: "Material Deleted Successfully!!!",
                data: material,
            })
        } catch (err) {
            res.status(500).json({
                message: err.message || "Errors occurred while rerieving Material",
                data: null
            });
        }
    }
}