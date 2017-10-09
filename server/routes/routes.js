const router = require('express').Router()
const OrderController = require('../controllers/order')
const ProductController = require('../controllers/product')
const RestaurantController = require('../controllers/restaurant')

router.get('/order/', OrderController.list)
router.get('/order/:id', OrderController.show)
router.post('/order/', OrderController.create)
router.put('/order/:id', OrderController.update)
// router.delete('/:id', OrderController.remove)

router.get('/product/', ProductController.list)
router.get('/product/:id', ProductController.show)

router.get('/restaurant/', RestaurantController.list)
router.get('/restaurant/:id', RestaurantController.show)

module.exports = router
