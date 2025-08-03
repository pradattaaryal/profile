import React, { lazy, Suspense } from 'react';
import Header from './Header/Header';
import About from './About/About';

// Lazy-loaded components
const Landing = lazy(() => import('./Landing/Landing'));
const Skill = lazy(() => import('./Skill/Skill'));
const Portfolio = lazy(() => import('../components/Portfolio/Portfolio'));
const Footer = lazy(() => import('./Footer/Footer'));
const Experience = lazy(() => import('./Experience/Experience'));
const Label = lazy(() => import('./Marquee/Marquee'));

const Home = () => {
  return (
    <div className="hover-target">
      <Header />
      <About/>
      {/* Landing is optional, keep it commented or remove if unused */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Landing /> */}
        <Experience />
        <Portfolio />
        <Label />
        <Skill />
        <Footer />
      </Suspense>
      <About />
    </div>
  );
};

export default Home;
