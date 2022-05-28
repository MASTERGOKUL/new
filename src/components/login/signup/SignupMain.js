import React from "react";
import '../../../assets/css/style.css';

import "../../../vendor/aos/aos.css" ;
import "../../../vendor/bootstrap/css/bootstrap.min.css" ;
import "../../../vendor/bootstrap-icons/bootstrap-icons.css" ;
import "../../../vendor/boxicons/css/boxicons.min.css" ;
import "../../../vendor/glightbox/css/glightbox.min.css" ;
import "../../../vendor/remixicon/remixicon.css" ;
import "../../../vendor/swiper/swiper-bundle.min.css" ; 
export default function SignupMain(){
    return(
        <main id="main">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
        
           
            <h1 className="text-center">Sign Up</h1>
          </div>
        </section>
        <section id="portfolio-details" className="portfolio-details" style={{paddingTop:'0px'}}>
          <div className="container">
           
           <div className="col-lg-8 mt-5 mt-lg-0 mx-auto">
            <form className="mx-auto">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" required placeholder="Enter your Full name"/>
        
                  </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required placeholder="Enter your email address"/>
        
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Number</label>
                    <input type="number" className="form-control" id="name" aria-describedby="emailHelp" required placeholder="Enter your Number"/>
        
                  </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Date Of Birth</label>
                    <input type="date" className="form-control" id="dob" aria-describedby="emailHelp" required />
        
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Occupation</label>
                    <input type="text" className="form-control" id="Occupation" aria-describedby="emailHelp" required placeholder="Enter your Occupation"/>
        
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Nationality</label>
                    <input type="text" className="form-control" id="Nationality" aria-describedby="emailHelp" required placeholder="Enter your Nationality"/>
        
                  </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" required placeholder="Enter your password"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" required placeholder="Enter your password again"/>
                  </div>
        
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </form>
          </div>       
          </div>
        </section>

        </main>
    );
}