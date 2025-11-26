import React from 'react'

import Navbar from './components/Navbar';
import HeroSection1 from './components/Herosection1';
import Features from './components/Features';
import MakeMeaningFul from './components/MakeMeaningFul';
import PiggyBank from './components/PiggyBank';
import UseCases from './components/UseCases';
import Footer from './components/Footer';
const page = () => {
  return (
    <>
    <Navbar />
    <HeroSection1 />
    <Features />
    <MakeMeaningFul />
    <PiggyBank />
    <UseCases />  
    <Footer />
    </>
   
  )
}

export default page