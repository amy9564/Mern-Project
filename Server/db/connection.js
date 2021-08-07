const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path: "./server/config.env"});

const DB = process.env.DATABASE;

mongoose.connect(DB, { useNewUrlParser: true , useCreateIndex:true , useUnifiedTopology:true , useFindAndModify:false }).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
});