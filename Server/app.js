const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({path: "./config.env" });

require("./db/connection.js");

const port = process.env.PORT;
const route = require("./router/auth.js");

app.use(express.json());
app.use(route);    

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });

app.listen(3000,()=>{
    console.log("running 3000");
})