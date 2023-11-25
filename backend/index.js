const express = require("express");
const app = express();
const http=require("http")
const cors=require("cors")
const server=http.createServer(app)


require("dotenv").config()
const dbConfig= require("./config/dbConfig");

const userRoute = require("./route/userRoute");
const schoolRoute = require("./route/schoolRoute");


app.use(express.json())
app.use(cors())

app.use("/api/user/",userRoute)
app.use("/api/school/",schoolRoute)


const PORT = process.env.PORT||8000;

server.listen(PORT,()=>{
    console.log(`SERVER CONNECTED port = ${PORT}`);
});