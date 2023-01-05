import React from "react";
import Vmc from "../inc/Vmc";
const About = () => {
  return (
    <div>
      {/* <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>About us</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h4>Home / about</h4>
            </div>
          </div>
        </div>
      </section> */}
      <section className="section footer bg-dark text-white">
        <div className="container">
          <h5>Our Company</h5>
          <div className="underline"></div>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            voluptate aperiam temporibus laboriosam harum consectetur
            consequuntur voluptatibus mollitia quasi odio eaque modi ipsam,
            alias aliquid natus, officia minima reiciendis labore.
          </p>
        </div>
      </section>

      <Vmc />
    </div>
  );
};

export default About;
