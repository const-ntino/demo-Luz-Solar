import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

import ogImage from "../images/icon.png";

import HeroSection from "../components/Hero";
import AdvantagesSection from "../components/Advantages";
import HowItWorksSection from "../components/HowItWorks";
import ContactSection from "../components/Contact";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Luz Solar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Paineis solares para sua empresa ou residência"
        />
        <meta property="og:title" content="Luz Solar 🌞" />
        <meta property="og:image" content={ogImage} />
      </Helmet>
      <Layout>
        <HeroSection />
        <AdvantagesSection />
        <HowItWorksSection />
        <ContactSection />
      </Layout>
    </>
  );
};

export default IndexPage;
