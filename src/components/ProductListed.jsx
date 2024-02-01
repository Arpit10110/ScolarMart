import React from 'react'
import ProductListedimg from "../assets/ProductListed.gif"
import "../style/ProductListed.css"
import { useNavigate } from 'react-router-dom'
const ProductListed = () => {
  const Navigate=useNavigate()
  return (
    <>
    <div className="ProductSuccesContainer">
    <img src={ProductListedimg} alt="ProductListedimg" />
    <div>
        <button onClick={()=>{  Navigate("/")}}  className="GoTohomePage">Go to Home Page</button>
    </div>
    </div>
    </>
  )
}

export default ProductListed
