import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import SEO from '../components/seo';
import Layout from '../components/layout';
import ContactMe from '../sections/contact/contact-me';

export default function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout isLightBG={true} >
          <SEO title="Contact Me - Kaidezen Coaching" />
          <ContactMe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
