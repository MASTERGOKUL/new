import React from "react";
import '../../../assets/css/style.css';

import "../../../vendor/aos/aos.css" ;
import "../../../vendor/bootstrap/css/bootstrap.min.css" ;
import "../../../vendor/bootstrap-icons/bootstrap-icons.css" ;
import "../../../vendor/boxicons/css/boxicons.min.css" ;
import "../../../vendor/glightbox/css/glightbox.min.css" ;
import "../../../vendor/remixicon/remixicon.css" ;
import "../../../vendor/swiper/swiper-bundle.min.css" ; 
export default function LoginMain(){
    return(
        <main id="main">

        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
    
           
            <h1 className="text-center">Login</h1>
          </div>
        </section>
    
        <section id="portfolio-details" className="portfolio-details" style="padding-top:0px">
          <div className="container">
           
           <div className="col-lg-8 mt-5 mt-lg-0 mx-auto">
            <form className="mx-auto">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required placeholder="Enter your email address"/>
    
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" required placeholder="Enter your password"/>
              </div>
    
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>       
          </div>
        </section>
    
      </main>
    );
}