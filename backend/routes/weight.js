const express = require('express');
const router = express.Router();
const weightCtrl = require('../controllers/weight');

//post
router.post('/' , weightCtrl.addWeight);

//put
router.put('/:id', weightCtrl.modifyWeight);

//delete
router.delete('/:id', weightCtrl.deleteWeight);

//get
router.get('/:id', weightCtrl.getOneWeight);
router.get('/', weightCtrl.getAllWeight);

module.exports = router;
