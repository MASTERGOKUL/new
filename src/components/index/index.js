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
import IndexMain from "./indexMain";
const Index = ()=>{
 
    return(
        <div >

    <Header/>


    <div style="margin-top:15vh;">

    <section id="hero" className="d-flex align-items-center">
      <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 text-center">
            <h1>Limulator</h1>
            <h2>We are team of talented designers</h2>
          </div>
        </div>
        <div className="text-center">
          <a href="#about" className="btn-get-started scrollto">Try our Limulator</a>
          <a href="#contact" className="btn-get-started scrollto">Request Demo</a>
          <a href="#about" className="btn-get-started scrollto">Upload 3D model/ Lidar data</a>
        </div>

        <div className="row icon-boxes">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in"
            data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="ri-stack-line"></i></div>
              <h4 className="title"><a href="">Lorem Ipsum</a></h4>
              <p className="description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in"
            data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="ri-palette-line"></i></div>
              <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
              <p className="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in"
            data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><i className="ri-command-line"></i></div>
              <h4 className="title"><a href="">Magni Dolores</a></h4>
              <p className="description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in"
            data-aos-delay="500">
            <div className="icon-box">
              <div className="icon"><i className="ri-fingerprint-line"></i></div>
              <h4 className="title"><a href="">Nemo Enim</a></h4>
              <p className="description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    
  
</div>


   <IndexMain/>

   
   <Footer/>
 

    </div>
    );
};
export default Index;