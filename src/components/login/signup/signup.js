import React from "react";
import Header from "../../header,footer/header";
import '../../../assets/css/style.css';
import "../../../vendor/aos/aos.css" ;
import "../../../vendor/bootstrap/css/bootstrap.min.css" ;
import "../../../vendor/bootstrap-icons/bootstrap-icons.css" ;
import "../../../vendor/boxicons/css/boxicons.min.css" ;
import "../../../vendor/glightbox/css/glightbox.min.css" ;
import "../../../vendor/remixicon/remixicon.css" ;
import "../../../vendor/swiper/swiper-bundle.min.css" ; 


import Footer from "../../header,footer/footer";
import SignupMain from "./SignupMain";
const Signup = ()=>{
 
    return(
        <div >
    <Header/>
   <SignupMain/>
   <Footer/>
   
  <span id="preloader"></span>
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>


    </div>
    );
};
export default Signup;