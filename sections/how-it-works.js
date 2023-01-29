/** @jsxImportSource theme-ui */
import { Container, Box } from 'theme-ui';
import { useEffect } from 'react';
import DescriptionsTextFeature from '../components/descriptions-text-feature';
import NextImage from '../components/next-image';
import SectionHeader from '../components/section-header';
import Illustration from '../assets/how-it-works/how-it-works1.svg';
import { gsap } from "gsap/dist/gsap";

const data = {
  description:
    '1. We have an intro call to make sure we\'re a match',
  description2: '2. We book the first official call',
};

export default function HowItWorks() {

  useEffect(() => {

      gsap.from('.fadeXhiw1', {
          scrollTrigger: '.fadeXhiw1',
          duration: 1.1,
          opacity: 0,
          x: 200,
          stagger: 0.2,
          ease: "back",
      });
      gsap.to('.fadeXhiw1', {
        scrollTrigger: '.fadeXhiw1',
        duration: 1.1,
        opacity: 1,
        x: 0,
        stagger: 0.2,
        ease: "back",
    });

  }, []);


  return (
    <section id='how' sx={{ variant: 'section.coreFeature' }}>
    <SectionHeader slogan="In Case You're Wondering..." title="This Is How It Works" />
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <DescriptionsTextFeature 
            className="fadeXhiw1"
            description={data.description}
            description2={data.description2}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <NextImage src={Illustration} alt="Thumbnail" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
