import React from 'react'
import HeroSection from '../components/HeroSection'
import Contents from '../components/Contents'
import Footer from '../components/Footer'
import HeroSub from '../components/HeroSub'
import NavBar from '../components/NavBar'


const HomePage = () => {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <Contents/>
      <HeroSub/>
      <Footer/>
    </>
  )
}

export default HomePage