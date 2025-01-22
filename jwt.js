const jwt=require('jsonwebtoken');



const Privatekey="shalevbenmoshe"
const token=jwt.sign({userName:"shalevbm1@gmail.com"},"Privatekey",{expiresIn:'1h'});
console.log(token);
    const authMiddle=(req,res,next)=>{
        try
        {
        const authString=req.headers.authorization;
        const arr=authString.split(' ');
        const token=arr[1]; 
        const obj=jwt.verify(token,Privatekey);
         next(); 
        }
        catch(err)
        {
             return res.status(500).json({msg:err.message});
        }     
};