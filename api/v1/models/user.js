const mongoose=require('mongoose');//חיבור לספיירת מונגוס
const userSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    userName:String,
    pass:String,
    fullName:String
});//יצירת סכמה עבור משתמש

module.exports=mongoose.model('users',userSchema);// ייצוא המודל שהוגדר ביחד עם הטבלה בבסיס הנתונים עם והסכימה שהגדרנו עבורה
