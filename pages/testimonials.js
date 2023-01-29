import React from 'react';
/** @jsxImportSource theme-ui */
import { Container } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import SEO from '../components/seo';
import Layout from '../components/layout';
import VideoTrailer from '../sections/testimonials/video-trailer';
import AllTestimonials from '../sections/testimonials/all-testimonials';
import SectionHeader from '../components/section-header-away';
import WrittenCaseStudies from '../sections/testimonials/written-case-studies';
import VideoCaseStudies from '../sections/testimonials/video-case-studies';
import CallToAction from '../sections/testimonials/call-to-action';
import NegativeCaseStudies from '../sections/testimonials/negative-case-studies';
import RandomText from '../components/random-text';

export default function Testimonials() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout  isTestimonialsPage={true} isLightBG={false} >
          <SEO title="Testimonials - Kaidezen Coaching" />
          <VideoTrailer />
          <AllTestimonials />
          <Container>
          <SectionHeader 
          title="Case Studies With Video Testimonial"
          slogan="Any Of These Similar To Your Situation?"
          /> 
          </Container>
          <VideoCaseStudies />
          <SectionHeader 
          title="Case Studies With Written Testimonial"
          slogan="From those who are camera-shy"
          />
          <WrittenCaseStudies />
          <SectionHeader topPadding={true} title='Now A Couple Of Poor Examples' slogan="I need you do your part too" />
          <RandomText description="I didn't want to just show you the good stuff. Not everyone is a success story. Without the right attitude and without taking this seriously, there is no use in us working together. This is exactly why I vet my clients before agreeing to work with them. Here are two examples of clients who didn't make the most of their coaching." />
          <NegativeCaseStudies />
          <RandomText bold={true} description="Disclaimer: Some names may have been altered in the reviews by request. Some people wished to remain annonymous and I respected their wishes. Some testimonials might also have been corrected grammatically or shortened for conciseness. Also, any mentions to the name 'Pedro' refer to me, Dez. Pedro is my birth name." />
          <RandomText descriptionLink="Click here to see all the screenshots of the testimonials for proof of origin." path="/testimonials-origin" />
          <CallToAction />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
