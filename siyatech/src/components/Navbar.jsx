

import React from 'react'
import { useState } from 'react'




export default function Navbar(props) {
  return (
    <div>
      <div>
      <nav className="navbar navbar-expand-lg bg-body-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="/">{props.title}</a>
    <button className="navbar-toggler btn-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon light"></span>
    </button>
    <div className="collapse navbar-collapse text-light " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/">Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/">Contact</a>
        </li>
        
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
    </div>


  )
}
