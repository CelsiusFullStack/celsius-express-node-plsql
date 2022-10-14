const router = require('express').Router()
const productsServices=require('./products.services')
// definiendo las rutas de mi api para la entidad products
router.get('/',productsServices.getAllProducts)
router.post('/',productsServices.postProduct)
router.get('/:id',productsServices.getProductById)
router.patch('/:id',productsServices.patchProduct)
router.delete('/:id',productsServices.deleteProduct)
module.exports = router