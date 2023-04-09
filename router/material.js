const materialController = require('../controllers/material');
const router = require('express').Router();


router.post('/', materialController.create);
router.get('/', materialController.getAll);
router.put('/:id', materialController.update);
router.delete('/:id', materialController.delete);
router.get('/:id', materialController.findOne);
router.get('/category/:id', materialController.getByCategoryId);



module.exports = router;