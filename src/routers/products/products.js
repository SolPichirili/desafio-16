const express = require('express');
const { isAdmin } = require('../../middlewares/admin');
const productsController = require('../../controllers/products');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAll);

productsRouter.get('/:id', productsController.getById);

productsRouter.post('/', isAdmin, productsController.save);

productsRouter.put('/:id', isAdmin, productsController.update);

productsRouter.delete('/:id', isAdmin, productsController.deleteById);


module.exports = productsRouter;