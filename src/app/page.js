'use client';

import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import Preloader from "@/components/preloader";

const Features = dynamic(() => import("@/components/features"), { ssr: false });
const Screenshots = dynamic(() => import("@/components/screenshots"), { ssr: false });
const Pricing = dynamic(() => import("@/components/pricing"), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Detect when scroll passes the bottom of hero section (scrollEndRef)
 const [scrollEndRef, inView] = useInView({
    threshold: 0,
    rootMargin: "-1px 0px 0px 0px", // optional tweak for exact trigger
  });

 const showHeader = !inView;



  // Simulate loading screen for 1 second
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Section in-view detection for lazy loading
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [screenshotsRef, screenshotsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const [showFeatures, setShowFeatures] = useState(false);
  const [showScreenshots, setShowScreenshots] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  useEffect(() => {
    if (featuresInView) setShowFeatures(true);
  }, [featuresInView]);

  useEffect(() => {
    if (screenshotsInView) setShowScreenshots(true);
  }, [screenshotsInView]);

  useEffect(() => {
    if (pricingInView) setShowPricing(true);
  }, [pricingInView]);

  if (loading) return <Preloader />;

  return (
    <>
      {showHeader && <Header isVisible />}

      {/* Pass scrollEndRef to HeroSection to mark bottom */}
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
