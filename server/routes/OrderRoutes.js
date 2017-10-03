var express = require('express');
var router = express.Router();
var OrderController = require('../controllers/OrderController.js');

router.get('/', OrderController.list);
router.get('/:id', OrderController.show);
router.post('/', OrderController.create);
router.put('/:id', OrderController.update);
router.delete('/:id', OrderController.remove);

module.exports = router;
