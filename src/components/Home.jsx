import React,{useEffect} from 'react'
import "../style/Home.css"
import banner1 from "../assets/bg1.png"
import banner2 from "../assets/bg2.jpg"
import banner3 from "../assets/bg4.jpg"
import banner4 from "../assets/bg3.jpg"
import welcomeimg from "../assets/welcomeimg.png"
import satisfied from "../assets/satisfied.png"
import Engineer from "../assets/Engineer.png"
import Pharmacy from "../assets/Doctor.png"
import Common from "../assets/CommonSub.png"
import Architecture from "../assets/Architecture.png"
import ProductSectionImg from "../assets/ProductSectionImg.png"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Link } from 'react-router-dom'
const Home = () => {
  useEffect(() => {
    document.title="ScolarMart | Home"
   },[])
  return (
   <>
   <div className="main">
    <div className="sliderIntro">
    <Carousel className='caro' autoPlay={true} infiniteLoop={true} showStatus={false} showArrows={false} showIndicators={false} showThumbs={false} interval={2000}>
   <img src={banner1} className="bannerimg"  alt="banner1" />
   <img src={banner2} className="bannerimg"  alt="banner2" />
   <img src={banner3} className="bannerimg"  alt="banner3" />
   <img src={banner4} className="bannerimg"  alt="banner4" />
  </Carousel>
    </div>
    <div className="satifaction">
      <img src={satisfied} alt="satisfied" />
    </div>
    <div className="welcome">
      <img src={welcomeimg} alt="welcomeimg" />
      <div className="cont">
        <div className="head">
        <span>Welcome to Our </span><span>ScholarMart</span>
        </div>
        <div className="content">
          <h3>Where you can sell or purchase education/product <br /> A website on which you can directly connect with buyer or seller for buying on selling  used/new product.</h3>
          <button>Get Started with us...</button>
        </div>
      </div>
    </div>
    <div className="ProductSec">
      <div className="ImgProductSection">
        <img src={ProductSectionImg} alt="ProductSectionImg" />
      </div>
      <div className="ProductCati">
        <div className="Engineer">
          <div className="ProductCont">
            <h3>Engineering</h3>
            <h4>Buy or sell engineering related educational product whether it is new/used.</h4>
            <Link to="/products/AllProduct"><button> View Products </button></Link>
          </div>
          <img className='ProductCatImg' src={Engineer} alt="Engineer" />
        </div>
        <div className="Engineer">
          <div className="ProductCont">
            <h3>Pharmacy</h3>
            <h4>Buy or sell Pharmacy related educational product whether it is new/used.</h4>
            <Link to="/products/PharmacyProduct"><button>View Products </button></Link> 
          </div>
          <img className='ProductCatImg' src={Pharmacy} alt="Engineer" />
        </div>
        <div className="Engineer">
          <div className="ProductCont">
            <h3>Architecture</h3>
            <h4>Buy or sell Architecture related educational product whether it is new/used.</h4>
            <Link to="/products/ArchitectureProduct"><button>View Products </button></Link> 
          </div>
          <img className='ProductCatImg' src={Architecture} alt="Engineer" />
        </div>
        <div className="Engineer">
          <div className="ProductCont">
            <h3>Common Products</h3>
            <h4>Buy or sell all  stream related educational product whether it is new/used.</h4>
            <Link to="/products/AllProduct"><button>View Products </button></Link>
          </div>
          <img className='ProductCatImg' src={Common} alt="Common" />
        </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default Home
