// Home.jsx

import React, { lazy, Suspense } from 'react';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import About from './About/About';
import Skill from './Skill/Skill';
import Footer from './Footer/Footer';
import Experience from './Experience/Experience';
import Label from './Marquee/Marquee';

// Lazy load Portfolio
const Portfolio = lazy(() => import('../components/Portfolio/Portfolio'));

const Home = () => {
  return (
    <div className='hover-target'>
      <Header />
      {/* <Landing /> */}
      <About />
      <Experience />

      {/* Lazy loaded Portfolio */}
      <Suspense fallback={<div>Loading Portfolio...</div>}>
        <Portfolio />
      </Suspense>

      <Label />
      <Skill />
      <Footer />
    </div>
  );
};

export default Home;
