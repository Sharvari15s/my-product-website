
import React from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import HeroSection from "./components/sections/hero-section";
import SmartFeatures from "./components/sections/smartfeatures-section";
import Technology from "./components/sections/technology-section";
import TransformSection from "./components/sections/transform-section";
import CallToAction from "./components/sections/calltoaction-section";
import AboutSection from "./components/sections/about-section";
import Specifications from "./components/sections/specifications-section";
import ContactSection from "./components/sections/contact-section";
import "./style/globals.css";
import "./App.css";

export default function App() {
  return (
    
    <div className="min-h-screen font-sans">
    <Header />
    <HeroSection />
    <SmartFeatures />
    <Specifications />
    <AboutSection />
    <Technology />
    <TransformSection />
    <CallToAction />
    <ContactSection />
    <Footer />
  </div>
  );
}