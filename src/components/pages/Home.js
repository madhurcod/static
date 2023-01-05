import React from "react";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import Vmc from "../inc/Vmc";
import Ec from "../images/bolt.jpg";
import { Footer } from "../inc/Footer";

const Home = () => {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Company</h3>
              <div className="underline mx-auto"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                magnam veritatis beatae repudiandae, velit nisi error blanditiis
                nemo vel, asperiores at deleniti similique itaque placeat
                recusandae iusto doloribus, quia est.
              </p>
              <Link to="/about" className="btn btn-warning shadow">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Our Version Mission and  */}
      <Vmc />
      {/* Our Services */}
      <section className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4 ">
              <div className="card shadow">
                <div className="card-body">
                  <img src={Ec} className="w-100 border-botton" alt="service" />
                  <h6>Service 1</h6>
                  <div className="underline"> </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                  <Link to="/services" className="btn btn-link">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card shadow">
                <div className="card-body">
                  <img src={Ec} className="w-100 border-botton" alt="service" />
                  <h6>Service 1</h6>
                  <div className="underline"> </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                  <Link to="/services" className="btn btn-link">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card shadow">
                <div className="card-body">
                  <img src={Ec} className="w-100 border-botton" alt="service" />
                  <h6>Service 1</h6>
                  <div className="underline"> </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                  <Link to="/services" className="btn btn-link">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
