var express = require('express');
var router = express.Router();
var RestaurantController = require('../controllers/RestaurantController.js');

router.get('/', RestaurantController.list);
router.get('/:id', RestaurantController.show);
router.post('/', RestaurantController.create);
router.put('/:id', RestaurantController.update);
router.delete('/:id', RestaurantController.remove);

module.exports = router;
