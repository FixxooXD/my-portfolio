import React from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Projects from "../components/Projects";
import { TheContextProvider } from "../context/ThemeContextProvider";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <TheContextProvider defaultTheme="system">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <Projects />
        <ContactSection />
      </TheContextProvider>
      <Footer />
    </>
  );
};

export default Index;
