import React, { useState,useEffect } from 'react';
import axios from 'axios';

export default function Contact()
{
  const[userData,setUserData]=useState({fName:"", email:"",phone:" ",msg:"",});
  const callAboutPage=async()=>{
    try{
      const res= await axios('/getdata',{
      method:"GET",
      headers:
       { "Content-Type":"application/json"},
      });
      const temp=JSON.stringify(res.data);
      const user = JSON.parse(temp);
      setUserData({...userData,
      fName:user.fName,email:user.email,phone:user.phone,
      });
      console.log(`its from userdata ${user}`);
      if(res.status===200){
        const error=new Error(res.error);
        throw error;
      }
      else{
        
        window.alert("log kar ke aao");
      }
       }catch(e)
       {
        console.log(e);
       }
 }
useEffect(() => 
{
callAboutPage();
},[]);

//we are storing data instates

const handleInput = (e)=>
{
const name=e.target.name;
const value=e.target.value;

setUserData({
  ...userData,
  [name]:value,
})
};
//send data to backend
const contactform =async (e)=>{
  e.preventDefault();
  const data =await axios.post('/deepak',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    data: {
        fName:userData.fName,
        email:userData.email,
        phone:userData.phone,
        msg:userData.msg,
      }
  });
  console.log("ese mt drbaya kro bhai");
  console.log(data);
    if(!data)
    {
      console.log("mesage not sent");
    }
    else{
      console.log("mesage sent");
      setUserData
      ({
    ...userData,
     msg:"",
      });
    }
  }

  return (
    <>
      <div className="my-5">
        <h1 className='text-center'> Contact Us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
              
      <form method='POST'>
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">First Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" name="fName" value={userData.fName} onChange={handleInput} placeholder="Enter your name" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={userData.email} onChange={handleInput} placeholder="name@example.com" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Phone</label>
              <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={userData.phone} onChange={handleInput} placeholder="mobile number " />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message </label>
              <textarea class="form-control"
              name="msg"
              value={userData.msg}
              onChange={handleInput}
              id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="col-12">
              <button className='btn btn-outline-primary' onClick={contactform} >Submit form</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
  }

// const contactform =async (e)=>{
//   e.preventDefault();
//   const [fName,email,phone,msg]=userData;
//   const res =await axios.post('http://localhost:5000/deepak',{
//     method:"POST",
//     headers:{
//       "Content-Type":"application/json"
//     },
//     body:JSON.stringify
//     ({
//       fName,email,phone,msg
//     })
//   });
//   const data=await res.json();
//   console.log(data);
//   if(!data)
//   {
//     console.log("mesage not sent");
//   }
//   else{
//     console.log("mesage sent");
//     setUserData
//     ({
//   ...userData,
//   msg:""
//     });
//   }
// }



//  const callAboutPage=async()=>{
//   try{
//     const res= await axios('/contact',{
//     method:"GET",
//     headers:{
//       Accept:"application/json",
//       "Content-Type":"application/json"
//     },
//     credentials:"include"
//     });
//     const temp=JSON.stringify(res.data);
//   console.log(`its from temp ${temp}`);
//     //console.log(`its from responce ${await res.json()}`);
//     console.log(res.status);

//     if(res.status===200){
//       const error=new Error(res.error);
//       throw error;
//     }
//     else{
//       //use usehistory hook
//       // alert(`log in krle bhaiiiiii `);
//       console.log("log kar ke aao");
//     }
//      }catch(e){
//     console.log(e);
//      }




  // const [data,setData]=useState({
  //   fName: "",
  //   lName: "",
  //   phone: "",
  //   email: "",
  //   msg: "",
  // });
  // const fire = (event) =>{
  //     const {name, value}= event.target;        //I have destructered the object wrong
  //     setData((preVal)=>{
  //       return(
  //         {
  //           ...preVal,
  //           [name]: value,
  //         }
  //       )
  //     })
  // }
  // const SubmitEve = (eve) =>{
  //   eve.preventDefault()
  //   alert(`Welcome ${data.fName} ${data.lName} you have email address ${data.email} phone number ${data.phone} and you typed the following message ${data.msg}`)
  // }
