const express = require('express');
const router = express.Router();
const weightCtrl = require('../controllers/weight');
const auth = require('../middleware/auth');

//post
router.post('/' , auth, weightCtrl.addWeight);

//put
router.put('/:id', auth, weightCtrl.modifyWeight);

//delete
router.delete('/:id', auth, weightCtrl.deleteWeight);

//get
router.get('/:id', auth, weightCtrl.getOneWeight);
router.get('/', auth, weightCtrl.getAllWeight);

module.exports = router;
