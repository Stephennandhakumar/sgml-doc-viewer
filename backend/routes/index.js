const express = require('express');
const router = express.Router();

// Import controllers (we'll create these later)
const fileController = require('../controllers/fileController');

// Define routes
router.post('/upload', fileController.uploadFile);
router.get('/files', fileController.getFiles);
router.post('/archive', fileController.archiveFile);
router.post('/retrieve', fileController.retrieveFile);
router.get('/tree', fileController.getTreeStructure);
router.get('/convert', fileController.convertToPdf);
router.get('/graphics', fileController.getGraphic);

module.exports = router;
