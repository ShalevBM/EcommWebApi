const mongoose=require('mongoose');//חיבור לספיירת מונגוס
const productSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    pname:String,
    price:Number,
    pdesc:String,
    picname:String,
    cid:Number,
    pid:Number
});//יצירת סכמה עבור מוצרים
const productModel=mongoose.model('products',productSchema);// יצירת מודל דרכו נעבוד מול בסיס הנתונים עם המוצרים

module.exports=productModel;