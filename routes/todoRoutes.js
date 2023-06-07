
//importing Libray
const express= require("express");
const {getTodos, createTodos, getTodo, deleteTodo, updateTodo} = require("../controllers/todoController");

//intantiating Router for routes controller
const router= express.Router();

//Routes Asignments
router.get("/test", (req,res)=>{
    res.status(200).json({"message":"Hello World"})   //Basic testing function
})
router.post("/", createTodos);

router.get("/", getTodos)           //Get Todos and return array of todos from controllers

router.get("/:id", getTodo);

router.delete("/:id", deleteTodo)

router.put("/:id",updateTodo )


//export router 
module.exports = router