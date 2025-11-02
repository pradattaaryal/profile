import React, { lazy, Suspense } from "react";
import Header from "./Header/Header";
import About from "./About/About";

const Landing = lazy(() => import("./Landing/Landing"));
const Skill = lazy(() => import("./Skill/Skill"));
const Portfolio = lazy(() => import("../components/Portfolio/Portfolio"));
const Footer = lazy(() => import("./Footer/Footer"));
const Experience = lazy(() => import("./Experience/Experience"));
const Label = lazy(() => import("./Marquee/Marquee"));

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center  text-gray-900 overflow-x-hidden">
    
      <Header />

   
      <main className="flex flex-col gap-24 w-full    mt-24">
        <About />

        
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        

          <Experience />
          <Portfolio />
          <Label />
          <Skill />
        </Suspense>
      </main>

       <Footer />
    </div>
  );
};

export default Home;
