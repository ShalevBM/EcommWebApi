const router=require('express').Router();
const bcrypt=require('bcrypt');
const userModel=require('../models/user');
const jwt=require('jsonwebtoken');




/*router.post('/login',(req,res)=>{
    const{userName}=req.body;
    userModel.find({userName}).then((data)=>{
        if (data.length==0)
        {
            return res.status(200).json({msg:"user/pass not found"});
        }
        const hashPass=data[0].pass;
        bcrypt.compare(pass,hashPass,).then((ans)=>{
            if(ans)
                return res.status(200).json({msg:"login succefully"});
            else
                return res.status(200).json({msg:`user/pass not found`});
             
        });
    });
});
*/

router.post('/login',(req,res)=>{
    const{userName,pass}=req.body;
    userModel.find({userName}).then((data)=>{
        if (data.length==0)
        {
            return res.status(200).json({msg:"user/pass not found"});
        }
        const hashPass=data[0].pass;
        bcrypt.compare(pass,hashPass,).then((ans)=>{
            if(ans)
            {
                const token=jwt.sign({userName},"132465");
                return res.status(200).json({msg:"login succefully",token});
            }
            else
                return res.status(200).json({msg:`user/pass not found`});
             
        });
    });
});



// נקודת קצה עבור הרשמה
router.post('/signup', (req, res) => {
    const rounds = 10; // מספר סבבים ליצירת ה-Salt
    const { userName, pass, fullName } = req.body;
    // בדוק אם שם המשתמש כבר קיים
    userModel.find({userName}).then((data)=>{
        if (data.length>0)
            return res.status(400).json({ msg: 'Username already exists' });
        bcrypt.hash(pass,rounds, (err, hashPass)=>{
            if (err) 
            {
                return res.status(500).json({ msg: err.message });
            }
            else 
            {
                userModel.insertMany([{ userName, pass: hashPass, fullName }]).then((data)=>{
                    return res.status(200).json(data);
                }).catch((err)=>{
                    return res.status(500).json({ msg: 'Error saving user', error: err.message });
                });
            }
        });
    }).catch((err) =>{
        return res.status(500).json({ msg: 'Server error', error: err.message });
    });
});





module.exports=router;