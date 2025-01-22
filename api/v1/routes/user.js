const router=require('express').Router();
const bcrypt=require('bcrypt');
const userModel=require('../models/user');
const jwt=require('jsonwebtoken');


router.post('/login',(req,res)=>{
    const{userName,pass}=req.body;
    userModel.find({userName}).then((data)=>{
        if (data.length==0)
        {
            return res.status(200).json({msg:"user/pass not found"});
        }
        const hashPass=data[0].pass;
        bcrypt.compare(pass,hashPass,).then((ans)=>{
            return res.status(200).json({msg:"login succefully"});
           });
    });

    
    
});

router.post('/signup',(req,res)=>{
    //נקבל את פרטי המשתמש לרישום, נצפין את הסיסמה, נשמור את פרטי המשתמש בבסיס הנתונים
    const{userName,pass,fullName}=req.body;
    const rounds=10;//סבבי הצפנה
    bcrypt.hash(pass,rounds,(err,hashString)=>{
        if(err)
        {
            return res.status(500).json({msg:err.message});
        }
        else
        {
            userModel.insertMany([{userName,pass:hashString,fullName}]).then((data)=>{
                return res.status(200).json(data);
            });
        }
    });
});


module.exports=router;