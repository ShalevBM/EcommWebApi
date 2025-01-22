const bcrypt=require('bcrypt');//קישור לספריית ביקריפט

const pass="abc123";
const rounds=10;
//ונקציה להצפנה של הסיסמה

bcrypt.hash(pass,rounds,(err,hashString)=>{
    if(err)
    {
        console.log(err.message);
    }
    else
    {
        console.log(hashString);
    }
});



let hashFromDb="$2b$10$v3wp8PEJUWzI7IwcNW.zkOmNImTYXwPoyCjLXtqHFtPbZik.AoAtC";
bcrypt.compare(pass,hashFromDb).then((ans)=>{
 if(ans)
 console.log(`ok`);
 else
 console.log(`not ok`);
});