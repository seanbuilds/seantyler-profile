import React from 'react';
import Hero from '../components/Hero';
import CredibilityStrip from '../components/CredibilityStrip';
import CaseStudies from '../components/CaseStudies';
import About from '../components/About';

export default function Home() {
  return (
    <main>
      <Hero />
      <CredibilityStrip />
      <CaseStudies />
      <About />
    </main>
  );
}
