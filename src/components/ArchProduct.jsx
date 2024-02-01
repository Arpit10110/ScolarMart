import React,{useEffect} from 'react'
import {getDocs,collection,doc} from "firebase/firestore";
import {db} from "../Firebase"
import loading from "../assets/loading.gif"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { useState } from 'react';
import {useSelector} from "react-redux"
import {addDoc} from "firebase/firestore"
import ProductCard from "./ProductCard.jsx"
const ArchProduct = () => {
  const {MartUserName} = useSelector(state=>state.Local);
  const {MartUserPhone} = useSelector(state=>state.Local);
  const CreateCollection=collection(db,"Orders");
  const GetCollection = collection(db, "Productdetail");
  const [Buffer,setBuffer]=useState(true);
  const [Products,setProducts]=useState([])
  const BuyNow=(option)=>{
    const MyOrder={
      ProductImg:option.productImg,
      ProductName:option.productName,
      ProductPrice:option.productPrice,
      SellerName:option.sellerName,
      SellerPhone:option.sellerPhone,
      BuyerName:MartUserName,
      BuyerPhone:MartUserPhone,
    }
    console.log(MyOrder)
    addDoc(CreateCollection,MyOrder);
  }
  const getdata = async () => {
    const data = await getDocs(GetCollection);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setBuffer(false)
  };
  useEffect(() => {
    getdata();
  }, [])
  return ( 
   <>
   {
    Buffer==true?<div className='LoadingDiv'><img src={loading} alt="Loading Please wait..."/></div>:
   <div className="ArchitectureProductMainDiv">
   {
    Products.map((i,index)=>{
     if(i.stream=="Architecture")
     {
      return(
        <ProductCard key={index} name={i.name} phone={i.phone} addres={i.addres} productP={i.productP} productN={i.productN} productD={i.productD} ProductImg={i.ProductImg}  handler={BuyNow}/>
      )
     }
    })
   }
   </div>
}
<ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
   </>
  )
}

export default ArchProduct