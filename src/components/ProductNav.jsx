import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import "../style/ProductNav.css"
const ProductNav = () => {
  return (
    <>
    <div className="Productnav">
        <Link className='productnavBtn' to="/products/AllProduct">All Products</Link>
        <Link className='productnavBtn' to="/products/EngineeringProduct">Engineering Product</Link>
        <Link className='productnavBtn' to="/products/PharmacyProduct">Pharmacy Product</Link>
        <Link className='productnavBtn' to="/products/ArchitectureProduct">Architecture Product</Link>
    </div>
    <Outlet/>
    </>
  )
}

export default ProductNav
