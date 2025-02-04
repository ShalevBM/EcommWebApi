const express=require('express');
const app=express();
const productRouter=require('./api/v1/routes/product');
const categoryRouter=require('./api/v1/routes/category');
const userRouter=require('./api/v1/routes/user');
const jwt=require('jsonwebtoken');
const morgan=require('morgan');
const mongoose=require('mongoose');
//const secure=require('./api/v1/middlewares/secure');
const auth=require('./api/v1/middlewares/auth');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use('/product',auth,productRouter);
app.use('/category',categoryRouter);
app.use('/user',userRouter);
app.use(auth);



const mongoConnstr=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ecom.r9vhn.mongodb.net/WebApi2025`;
mongoose.connect(mongoConnstr).then(()=>{
    console.log('Connected To Mongo');
});



app.all('*',(req,res)=>{
    return res.status(404).json({Msg:`Not Found 404`});
});

module.exports=app;