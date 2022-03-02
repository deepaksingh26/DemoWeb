const mongoose=require("mongoose");
const jwt =require('jsonwebtoken');
const bcrypt=require("bcryptjs");

const userSchema=new mongoose.Schema({
    fName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
    cpass:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    messages:[{ 
            fName:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true
            },
            phone:{
                type:Number,
                required:true
            },
            msg:{
                type:String,
                required:true,
            }
        
    }],
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})
userSchema.pre('save',async function(next){
    if(this.isModified('pass')){
        this.pass=await bcrypt.hash(this.pass,12);
        this.cpass=await bcrypt.hash(this.cpass,12);
    }
    next();
});
//we are generating token
userSchema.methods.generateAuthToken=async function (){
try{
let token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
this.tokens=this.tokens.concat({token:token});
await this.save();
return token;
    }catch(e)
    {
         console.log(e);
    }
}
//store the message
userSchema.methods.addMessage=async function (fName,email,phone,msg)
{
    try
    {
          this.messages=this.messages.concat({fName,email,phone,msg});
          await this.save();
          return this.messages;
    }
    catch(e)
    {
        console.log(e);
    }
}




const user=mongoose.model("USER",userSchema);

module.exports=user;