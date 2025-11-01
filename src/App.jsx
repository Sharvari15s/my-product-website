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
import "./styles/globals.css";

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Header />
      <main className="space-y-24">
        <HeroSection />
        <SmartFeatures />
        <Specifications />
        <AboutSection />
        <Technology />
        <TransformSection />
        <CallToAction />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
