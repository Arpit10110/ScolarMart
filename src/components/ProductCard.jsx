import React from 'react'
import "../style/ProductCard.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
const ProductCard = ({name,phone,addres,productN,productP,productD,ProductImg,handler}) => {
  return (
    <>
    <div className='ProductCardDiv'>
        <img src={ProductImg} alt="ProductImg" />
        <div className="ProductSellerDetail">
            <h3>Product Name:-{productN}</h3>
            <h3>Product Price:-{productP}</h3>
            <h3>Product Desc:-{productD}</h3>
            <h3>Seller Name:-{name}</h3>
            <h3>Seller Phone no:-{phone}</h3>
            <h3>Seller Addres:-{addres}</h3>
            <button className='Addtocart' onClick={()=>{handler({productImg:ProductImg,productName:productN,productPrice:productP,productDesc:productD,sellerName:name,sellerPhone:phone,sellerAddres:addres})}}>Buy Now</button>
        </div>
    </div>

    </>
  )
}

export default ProductCard