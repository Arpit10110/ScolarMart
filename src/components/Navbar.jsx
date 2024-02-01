import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import "../style/Nav.css"
import menu from "../assets/menu.png"
import {AiOutlineUser} from "react-icons/ai"
import close from "../assets/close.png"
import { useSelector } from 'react-redux'
const Navbar = () => {
  const {MartLogin} = useSelector(state=>state.Local);
  function menuFun(){
    let menuBtn=document.querySelector(".menu");
    let main=document.querySelector(".main");
    menuBtn.style="display:none;"
    main.style="display:flex;"
  }
  function closefun(){

    if (window.innerWidth <= 600) {
      let menuBtn=document.querySelector(".menu");
      let main=document.querySelector(".main");
      menuBtn.style="display:block;"
      main.style="display:none;"
    }
  }
  return (
    <nav className='navbar'>
        <Link to="/"><h4 className='logoName'>ScholarMart</h4></Link>
        <main className='main'>
        <img className='close'  onClick={closefun} src={close} alt="" />
            <Link onClick={closefun} className='nava'  to="/">Home</Link>
            <Link onClick={closefun} className='nava'  to="/products/AllProduct">Products</Link>
            {
              MartLogin==0? <Link></Link>:
              <Link onClick={closefun} className='nava'  to="/MyOrders">MyOrders</Link>
            }
            <Link onClick={closefun} className='nava'  to="/SellProduct">SellProduct</Link>
            <Link onClick={closefun} className='nava'  to="/Contact">Contact</Link>
            {
              MartLogin==0? <Link onClick={closefun} className='nava'  to="/Login">Login</Link>:
              <Link onClick={closefun} className='nava' to='/profile'><AiOutlineUser  className='Profile'/></Link>
            }
           
        </main>
        <img onClick={menuFun}  className="menu" src={menu} alt="" />
    </nav>
  )
}

export default Navbar