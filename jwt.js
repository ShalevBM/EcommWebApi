require('dotenv').config();
const jwt=require('jsonwebtoken');


const privateKey=process.env.PRIVATE_KEY
const token=jwt.sign({userName:"shalevbm1@gmail.com"},privateKey,{expiresIn:'1h'});
console.log(token);
const fakekey="123465";


try
{
const obj=jwt.verify(token,privateKey);
console.log(obj);
}
catch(err)
{
  console.log(err.message);
}