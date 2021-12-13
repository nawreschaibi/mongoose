const express = require ("express");

const app = express();


const DBconnect = require ("./DBconnect")
DBconnect();
app.use(express.json())
app.use("/user" ,require ("./models/routes/user"));




const port = 5001 ;
app.listen(port ,(err)=>err?console.log(err): console.log("server is runningn"));
