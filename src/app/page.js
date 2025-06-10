'use client';

import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/HeroSection';
import Preloader from '@/components/preloader';

// Lazy load components
const Features = dynamic(() => import('@/components/features'), { ssr: false });
const Screenshots = dynamic(() => import('@/components/screenshots'), { ssr: false });
const Pricing = dynamic(() => import('@/components/pricing'), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);

  const [scrollEndRef, scrollPassed] = useInView({
    threshold: 0.1,
    triggerOnce: false, // 👈 important for up/down toggle
  });

  const [showHeader, setShowHeader] = useState(false);

  // Update header visibility dynamically
  useEffect(() => {
    if (!loading) {
      setShowHeader(scrollPassed); // 👈 toggles with scroll
    }
  }, [scrollPassed, loading]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Trigger other section loading
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [screenshotsRef, screenshotsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const [showFeatures, setShowFeatures] = useState(false);
  const [showScreenshots, setShowScreenshots] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  useEffect(() => {
    if (featuresInView) setShowFeatures(true);
    if (screenshotsInView) setShowScreenshots(true);
    if (pricingInView) setShowPricing(true);
  }, [featuresInView, screenshotsInView, pricingInView]);

  if (loading) return <Preloader />;

  return (
    <>
      {showHeader && <Header isVisible />}

      {/* Hero Section passes scrollEndRef */}
      <HeroSection scrollEndRef={scrollEndRef} loaded={!loading} />

      <section id="features" ref={featuresRef}>
        {showFeatures && <Features />}
      </section>

      <section id="screenshots" ref={screenshotsRef}>
        {showScreenshots && <Screenshots />}
      </section>

      <section id="pricing" ref={pricingRef}>
        {showPricing && <Pricing />}
      </section>
    </>
  );
}
