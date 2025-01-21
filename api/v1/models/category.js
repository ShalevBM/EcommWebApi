const mongoose=require('mongoose');//חיבור לספיירת מונגוס
const categorySchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    cname:String,
    cdesc:String,
    catpic:String,
    cid:Number,
    parentCat:String
});//יצירת סכמה עבור מוצרים
const categoryModel=mongoose.model('categories',categorySchema);// יצירת מודל דרכו נעבוד מול בסיס הנתונים עם המוצרים

module.exports=categoryModel;