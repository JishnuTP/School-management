const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true

    },
    password:{
        tyupe:String,
        required:true
    }
})
