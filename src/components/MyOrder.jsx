import React,{useEffect} from 'react'
import "../style/myorder.css"
import OrderCard from "./OrderCard.jsx"
import loading from "../assets/loading.gif"
import {useSelector} from "react-redux"
import {db} from "../Firebase"
import {getDocs,collection,doc} from "firebase/firestore";
import { useState } from 'react';
const MyOrder = () => {
  const GetCollection = collection(db, "Orders");
  const [Orders,SetOrders]=useState([]);
  const {MartUserPhone} = useSelector(state=>state.Local);
  const [Buffer,setBuffer]=useState(true);
  const getdata = async () => {
    const data = await getDocs(GetCollection);
    SetOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setBuffer(false);
  };
  useEffect(() => {
    getdata();
  }, [])
  
  return (
   <>
    {
    Buffer==true?<div className='LoadingDiv'><img src={loading} alt="Loading Please wait..."/></div>:
   <div className="AllProductMainDiv">
   {
    Orders.map((i,index)=>{
      if(i.BuyerPhone=="MartUserPhone")
      {
        return(
         <OrderCard key={index} Buyername={i.BuyerName} SellerName={i.SellerName} Sellerphone={i.phone} productN={i.productN} productP={i.ProductPrice}  ProductImg={i.ProductImg} />
        )
      }
    })
   }
   </div>
}
   </>
  )
}

export default MyOrder
