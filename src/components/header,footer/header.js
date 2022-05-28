import React from "react";
import '../../assets/css/style.css';

import "../../vendor/aos/aos.css" ;
import "../../vendor/bootstrap/css/bootstrap.min.css" ;
import "../../vendor/bootstrap-icons/bootstrap-icons.css" ;
import "../../vendor/boxicons/css/boxicons.min.css" ;
import "../../vendor/glightbox/css/glightbox.min.css" ;
import "../../vendor/remixicon/remixicon.css" ;
import "../../vendor/swiper/swiper-bundle.min.css" ;
import '../../assets/js/main.js'
export default function Header(){
    return(    
      <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
  
        <h1 className="logo"><a href="index.html" >Limulator</a></h1>

  
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>
            <li>
              <a className="nav-link scrollto o" href="#portfolio">Portfolio</a>
            </li>
            <li><a className="nav-link scrollto" href="#team">Team</a></li>
            <li><a className="nav-link scrollto" href="filter.html">Filter</a></li>
            <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
            <li className="dropdown">
              <a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
              <ul>
            
                <li><a href="#">Drop Down 1</a></li>
                <li className="dropdown">
                  <a href="#"><span>Deep Drop Down</span>
                    <i className="bi bi-chevron-right"></i></a>
                  <ul>
                    
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>
  
            <li><a className="getstarted scrollto" href="login.html">Login</a></li>
            <li><a className="getstarted scrollto" href="signup.html">Sign up</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
    
    
  );
}