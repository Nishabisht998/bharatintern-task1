const express = require('express');
const router=express.Router();
const Model=require('../Models/userModel');
router.post('/add',(req,res)=>{
    new Model(req.body).save()
    .then((result) => {
        res.json(result);

    }).catch((err) => {
        res.json(err);
    });

});
router.get('/getall',(req,res)=>{
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });

});
router.get('/getbyemail/:email',(req,res)=>{
    console.log(req.params.email);
    Model.find({email:req.params.email})
    .then((result) => {
        req.json(result);
    }).catch((err) => {
        res.json(err);
    });
});
router.get('/getbyid/:id',(req,res)=>{
    console.log(req.params.id);
    Model.findById({id:req.params.id})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });

});
router.put('/update/:id',(req,res)=>{
    console.log(req.params.id);
    Model.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });

});
router.delete("/delete/:id", (req, res) => {
    console.log(req.params.id);
  
    Model.findByIdAndDelete(req.params.id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  router.post("/authenticate", (req, res) => {
  
    Model.findOne(req.body)
    .then((result) => {
  
      if(result !== null){
        res.status(200).json(result);
      }else{
        res.status(401).json(result);
      }
  
    })
    .catch((err) => {
      res.status(500).json(err);
    });
  });
module.exports=router;
