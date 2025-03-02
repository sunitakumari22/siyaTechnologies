

import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'




export default function Navbar() {
  return (
    <div>
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="text-primary m-0">siya tech</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link">Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            <Link to="/services" className="nav-item nav-link">Services</Link>
            <Link to="/gallery" className="nav-item nav-link">Gallery</Link>
            <Link to="/courses" className="nav-item nav-link">Courses</Link>
            <Link to="/contact" className="nav-item nav-link">Contact</Link>
          </div>
          <Link to="/register" className="btn btn-primary rounded-pill py-2 px-4">Register</Link>
        </div>
      </nav>
    </div>
  </div>


  )
}
