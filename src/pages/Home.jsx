import React from "react";
import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
import Contact from "../component/Contact";
import About from "../component/About";
import Resume from "../component/Resume";
import Portfolio from "../component/Portfolio";

export default function Home() {
  return (
    <div  className="bg-[#0F0F0F] text-white min-h-screen relative  font-sans px-2  md:px-20 py-10 scroll-smooth  ">
      <Navbar/>
      <HeroSection/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}
