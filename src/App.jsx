import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Approach from './components/Approach';
import WhyChooseUs from './components/WhyChooseUs';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-[#16191E] selection:bg-[#00A3B4] selection:text-white antialiased">
      {/* 1. STICKY NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT SECTIONS */}
      <main className="flex-grow">
        {/* 2. HERO */}
        <Hero />

        {/* 3. ABOUT */}
        <About />

        {/* 4. SERVICES */}
        <Services />

        {/* 5. SELECTED PROJECTS */}
        <Projects />

        {/* 6. DESIGN APPROACH / PROCESS */}
        <Approach />

        {/* 7. WHY CHOOSE US */}
        <WhyChooseUs />

        {/* 8. CALL TO ACTION */}
        <CallToAction />

        {/* 9. CONTACT + GOOGLE MAP */}
        <Contact />
      </main>

      {/* 10. FOOTER */}
      <Footer />
    </div>
  );
}
