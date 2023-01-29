import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import SEO from '../components/seo';
import Layout from '../components/layout';
import AboutMe from '../sections/about/about-me';
import AboutMeTwo from '../sections/about/about-me-two';
import AboutMeThree from '../sections/about/about-me-three';
import AboutMeFour from '../sections/about/about-me-four';

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout >
          <SEO title="About Me - Kaidezen Coaching" />
          <AboutMe />
          <AboutMeTwo />
          <AboutMeThree />
          <AboutMeFour />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
