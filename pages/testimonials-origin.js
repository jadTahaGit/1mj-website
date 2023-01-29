import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import SEO from '../components/seo';
import Layout from '../components/layout';
import ProofOfOrigin from '../sections/proof-of-origin/proof-of-origin';

export default function TestimonialsOrigin() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout isLightBG={true} >
          <SEO title="Testimonials Origin - Kaidezen Coaching" />
          <ProofOfOrigin />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
