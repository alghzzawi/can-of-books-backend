"use strict";
const express = require("express"); 
const server = express();
const cors = require("cors");
server.use(cors());

server.use(express.json())
require("dotenv").config();

const mongoose = require("mongoose");
const PORT = process.env.PORT;
mongoose.connect(`mongodb://localhost:27017/booksDB`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); 
// mongoose.connect("mongodb://books:mg1234@ac-thv50dq-shard-00-00.h2k1tmg.mongodb.net:27017,ac-thv50dq-shard-00-01.h2k1tmg.mongodb.net:27017,ac-thv50dq-shard-00-02.h2k1tmg.mongodb.net:27017/?ssl=true&replicaSet=atlas-yh80dn-shard-0&authSource=admin&retryWrites=true&w=majority", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }); 

const booksSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
});

const bookModel = mongoose.model("book", booksSchema); 

// http://lovalhost:port/books
server.get("/books", getbooksHandler);
server.post('/addBook', getAddBookHandler);
server.delete('/deleteBook/:id',deleteBookHandler)
server.put('/updata')

function getbooksHandler(req, res) {
  bookModel.find({}, (err, result) => {
    function getbooksHandler(req, res) {
  });
}


async function getAddBookHandler(req,res){
    // console.log(req.body)
    const {bookTitle,bookDescription,bookStatus} = req.body
    await bookModel.create({
      title: bookTitle,
      description: bookDescription,
      status: bookStatus,
    })
    bookModel.find({},(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
}


function deleteBookHandler(req,res){
  const bookId = req.params.id;
  bookModel.deleteOne({_id:bookId},(err,result)=>{

    bookModel.find({},(err,result)=>{
          if(err){
              console.log(err)
          }
          else{
              res.send(result)
            }
          })
      })
    }
    
    // http://localhost:
 server.get("/", (req, res) => {
    });
    server.get("*", (req, res) => {
      //path
      res.send("route is runing--");
    });
    
    server.listen(PORT, () => {
      console
    }