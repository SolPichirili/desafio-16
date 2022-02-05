const daos = require('../daos/indexProducts');

const ProductDao = daos;

const getAll = async (req, res) => {
    const productList = await ProductDao.getAll();
    res.send({ data: productList })
}

const getById = async (req, res) => {
    const id = req.params.id;
    const productById = await ProductDao.getById(id);
    res.send({ data: productById });
}

const save = async (req, res) => {
    const newProduct = req.body;
    const newList = await ProductDao.save(newProduct);
    res.send({ data: newList });
}

const update = async (req, res) => {
    const id = req.params.id;
    const newProduct = req.body;
    const updatedProduct = await ProductDao.update(id, newProduct);
    res.send({ data: updatedProduct });
};

const deleteById = async (req, res) => {
    const id = req.params.id;
    const newList = await ProductDao.deleteById(id);
    res.send({ data: newList });
}

module.exports = {
    getAll,
    getById,
    save,
    update,
    deleteById
}