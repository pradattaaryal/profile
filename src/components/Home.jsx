import React from 'react'
import Header from './Header/Header'
import Landing from './Landing/Landing'
import About from './About/About'
import Skill from './Skill/Skill'
import Portfolio from '../components/Portfolio/Portfolio'
 import Label from './Marquee/Marquee'
import Footer from './Footer/Footer'
import Info from './Infopage/Info'

 const Home = () => {
  return (
    <>
     <Header></Header>
     <Landing></Landing>
     <About></About>
     <Info></Info>
      <Skill></Skill>
     <Portfolio></Portfolio>
     <Footer></Footer>
     </>
  )
}

export default Home
