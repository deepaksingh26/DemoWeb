const jwt =require("jsonwebtoken");
const User=require('../model/userschema');
const middleware=  async (req,res,next) =>{
 try{
console.log(`I have entered to middleware `);
const token=req.cookies.jwt;
console.log(` token from now ${token}`);
const verifytoken=jwt.verify(token,"MYNAMEISDEEPAKBHAIYAJOBANEGABIDHAYAK");
console.log(`hello ${verifytoken._id}`);
const rootUser= await User.findOne({_id:verifytoken._id,"tokens.token":token});
console.log(`hello ${rootUser.fName}`);
if(!rootUser)
{
   throw new Error('User not found');
}
req.token=token;
req.rootUser=rootUser;
req.userId=rootUser._id;
next();
 }catch(e){
res.status(401).send('unotherized');
console.log(e);
 }
}
module.exports=middleware;