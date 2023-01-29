import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Package from '../sections/package';
import PricingOne from '../sections/pricing/pricing-one';
import PricingTwo from '../sections/pricing/pricing-two';
import PricingThree from '../sections/pricing/pricing-three';

export default function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout >
          <SEO title="Pricing & Packages - Kaidezen Coaching" />
          <PricingOne />
          <PricingTwo />
          <PricingThree />
          <Package />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
