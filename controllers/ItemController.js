const { Item } = require('../database/db.js')

//traer todos los items de la orden
const getAllItems = async(req, res) => {
  
    res.json( {'message': 'hello world'})
}

// mostrar un item por id
const getItem = async(req, res) => {
}

// agregar un producto a la orden
const postItem = async (req, res) => {
}

// editar un producto de la orden
const updateItem = async (req, res) => {
}

// eliminar un item
const deleteItem = async (req, res) => {
}

module.exports = {
  getAllItems,
  postItem,
  updateItem,
  getItem,
  deleteItem 
}
