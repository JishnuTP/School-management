const mongoose = require("mongoose")

const schoolSchema = mongoose.Schema({
    school_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const schoolModel = mongoose.model("school",schoolSchema);
module.exports = schoolModel;