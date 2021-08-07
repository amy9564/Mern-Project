const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name : {
        type : String ,
        require : true ,
        minlength : 3 ,
    },
    email : {
        type : String ,
        require : true ,
    },
    mobile : {
        type : Number ,
        min : 10 ,
        require : true ,
    },
    password : {
        type : String ,
    },
    cpassword : {
        type : String ,  
    },
    logged_in : {
        type : Number ,
    }
});

const playList = new mongoose.Schema({
    catageory : {
        type : String ,
    },
    color : {
        type : String ,
    },
    fabric : {
        type : String ,
    },
    group : {
        type : String ,
    },
    img_src : {
        type : String ,
    },
    name : {
        type : String ,
    },
    price : {
        type : String ,
    },
    serial_number : {
        type : String ,
    },
    width : {
        type : String ,
    }
});
  // Hasing PAssword
  userSchema.pre("save",async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);        
    }
    next();
});
 // We Are Generating Token

 userSchema.methods.generateAuthToken = async function () {
     try {
         let token = jwt.sign({ _id: this._id },process.env.SECRET_KEY);
         this.tokens = this.tokens.concat({ token: token});
         await this.save();
         return token ;
     } catch (error) {
         console.log(error);
     }
 }
 // New Collection 

const Customer = new mongoose.model("Customers", userSchema);
const User = new mongoose.model("tshirts", playList);
module.exports =  { Customer , User };