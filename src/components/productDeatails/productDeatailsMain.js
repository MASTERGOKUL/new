import React from "react";
import '../../assets/css/style.css';

import "../../vendor/aos/aos.css" ;
import "../../vendor/bootstrap/css/bootstrap.min.css" ;
import "../../vendor/bootstrap-icons/bootstrap-icons.css" ;
import "../../vendor/boxicons/css/boxicons.min.css" ;
import "../../vendor/glightbox/css/glightbox.min.css" ;
import "../../vendor/remixicon/remixicon.css" ;
import "../../vendor/swiper/swiper-bundle.min.css" ; 
export default function ProductMain(){
    return(
        <main id="main">

        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
    
            <div className="d-flex justify-content-between align-items-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Library</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
              </nav>
            </div>
            <h1>2D wind speed and direction</h1>
          </div>
        </section>
    
        <section id="portfolio-details" className="portfolio-details" style="padding-top:0px">
          <div className="container">
           <h2>About</h2>
    
            <div className="row">
              <div className="col-lg-4">
                <h6>Product id</h6>
                <button className="btn btn-primary">DP1.00001.001</button>
                <h6>Scientific Keywords</h6>
                <span className="badge bg-secondary rounded-pill">New</span>
                <span className="badge bg-secondary rounded-pill">New</span>
                <span className="badge bg-secondary rounded-pill">New</span>
                <span className="badge bg-secondary rounded-pill">New</span>
                <br/>
                <span className="badge bg-secondary rounded-pill">New</span>
                <span className="badge bg-secondary rounded-pill">New</span>
                <span className="badge bg-secondary rounded-pill">New</span>
                <span className="badge bg-secondary rounded-pill">New</span>
               
              </div>
              <div className="col-lg-8">
                <h6>Description</h6>
                <p>Two-dimensional wind speed and direction, available as two- and thirty-minute aggregations of 1 Hz observations. Observations are made by 2-D sonic anemometer sensors located at multiple heights on the tower infrastructure and by 2-D sonic anemometer sensors located on the aquatic meteorological station.
    
                </p>
    
                <h6>Abstract</h6>
                <p>Wind plays an important role in atmospheric and environmental sciences. A function of differential heating of Earths surface and subsequent pressure gradients, horizontal and vertical winds are responsible for advection of atmospheric pollutants, moisture, heat and momentum (Stull 1988). As such, horizontal and vertical winds will be measured throughout the Observatory.</p>
    
                <h6>Additional Information</h6>
                <p>Note that the final quality flag for wind direction (windDirFinalQF) in the basic download package includes a test for calm winds, under which the computed wind direction is unreliable (due to light wind speed) though the data quality may still be adequate for scientific purposes. To distinguish between data flagged for calm winds and other quality tests, please download the expanded package.
                  
                </p>
    
                <div className="card">
                  
                  <div className="card-body">
                    <h5 className="card-title">If Provisional data are used, include:</h5>
                    <p className="card-text">
                      NEON (National Ecological Observatory Network). 2D wind speed and direction (DP1.00001.001). https://data.neonscience.org (accessed April 17, 2022)</p>
    
                      <a href="#" className="btn btn-outline-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="for copy">Copy</a>
                      <a href="#" className="btn btn-outline-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="for download something">Download</a>
                      
                  </div>
                </div>
    
                <div className="card mt-4">
                  
                  <div className="card-body">
                    <h5 className="card-title">If Provisional data are used, include:</h5>
                    <p className="card-text">
                      NEON (National Ecological Observatory Network). 2D wind speed and direction (DP1.00001.001). https://data.neonscience.org (accessed April 17, 2022)</p>
    
                      <a href="#" className="btn btn-outline-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="for copy">Copy</a>
                      <a href="#" className="btn btn-outline-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="for download something">Download</a>
                  </div>
                </div>
    
    
              </div>       
    
            </div>
    
    
            <div className="row">
              <div className="col">
                <h2>Collection and Processing</h2>
                <h4>Study Description</h4>
                <p>2D wind speed is measured at all NEON terrestrial and aquatic sites except for BLWA and TOMB.</p>
    
                <h4>Design Description</h4>
                <p>Multiple 2D anemometers are deployed at tower sites. They are located on each boom arm below the tower-top level at terrestrial sites. A single 2D anemometer is located at the top of the aquatic met station at a standard height of 3m above ground level. Two- and thirty-minute averages of horizontal wind speed and direction are calculated. Each 2D anemometer represents the point at which it is placed on the tower infrastructure.</p>
              </div>
            </div>
          </div>
        </section>
    
      </main>
    );
}