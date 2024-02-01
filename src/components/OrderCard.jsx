import React from 'react'
import "../style/ProductListed.css"
const OrderCard = ({SellerName,Sellerphone,productN,productP,ProductImg}) => {
  return (
    <div className='ProductCardDiv'>
        <img src={ProductImg} alt="ProductImg" />
        <div className="ProductSellerDetail">
            <h3>Product Name:-{productN}</h3>
            <h3>Product Price:-₹{productP}</h3>
            <h3>Seller Name:-{SellerName}</h3>
            <h3>Seller Phone no:-{Sellerphone}</h3>
        </div>
    </div>
  )
}

export default OrderCard
