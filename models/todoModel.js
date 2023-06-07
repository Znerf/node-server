//Model maps data to database 

const mongoose = require("mongoose")

const Schema= mongoose.Schema;

const TodoSchema= new Schema(
    {
        todo: {
            type:String,
            required:true
        },
        status: {
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

module.exports= mongoose.model("Todos", TodoSchema);