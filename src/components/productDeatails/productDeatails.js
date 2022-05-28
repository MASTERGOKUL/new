import React from "react";
import Header from "../header,footer/header";
import '../../assets/css/style.css';
import "../../vendor/aos/aos.css" ;
import "../../vendor/bootstrap/css/bootstrap.min.css" ;
import "../../vendor/bootstrap-icons/bootstrap-icons.css" ;
import "../../vendor/boxicons/css/boxicons.min.css" ;
import "../../vendor/glightbox/css/glightbox.min.css" ;
import "../../vendor/remixicon/remixicon.css" ;
import "../../vendor/swiper/swiper-bundle.min.css" ; 


import Footer from "../header,footer/footer";
import ProductMain from "./productDeatailsMain";
const Product = ()=>{
 
    return(
        <div >
    <Header/>
   <ProductMain/>
   <Footer/>
 

    </div>
    );
};
export default Product;