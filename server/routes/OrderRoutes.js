const router = require('express').Router()
const orderController = require('../controllers/orderController.js')

router.get('/', orderController.list)
router.get('/:id', orderController.show)
router.post('/', orderController.create)
router.put('/:id', orderController.update)
// router.delete('/:id', orderController.remove)

module.exports = router
