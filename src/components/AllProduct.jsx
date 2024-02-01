import React, { useEffect } from 'react'
import {getDocs,collection,doc} from "firebase/firestore";
import {addDoc} from "firebase/firestore"
import {db} from "../Firebase"
import { useState } from 'react';
import loading from "../assets/loading.gif"
import {useSelector} from "react-redux"
import 'react-toastify/dist/ReactToastify.css'; 
import ProductCard from "./ProductCard.jsx"
import { useNavigate } from 'react-router-dom';
 const AllProduct = () => { 
  const Navigate =useNavigate(); 
  const {MartUserName} = useSelector(state=>state.Local);
  const {MartUserPhone} = useSelector(state=>state.Local);
  const {MartLogin} = useSelector(state=>state.Local);
  const GetCollection = collection(db, "Productdetail");
  const [Products,setProducts]=useState([]); 
  const CreateCollection=collection(db,"Orders");
  const [Buffer,setBuffer]=useState(true);
  const BuyNow =(option)=>{
      if(MartLogin==0){
        Navigate("/Login");
      }
      else{
        const MyOrder={
          ProductImg:option.productImg,
          ProductName:option.productName,
          ProductPrice:option.productPrice,
          SellerName:option.sellerName,
          SellerPhone:option.sellerPhone,
          BuyerName:MartUserName,
          BuyerPhone:MartUserPhone,
        }
        addDoc(CreateCollection,MyOrder);
        Navigate("/OrderSucceed");
        console.log(MyOrder);
      }
  }
  const getdata = async () => {
    const data = await getDocs(GetCollection);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setBuffer(false);
  };
  useEffect(() => {
    getdata();
    document.title="ScolarMart | Product"
   },[])
  return (
   <>
   {
    Buffer==true?<div className='LoadingDiv'><img src={loading} alt="Loading Please wait..."/></div>:
   <div className="AllProductMainDiv">
   {
    Products.map((i,index)=>{
      return(
       <ProductCard key={index} name={i.name} phone={i.phone} addres={i.addres} productN={i.productN} productP={i.productP} productD={i.productD} ProductImg={i.ProductImg}  handler={BuyNow}/>
      )
    })
   }
   </div>
}
   </>
  )
}

export default AllProduct