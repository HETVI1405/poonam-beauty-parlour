import React from 'react'
import Hero from "./components/Hero"
import Services from "./components/Services"
import './App.css'
import Package from './components/Package'
import Gallery from './components/Gallery'
import Hairstyle from './components/Hairstyle'
import AboutUs from './components/AboutUs'
import Appointment from './components/AppointmentModal'

import Footer from './components/Footer'
import FlowingMenu from "./components/Flowing";

function App() {
 

  return (
    <>
  <Hero />
  <Services />
  <Package />
  <Gallery />
  <Hairstyle />
  <FlowingMenu /> 
  <AboutUs />
  <Appointment />
  <Footer />


    </>
  )
}

export default App
