import React from "react";
import '../../assets/css/style.css';

import "../../vendor/aos/aos.css" ;
import "../../vendor/bootstrap/css/bootstrap.min.css" ;
import "../../vendor/bootstrap-icons/bootstrap-icons.css" ;
import "../../vendor/boxicons/css/boxicons.min.css" ;
import "../../vendor/glightbox/css/glightbox.min.css" ;
import "../../vendor/remixicon/remixicon.css" ;
import "../../vendor/swiper/swiper-bundle.min.css" ; 
export default function FilterMain(){
  return(
    <main id="main" style="margin-top: 10vh">
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-lg-3">
          <h3>Filter</h3>
          <aside className="col-sm-4 col-lg-12">
            <div className="card">
              <article className="card-group-item">
                <header className="card-header">
                  <h6 className="title">Data type</h6>
                </header>
                <div className="filter-content">
                  <div className="card-body">
                    <form>
                      <label className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label">
                          Simulated Lidar data
                        </span>
                      </label>
           
                      <label className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label">
                          Field Lidar data,
                        </span>
                      </label>
                      <label className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label"> 3D model </span>
                      </label>
  
                    </form>
                  </div>

                </div>
              </article>

            </div>

            <div className="card">
              <article className="card-group-item">
                <header className="card-header">
                  <h6 className="title">Sensor types</h6>
                </header>
                <div className="filter-content">
                  <div className="card-body">
                    <form>
                      <label className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label"> ALS </span>
                      </label>
                     
                      <label className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label"> MLS </span>
                      </label>
                      <label className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label"> TLS </span>
                      </label>
                    </form>
                  </div>
                </div>
              </article>
            </div>

            <div className="card">
              <article className="card-group-item">
                <header className="card-header">
                  <h6 className="title">Attribute</h6>
                </header>
                <div className="filter-content">
                  <div className="card-body">
                    <form>
                      <label className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label"> Intensity </span>
                      </label>
                      <label className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label"> RGB </span>
                      </label>
                      <label className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label"> etc </span>
                      </label>
                    </form>
                  </div>
                </div>
              </article>
            </div>

            <div className="card">
              <article className="card-group-item">
                <header className="card-header">
                  <h6 className="title">No of Samples</h6>
                </header>
                <div className="filter-content">
                  <div className="card-body">
                    <form>
                      <label className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label"> 4000 buildings </span>
                      </label>
                      <label className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label"> 5000 buildings </span>
                      </label>
                      <label className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label"> 6000 buildings </span>
                      </label>
                    </form>
                  </div>
                </div>
              </article>
            </div>

            <div className="card">
              <article className="card-group-item">
                <header className="card-header">
                  <h6 className="title">Sensor parameters</h6>
                </header>
                <div className="filter-content">
                  <div className="card-body">
                    <form>
                      <label className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label"> PFR </span>
                      </label>
                      <label className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <span className="form-check-label"> scan line </span>
                      </label>
                    </form>
                  </div>
                </div>
              </article>
              
            </div>
          </aside>
          
        </div>
        <div className="col-lg-8">
          <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Library</a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  Data
                </li>
              </ol>
            </nav>
            <h2>Explore Data Products</h2>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <a href="">2D wind speed and direction</a>
                </h5>
                <button className="btn btn-primary">DP1.00001.001</button>
                <p className="card-text">
                  Two-dimensional wind speed and direction, available as two-
                  and thirty-minute aggregations of 1 Hz observations.
                  Observations are made by 2-D sonic anemometer sensors
                  located at multiple heights on the tower infrastructure and
                  by 2-D sonic anemometer sensors located on the aquatic
                  meteorological station.
                </p>

                <a
                  href="#"
                  className="btn btn-outline-primary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="for download something"
                  >Download Data</a
                >
                <a
                  href="product-details.html"
                  className="btn btn-outline-primary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="for download something"
                  >Product Details</a
                >
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <a href="">2D wind speed and direction</a>
                </h5>
                <button className="btn btn-primary">DP1.00001.001</button>
                <p className="card-text">
                  Two-dimensional wind speed and direction, available as two-
                  and thirty-minute aggregations of 1 Hz observations.
                  Observations are made by 2-D sonic anemometer sensors
                  located at multiple heights on the tower infrastructure and
                  by 2-D sonic anemometer sensors located on the aquatic
                  meteorological station.
                </p>

                <a
                  href="#"
                  className="btn btn-outline-primary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="for download something"
                  >Download Data</a
                >
                <a
                  href="product-details.html"
                  className="btn btn-outline-primary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="for download something"
                  >Product Details</a
                >
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <a href="">2D wind speed and direction</a>
                </h5>
                <button className="btn btn-primary">DP1.00001.001</button>
                <p className="card-text">
                  Two-dimensional wind speed and direction, available as two-
                  and thirty-minute aggregations of 1 Hz observations.
                  Observations are made by 2-D sonic anemometer sensors
                  located at multiple heights on the tower infrastructure and
                  by 2-D sonic anemometer sensors located on the aquatic
                  meteorological station.
                </p>

                <a
                  href="#"
                  className="btn btn-outline-primary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="for download something"
                  >Download Data</a
                >
                <a
                  href="product-details.html"
                  className="btn btn-outline-primary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="for download something"
                  >Product Details</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);
}
    
