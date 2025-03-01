import React from 'react'
import Navbar from './Navbar';
import Dashboard from './dashboard';

export default function Home() {
  return (
    <div>
      <Navbar title="SiyaTech" />
      <Dashboard />
    </div>
  )
}
