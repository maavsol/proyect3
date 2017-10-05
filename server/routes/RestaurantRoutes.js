var express = require('express');
var router = express.Router();
var restaurantController = require('../controllers/restaurantController.js');

router.get('/', restaurantController.list);
router.get('/:id', restaurantController.show);
// router.post('/', restaurantController.create);
// router.put('/:id', restaurantController.update);
// router.delete('/:id', restaurantController.remove);

module.exports = router;
