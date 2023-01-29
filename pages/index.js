import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import Layout from '../components/layout';
import theme from '../theme';
import SEO from '../components/seo';
import HowIHelp from '../sections/how-i-help';
import CallToAction from '../sections/call-to-action';
import AboveTheFold from '../sections/above-the-fold';
import MeetMe from '../sections/meet-me';
import TestimonialSection from '../sections/testimonial-section';
import HowItWorks from '../sections/how-it-works';
import HowItWorksTwo from '../sections/how-it-works-two';
import HowItWorksThree from '../sections/how-it-works-three';
import WhyMe from '../sections/why-me';
import WorkWithMe from '../sections/work-with-me';
import Package from '../sections/package';
import PastResults from '../sections/past-results';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout isLightBG={false} isTestimonialsPage={false}>
          <SEO title="Kaidezen Coaching" />
          <AboveTheFold />
          {/* <TestimonialSection /> */}
          <div className="MarginTop">
            <br /> <br />
          </div>
          <MeetMe />
          <HowIHelp />
          <HowItWorks />
          <HowItWorksTwo />
          <HowItWorksThree />
          <WhyMe />
          <WorkWithMe />
          {/*<Package />*/}
          <PastResults />
          <CallToAction />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
