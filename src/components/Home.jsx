import React from 'react'
import Header from './Header/Header'
import Landing from './Landing/Landing'
import About from './About/About'
import Skill from './Skill/Skill'
import Portfolio from '../components/Portfolio/Portfolio'
 
import Footer from './Footer/Footer'
 
import Experience from './Experience/Experience'
import Label from './Marquee/Marquee'

 const Home = () => {
  return (
    <div className='hover-target'>
     <Header></Header>
     <Landing></Landing>
     <About></About>
    <Label/>
     <Skill></Skill>
    <Experience></Experience>
 
      
     <Portfolio></Portfolio>
     <Footer></Footer>
     </div>
  )
}

export default Home
