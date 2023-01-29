import React, { useEffect } from 'react';
import { Box, Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import ServiceCard from '../components/cards/service-card';
import serviceImage1 from '../assets/how-i-help/help-you1.svg';
import serviceImage2 from '../assets/how-i-help/help-you2.svg';
import serviceImage3 from '../assets/how-i-help/help-you3.svg';
import serviceImage4 from '../assets/how-i-help/help-you4.svg';
import serviceImage5 from '../assets/how-i-help/help-you5.svg';
import serviceImage6 from '../assets/how-i-help/help-you6.svg';
import { gsap } from "gsap/dist/gsap";

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text:
      'All of this, when well done, has the potential to fully revolutionize your entire life.',
    heading: 'Systems, Resources & Budget Optimization',
    path: '#',
  },
  {
    image: serviceImage2,
    text:
      'Decisions aren\'t that hard to make when two people are making the decision.',
    heading: 'Decision-Making & Goals Performance Tracking',
    path: '#',
  },
  {
    image: serviceImage3,
    text:
      'Standards will make or break your success. The path of ambition starts here.',
    heading: 'Raising Standards & Setting Boundaries',
    path: '#',
  },
  {
    image: serviceImage4,
    text:
      'Life is all about priorities. Ironically, we usually get it all wrong, so constant reflection is crucial.',
    heading: 'Analyzing and Redefining Your Priorities',
    path: '#',
  },
  {
    image: serviceImage5,
    text:
      'You are your habits. Never forget that. It is time to change your life by changing yourself.',
    heading: 'Gaining Success & Health Habits',
    path: '#',
  },
  {
    image: serviceImage6,
    text:
      'It\'s all about delegating! I know what you\'re thinking. But just give my method a shot.',
    heading: 'Automating Your Business (More Personal Time)',
    path: '#',
  },
];



const HowIHelp = () => {

    useEffect(() => {

        gsap.from('.fadeXhelp', {
            scrollTrigger: '.fadeXhelp',
            duration: 1,
            opacity: 0,
            x: -100, //used to be 100
            stagger: 0.2,
        });
        gsap.to('.fadeXhelp', {
          scrollTrigger: '.fadeXhelp',
          duration: 1,
          opacity: 1,
          x: 0,
          stagger: 0.2,
      });


    }, []);

  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
      <SectionHeader slogan="Well..." title="How Can I Help You?" isDark={true} isWhite={true}/>
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              className="fadeXhelp"
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowIHelp;

const styles = {
  services: {
    backgroundColor: '#05004E',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
