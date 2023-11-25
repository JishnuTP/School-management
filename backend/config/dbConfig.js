const mongoose=require("mongoose")
mongoose.connect(process.env.mongoUrl)

const connection=mongoose.connection

connection.on("connected",()=>console.log("Mongodb Connected"))
connection.on("error",(error)=>console.log("Error in connection mongodb",error))

module.exports= mongoose