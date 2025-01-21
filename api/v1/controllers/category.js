const categoryModel=require('../models/category');
const mongoose=require('mongoose');

module.exports={
    getAll:(req,res)=>{
    try 
    {
          categoryModel.find().then((categories)=>{
             return res.status(200).json({categories});
          });
    }
    catch
    {
          return res.status(500).json({Msg:"500 Server Error"});
    }
    },
    getById:(req,res)=>{
        try 
    {
        categoryModel.find({pid:req.params.id}).then((category)=>{
            return res.status(200).json({category});
         });
        
    }
    catch
    {
          return res.status(500).json({Msg:"500 Server Error"});
    }
    },
    updateById:(req,res)=>{
        try 
    {
        categoryModel.updateOne({cid:req.params.id},req.body).then((category)=>{
            return res.status(200).json({category});
         });
    }
    catch
    {
          return res.status(500).json({Msg:"500 Server Error"});
    }
    },
    addNew:(req,res)=>{
        try 
    {  
        categoryModel.insertMany([req.body]).then((data)=>{
            return res.status(200).json(data);

        });
    
    }
     catch
    {
          return res.status(500).json({Msg:"500 Server Error"});
    }
    },
    deleteById:(req,res)=>{
        try 
    {
        categoryModel.deleteOne({pid:req.params.id}).then((category)=>{
            return res.status(200).json({category});
         });
    }
    catch
    {
          return res.status(500).json({Msg:"500 Server Error"});
    }
    }
};