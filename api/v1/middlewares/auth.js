const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(' ')[1];//שליפת הטוקן מתוך ההדר של האבטחה
        const privateKey=process.env.PRIVATE_KEY
        const userNameObj=jwt.verify(token,privateKey);// פענוח הטוקן ושמירת המפוענח
        req.userName=userNameObj;
        next();
    }
    catch{
        return res.status(403).json({msg:"not authorized"});

    }
};
