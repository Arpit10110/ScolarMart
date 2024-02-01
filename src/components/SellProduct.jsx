import React,{useEffect} from 'react'
import { useState } from 'react'
import "../style/SellerProduct.css"
import {v4} from "uuid"
import {imgdb} from "../Firebase"
import {db} from "../Firebase"
import {addDoc,collection} from "firebase/firestore"
import { uploadBytes,ref, getDownloadURL } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import {useNavigate} from "react-router-dom"
const SellProduct = () => {
  const Navigate=useNavigate()
  const [imageU,setimageU]=useState(false);
  const[Name,setName]=useState("");
  const[Phone,setPhone]=useState("");
  const[Addres,setAddres]=useState("");
  const[ProductN,setProductN]=useState("");
  const[ProductP,setProductP]=useState("");
  const[PinCode,setPinCode]=useState("");
  const[Stream,setStream]=useState("Engineering");
  const[ProductD,setProductD]=useState("");
  const[ProductImg,setProductImg]=useState("");
  const CreateCollection=collection(db,"Productdetail");
  const Submit=()=>{
    if(imageU===true)
    {
      const SellerDetail={
        name:Name,
        phone:Phone,
        addres:Addres,
        pinCode:PinCode,
        productN:ProductN,
        productP:ProductP,
        stream:Stream,
        productD:ProductD,
        ProductImg:ProductImg,
      };
      addDoc(CreateCollection,SellerDetail)
      Navigate("/ProductListed")
    }
    else{
      toast.warn('Please wait image is still uploading', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  }
  const uploadImg =(e)=>{
    console.log(e.target.files[0]);
    const img=ref(imgdb,`images/${v4()}`)
    uploadBytes(img,e.target.files[0]).then(data=>{
      console.log(data)
      getDownloadURL(data.ref).then(val=>{
        setProductImg(val)
        setimageU(true);
        toast.success('Image uploaded Successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      })
    })
  }
  useEffect(() => {
    document.title="ScolarMart | SellProduct"
   },[])
  return (
   <>
   <div className="SellerWrapDiv">

   <div className="SellerHead">
    <h4>Sell Your Products</h4>
   </div>
   <div className="conatiner">
    <h4>Fill the Deatils</h4>
    <div className="BoxDetail">
      <span>Name:<input type="text" className='Detailinput' placeholder='Enter Seller Name' onChange={(e)=>{
        setName(e.target.value);
      }} /></span>
      <span>Phone No:<input type="text" className='Detailinput' placeholder='Enter Seller Phone no.' onChange={(e)=>{
        setPhone(e.target.value);
      }}/></span>
      <span>Adders:<input type="text" className='Detailinput' placeholder='Enter Seller Addres' onChange={(e)=>{
        setAddres(e.target.value);
      }}/></span>
      <span>PinCode:<input type="text" className='Detailinput' placeholder='Enter the PinCode' onChange={(e)=>{
        setPinCode(e.target.value);
      }}/></span>
      <span>ProductName:<input type="text" className='Detailinput' placeholder='Enter Product Name' onChange={(e)=>{
        setProductN(e.target.value);
      }}/></span>
      <span>Product Price:<input type="text" className='Detailinput' placeholder='Enter Product Price' onChange={(e)=>{
        setProductP(e.target.value);
      }}/></span>
      <span>Stream:  <select id="Status"onChange={(e) => {return setStream(e.target.value);}}>
                      <option value="Engineering" selected>Engineering</option>
                      <option value="Pharmacy">Pharmacy</option>
                      <option value="Architecture">Architecture</option>
                    </select></span>
      <span>Product Discription:<input className='ProductDis' type="text" placeholder='Product Discription' onChange={(e)=>{
        setProductD(e.target.value);
      }}/></span>
      <span>Product Img:<input type="File" onChange={(e)=>{uploadImg(e)}} /></span>
    </div>
    <button className='PlaceProduct' onClick={Submit} >List Your Product</button>
   </div>
   <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
   </div>
   </>
  )
}

export default SellProduct
 