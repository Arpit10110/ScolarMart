import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import "../style/Login.css"
import {useNavigate} from "react-router-dom"
const Login = () => {
  const Navigate = useNavigate();
    const dispatch=useDispatch();
    const [UserName,SetUserName]=useState("");
    const [UserPhone,SetUserPhone]=useState("");
    const [UserAddres,SetUserAddres]=useState("");
    const [UserEmail,SetUserEmail]=useState("");
    const LoginUser=()=>{
        const UserDetail ={
            UserName:UserName,
            UserPhone:UserPhone,
            UserAddres:UserAddres,
            UserEmail:UserEmail,
        };
        dispatch({
            type:"Local",
            payload:UserDetail
        })
        Navigate("/");
    }
  return (
    <div className='LoginMain'>
      <div className="contLogin">
        <input type="text" placeholder='Enter Your Name' onChange={(e)=>{
            SetUserName(e.target.value)
        }} required/>
        <input type="text" placeholder='Enter Your Phone Number' onChange={(e)=>{
            SetUserPhone(e.target.value)
        }} required/>
        <input type="text" placeholder='Enter Your Addres' onChange={(e)=>{
            SetUserAddres(e.target.value)
        }} required/>
        <input type="text" placeholder='Enter Your Email' onChange={(e)=>{
            SetUserEmail(e.target.value)
        }} required/>
        <button onClick={LoginUser} >Login</button>
      </div>
    </div>
  )
}

export default Login
