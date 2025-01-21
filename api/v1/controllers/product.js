const productModel=require('../models/product');
const mongoose=require('mongoose');

module.exports={
    getAll:(req,res)=>{
    try 
    {
          productModel.find().then((products)=>{
             return res.status(200).json({products});
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
        productModel.find({pid:req.params.id}).then((product)=>{
            return res.status(200).json({product});
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
        productModel.updateOne({pid:req.params.id},req.body).then((product)=>{
            return res.status(200).json({product});
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
        productModel.insertMany([req.body]).then((data)=>{
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
        productModel.deleteOne({pid:req.params.id}).then((product)=>{
            return res.status(200).json({product});
         });
    }
    catch
    {
          return res.status(500).json({Msg:"500 Server Error"});
    }
    }
};