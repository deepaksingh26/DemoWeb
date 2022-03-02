import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from './App';
import { useContext } from 'react';
export default function Logout() {
    const {state,dispatch}=useContext(UserContext);

    let navigate = useNavigate();
    //promices
    useEffect(()=>{
        fetch('/logout',{
            method:'GET',
            headers:{
                Accept:'application/json',
                "Content-Type":"application/json"
            },
            credentials:'include'
        })
        .then((res)=>{
             //usehistory hook
             dispatch ({type:"USER",payload:false})
             navigate('/');
             if(res.status!==200)
             {
                 const error=new Error (res.error);
                 throw error;
             }
        }).catch((e)=>{
            console.log(e);
        });
    })
  return (
    <div>
        <h1>Logout ka page</h1>
    </div>
  )
}
