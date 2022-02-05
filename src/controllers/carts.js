const daosCart = require('../daos/indexCart');
const {checkNotification} = require('../services/products');

const ADMIN = true;
const CartDaos = daosCart;

const getAll = async (req, res)=>{
    const carts = await CartDaos.getAll();
    res.send({data: carts});
}

const getNewId = async (req, res) => {
    const cart = req.body;
    const cartId = await CartDaos.getNewId(cart);
    res.send({ data: cartId });
}

const deleteById = async (req, res) => {
    const id = req.params.id;
    const cartDeletedId = await CartDaos.deleteById(id);
    checkNotification(ADMIN, cartDeletedId);
    res.send({ data: cartDeletedId });
}

const getById = async (req, res) => {
    const id = req.params.id;
    const cart = await CartDaos.getById(id);
    const { productos } = cart;
    res.send({ data: productos });
}

const addProductById = async (req, res) => {
    const id = req.params.id;
    const products = req.body;
    const cart = await CartDaos.addProductById(id, products);
    res.send({ data: cart });
}

const deleteProductById = async (req, res) => {
    const cartId = req.params.id;
    const productId = req.params.id_prod;
    const cart = await CartDaos.deleteProductById(cartId, productId);
    res.send({ data: cart });
}

module.exports = {
    getAll,
    getNewId,
    deleteById,
    getById,
    addProductById,
    deleteProductById
}