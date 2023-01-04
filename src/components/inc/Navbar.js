import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Line from '../images/liner.jpg'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <Link to="/" class="navbar-brand"><a class="navbar-brand" href="#">
      <img src={Line} alt="Bootstrap" width="30" height="24"/>
    </a></Link>
    
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/" activeClassName="active" class="nav-link active">Home</Link>
          </li>
          <li class="nav-item">
            <Link activeClassName="active" to="/about" class="nav-link active">About Us</Link>
          </li>
          <li class="nav-item">
            <Link activeClassName="active" to="/contact" class="nav-link active">Contact Us</Link>
          </li>
        </ul>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
    </div>
    </nav> 

  )
}

export default Navbar;

{/* 
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <Link to="/" class="navbar-brand">Linaer Amp Tech</Link>
    
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/" activeClassName="active" class="nav-link active">Home</Link>
          </li>
          <li class="nav-item">
            <Link activeClassName="active" to="/about" class="nav-link active">About Us</Link>
          </li>
          <li class="nav-item">
            <Link activeClassName="active" to="/contact" class="nav-link active">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
    </nav> 

*/}