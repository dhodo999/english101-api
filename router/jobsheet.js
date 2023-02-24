const jobsheetController = require('../controllers/jobsheet');
const router = require('express').Router();

// Route untuk post jawaban
router.post('/one', jobsheetController.submitOne);

module.exports = router;