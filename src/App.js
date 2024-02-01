import React from 'react'
import {HashRouter as Router, Routes,Route} from "react-router-dom"
//importing Components
import Home from "./components/Home.jsx"
import Navbar from "./components/Navbar.jsx"
import SellProduct from "./components/SellProduct.jsx"
import ProductListed from "./components/ProductListed.jsx"
import ProductNav from "./components/ProductNav.jsx"
import AllProduct from "./components/AllProduct.jsx"
import EngProduct from "./components/EngProduct.jsx"
import PharProduct from "./components/PharProduct.jsx"
import ArchProduct from "./components/ArchProduct.jsx"
import Contact from './components/Contact.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import OrderedS from './components/OrderedS'
import MyOrder from './components/MyOrder.jsx'
// import Footer from "./components/Footer"
//importing Style
import"./style/Style.css"
const App = () => {
  return  ( 
 <Router>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/SellProduct' element={<SellProduct/>} />
    <Route path='/ProductListed' element={<ProductListed/>} />
    <Route path='/products' element={<ProductNav/>}>
      <Route path='AllProduct' element={<AllProduct/>} />
      <Route path='EngineeringProduct' element={<EngProduct/>} />
      <Route path='PharmacyProduct' element={<PharProduct/>} />
      <Route path='ArchitectureProduct' element={<ArchProduct/>} />
    </Route>
    <Route path='/MyOrders' element={<MyOrder/>} />
    <Route path='/OrderSucceed' element={<OrderedS/>} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/Login' element={<Login/>} />
  </Routes>
  {/* <Footer/> */}
 </Router>
    )
}

export default App
