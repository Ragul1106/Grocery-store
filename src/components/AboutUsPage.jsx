import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';

import '../assets/css/document.css';

const AboutUs = () => {
  return (
    <>
        <Helmet>
          <title>Your Cart | Grocery Store</title>
        </Helmet>
        
      <Header />
      <div className="about-us-container fs-4 fw-bold">
        {/* <h1 className="text-start mb-4">ABOUT US</h1> */}
        <p className="text-start">GROCERY AT DOORSTEP</p>

        <p className="section-content">
          3 Years of iconic Grocery at doorstep sale, Ethnic & Modern Pets collections and Bonsai Trees.
        </p>

        <h3 className="section-title text-center fs-2 fw-bold">BIGGER, BETTER, BRANDS.</h3>
        <p className="section-content">
          Sonee Sports is an inspirational portfolio of well-diversified iconic sports, Lifestyle and fashion brands presented through unrivaled creativity and innovation.
          At Sonee Sports you can deliver branded products, exceptional service, unparalleled customer support and operational excellence to create highest value to our customers, employees and suppliers. Through a thorough integration of our human resource, state of the art ERP system and E-commerce platform.
        </p>

        <h2 className="section-title text-center fs-2 fw-bold">Mission</h2>
        <p className="section-content">
          Our mission is to improve the performance and lives of sports and physical fitness participants in Maldives. We do that by presenting world leading brands, integrated with exceptional service, unparalleled support, and operational excellence to facilitate sports and play.
        </p>

        <h2 className="section-title text-center fs-2 fw-bold">Vision</h2>
        <p className="section-content">
          We envision a future where Maldives embraces healthy living as part of our culture.
        </p>

        <h2 className="section-title text-center fs-2 fw-bold">Bigger Better Brands</h2>
        <p className="section-content">
          Sonee Sports will invest in promoting healthy lifestyles through play and sport because healthy people contribute to improving the society by channeling the physical and mental energy generated from sports to action, creativity, and innovation.
        </p>

        <h2 className="section-title text-center fs-2 fw-bold">Social Change</h2>
        <p className="section-content">
          We will invest in the power of sports to bring social change. Sports provide a powerful platform to advance social change. Our purpose of transforming the Maldivian Society can only be achieved through inclusivity of all members of the society and the sustainability of the environment in which we live.
        </p>

        <h2 className="section-title text-center fs-2 fw-bold">Joy</h2>
        <p className="section-content">
          Sonee Sports will invest in enhancing the lives of a healthy nation by helping people experience the joy of celebrating life. We will redefine social gatherings and healthy eating 2030 Initiatives & Goals.
        </p>
      </div>
    </>
  );
};

export default AboutUs;