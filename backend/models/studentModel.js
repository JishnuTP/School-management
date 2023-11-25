const mongoose = require("mongoose");

const studentSchema= mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    otp:{
        type:String,
        default:"-1"
    },
    profile:{
        type:String,
        default: 'https://res.cloudinary.com/dqn0v17b6/image/upload/v1691727669/routcpczust6tlyknhyy.jpg'
    },
}, {
    timestamps: true   
})


const studentModel= mongoose.model("student",studentSchema)
modeule.exports = studentModel