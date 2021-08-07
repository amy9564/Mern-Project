const express = require("express");
const router = express.Router();
require("../db/connection");
const { Customer , User } = require("../model/schema");
const bcrypt = require("bcryptjs");

router.get("/" , function (req,res) {
  res.send("Hello Motherfuckers");
});

router.get("/tshirts", async (req, res) => {
      const data = await User.find({},function(err,data){
      if(err){
        console.log(err);
      }
      else {
        res.json(data);
      }
    });
});

router.get("/t-shirts",async (req,res) => {
  try {
    const data = await User.find({ catageory: "t-shirts" }, function(err,data){
      if(err){
        console.log(err);
      }
      else {
        res.json(data);
      }
    })
  } catch (error) {
    console.log(error);
  }
});

router.get("/lounge-tshirts",async(req,res) => {
  try {
        const data = await User.find({ catageory: "lounge-shirts" },function(err,data){
          if(err){
            console.log(err);
          }
          else {
            res.json(data);
          }
        }) 
  } catch (error) {
    console.log(error);
  }
});

router.get("/XS", async (req,res) => {
  try {
    const data = await User.find({ size: "XS" },function(err,data){
      if(err){
        console.log(err);
      }
      else {
        res.json(data);
      }
    })
  } catch (error) {
    console.log(error);
  }
});

router.get("/S",async(req,res) => {
  try {
    const data = await User.find({ size: "S" },function(err,data){
      if(err){
        console.log(err);
      }
      else {
        res.json(data);
      }
    })
  } catch (error) {
    console.log(error);
  }
});

router.get("/M",async(req,res) => {
  try {
    const data = await User.find({ size: "M" },function(err,data){
      if(err){
        console.log(err);
      }
      else {
        res.json(data);
      }
    })
  } catch (error) {
    console.log(error);
  }
});

router.get("/L",async(req,res) => {
  try {
    const data = await User.find({ size: "L" },function(err,data){
      if(err){
        console.log(err);
      }
      else {
        res.json(data);
      }
    })
  } catch (error) {
    console.log(error);
  }
});

router.get("/XL",async(req,res) => {
  try {
    const data = await User.find({ size: "XL" },function(err,data){
      if(err){
        console.log(err);
      }
      else {
        res.json(data);
      }
    })
  } catch (error) {
    console.log(error);
  }
});

router.get("/XXL",async(req,res) => {
  try {
    const data = await User.find({ size: "XXL" },function(err,data){
      if(err){
        console.log(err);
      }
      else {
        res.json(data);
      }
    })
  } catch (error) {
    console.log(error);
  }
});

router.get("/XXXL",async(req,res) => {
  try {
    const data = await User.find({ size: "XXXL" },function(err,data){
      if(err){
        console.log(err);
      }
      else {
        res.json(data);
      }
    })
  } catch (error) {
    console.log(error);
  }
});

router.get("/black",async(req,res) => {
  try {
    const data = await User.find({ color: "black" },function(err,data){
      if(err){
        console.log(err);
      }
      else {
        res.json(data);
      }
    })
  } catch (error) {
    console.log(error);
  }
});

router.get("/yellow",async(req,res) => {
  try {
    const data = await User.find({ color: "yellow" },function(err,data){
      if(err){
        console.log(err);
      }
      else {
        res.json(data);
      }
    })
  } catch (error) {
    console.log(error);
  }
});

router.get("/green",async(req,res) => {
  try {
    const data = await User.find({ color: "green" },function(err,data){
      if(err){
        console.log(err);
      }
      else {
        res.json(data);
      }
    })
  } catch (error) {
    console.log(error);
  }
});

router.get("/blue",async(req,res) => {
  try {
    const data = await User.find({ color: "blue" },function(err,data){
      if(err){
        console.log(err);
      }
      else {
        res.json(data);
      }
    })
  } catch (error) {
    console.log(error);
  }
});

router.get("/white",async(req,res) => {
  try {
    const data = await User.find({ color: "white" },function(err,data){
      if(err){
        console.log(err);
      }
      else {
        res.json(data);
      }
    })
  } catch (error) {
    console.log(error);
  }
});



router.post("/register", async (req, res)=>{
    const { name , email , mobile , password , cpassword , logged_in } = req.body;
    
    if (!name || !email || !mobile || !password || !cpassword || logged_in)
      {
        return res.status(422).json({error : "Please Insert all the fields"});
      }
    try {
          const userexist = await Customer.findOne({email:email});
          
            if(userexist)
            {
              return res.status(404).json({error : "User already Exist"});
            }

          const Data = new Customer({ name , email , mobile , password , cpassword , logged_in });
          await Data.save();           
          res.status(201).json({Message : "Data is Registered Succesfully"});
        } 
    catch (error) 
        {
          console.log(error);  
        }
  });

  router.post("/login", async (req, res) => {
    const { email , password } = req.body;
    if (!email || !password)
      {
        console.log("iske andar bhi agaya");
        return res.status(422).json({error : "Please Enter Credentials"});
      }
    try {
      const usermail = await Customer.findOne({email:email});
      
      if(usermail){
        const pass = await bcrypt.compare(password,usermail.password);
        console.log(pass);
        const token = await usermail.generateAuthToken();
        console.log(token);
        res.cookie("jwttoken",token,{
          expires:new Date(Date.now()+258920000),
          httpOnly:true
        });
    
      if (!pass)
        {
          res.status(422).json({Error : "email is not registered"});
        }
        else{
          res.status(200).json({Message : "Kr liya login"});
        }
      }else {
        res.status(422).json({Error: "Bhadwe email sahi se daal"});
      }

    } catch (err) {
        console.log(err);
    }
  });

  module.exports = router;