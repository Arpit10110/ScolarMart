import { createAction,createReducer } from "@reduxjs/toolkit";
const Local=createAction('Local')
const LogOut=createAction('LogOut')
export const LocalData=createReducer({ 
    MartUserName :localStorage.getItem("MartUserName")? localStorage.getItem("MartUserName") : "",
    MartUserPhone :localStorage.getItem("MartUserPhone")? localStorage.getItem("MartUserPhone") : "",
    MartUserAddres :localStorage.getItem("MartUserAddres")? localStorage.getItem("MartUserAddres") : "",
    MartUserEmail :localStorage.getItem("MartUserEmail")? localStorage.getItem("MartUserEmail") : "",
    MartLogin :localStorage.getItem("MartLogin")? localStorage.getItem("MartLogin") : 0,
},
(builder)=>{
    builder.addCase(Local,(state,action)=>{
      state.MartUserName=action.payload.UserName;
      state.MartUserPhone=action.payload.UserPhone;
      state.MartUserAddres=action.payload.UserAddres;
      state.MartUserEmail=action.payload.UserEmail;
      state.MartLogin=1;
      localStorage.setItem("MartUserName",state.MartUserName);
      localStorage.setItem("MartUserPhone",state.MartUserPhone);
      localStorage.setItem("MartUserAddres",state.MartUserAddres);
      localStorage.setItem("MartUserEmail",state.MartUserEmail);
      localStorage.setItem("MartLogin",state.MartLogin);
    })
    builder.addCase(LogOut,(state,action)=>{
      state.MartUserName="";
      state.MartUserPhone="";
      state.MartUserAddres="";
      state.MartUserEmail="";
      state.MartLogin=0;
      localStorage.setItem("MartUserName",state.MartUserName);
      localStorage.setItem("MartUserPhone",state.MartUserPhone);
      localStorage.setItem("MartUserAddres",state.MartUserAddres);
      localStorage.setItem("MartUserEmail",state.MartUserEmail);
      localStorage.setItem("MartLogin",state.MartLogin);
    })
}) 