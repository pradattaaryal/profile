import React from 'react'
import Header from './Header/Header'
import Landing from './Landing/Landing'
import About from './About/About'
import Skill from './Skill/Skill'
import Portfolio from '../components/Portfolio/Portfolio'
 import Label from './Marquee/Marquee'
import Footer from './Footer/Footer'
 
import Experience from './Experience/Experience'

 const Home = () => {
  return (
    <>
     <Header></Header>
     <Landing></Landing>
     <About></About>
     <Skill></Skill>
    <Experience></Experience>
 
      
     <Portfolio></Portfolio>
     <Footer></Footer>
     </>
  )
}

export default Home
