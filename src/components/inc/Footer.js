import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Company Information</h6>
            <hr />
            <p className="fot">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              tenetur, consectetur aliquid atque magni quaerat odio autem nihil
              accusamus quidem. Architecto totam quia incidunt, exercitationem
              blanditiis iste consequuntur ducimus consectetur?
            </p>
          </div>
          <div className="col-md-4">
            <h6 className="text-center">Quick Links</h6>
            <hr />
            <div className="text-center">
              <Link to="/">Home</Link>
            </div>
            <div className="text-center">
              <Link to="/about">About</Link>
            </div>
            <div className="text-center">
              <Link to="/">Contact</Link>
            </div>
            <div className="text-center">
              <Link to="/">Blog</Link>
            </div>
          </div >
          <div className="col-md-4 text-center">
            <h6>Contact us</h6>
            <hr />
            <div>
              <p className="text-white mb-1">
                Indian Institute of Technology Roorkee, Roorkee, Uttarakhand
                247667
              </p>
            </div>
            <div>
              <p className="text-white mb-1">+91 xxxxxxx</p>
            </div>
            <div>
              <p className="text-white mb-1">+91 xxxxxxx</p>
            </div>
            <div>
              <p className="text-white mb-1">dummy@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
