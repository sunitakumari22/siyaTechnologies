import React from 'react'
import Navbar from './Navbar';
import{Outlet } from 'react-router-dom'
import Dashboard from './Dashboard';
import About from './About';
import Services from './Services';

export default function Home() {
  return (
    <div>
      <Navbar title="SiyaTech" />
      <Dashboard/>

    </div>
  )
}
