import BookModel from "../models/bookModel.js";
//aquí en este archivo van todas las funciones que van a hacer el CRUD de mi app

//voy a hacer el Read de mi CRUD con el metodo GET
//se hace una peticion de todos los libros que estan en model

//con el try y catch le indicamos que si todo esta bien trae algo sino muestra esto
export const getAllBooks = async (req , res) => {
    try{
//aqui le especificamos que todo lo que traiga de la BD  con el get lo devuelva como un json
        const books = await BookModel.findAll()
        res.json(books)

    }catch(error){
        res.status(500).json({message: error.message})

    }
}

//Voy a hacer el Create de mi CRUD con el metodo POST

export const createBook = async (req, res) => {
    try{
        await BookModel.create(req.body)
        res.json({message: "The book has been created successfully!"})

    }catch(error){
        res.status(500).json({message: error.message})
    }
}