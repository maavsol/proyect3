const router = require('express').Router()
const orderController = require('../controllers/orderController.js')
const productController = require('../controllers/productController.js')
const restaurantController = require('../controllers/restaurantController.js')


router.get('/order/', orderController.list)
router.get('/order/:id', orderController.show)
router.post('/order/', orderController.create)
router.put('/order/:id', orderController.update)
// router.delete('/:id', orderController.remove)

router.get('/product/', productController.list);
router.get('/product/:id', productController.show);

router.get('/restaurant/', restaurantController.list);
router.get('/restaurant/:id', restaurantController.show);

module.exports = router
