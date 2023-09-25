import BookModel from "../models/bookModel.js";

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