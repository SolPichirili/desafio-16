const express = require('express');
const productsRouter = require('./products/products');
const cartRouter = require('./cart/cart');

const router = express.Router();

router.use('/productos', productsRouter);
router.use('/carrito', cartRouter);

module.exports = router;