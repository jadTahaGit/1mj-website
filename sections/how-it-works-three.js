/** @jsxImportSource theme-ui */
import { Container, Box } from 'theme-ui';
import { useEffect } from 'react';
import DescriptionsTextFeature from '../components/descriptions-text-feature';
import NextImage from '../components/next-image';
import Illustration from '../assets/how-it-works/how-it-works3.svg';
import { gsap } from "gsap/dist/gsap";


const data = {
  description:
    '6. And BOOM. We\'re officially a team. Now it\'s all about you executing the plan.',
  description2: '7. After each week, we\'ll review your performance and where you can improve + strategize on how to do better on the next week.',
};

export default function HowItWorksThree() {


  useEffect(() => {

    gsap.from('.fadeXhiw2', {
        scrollTrigger: '.fadeXhiw2',
        duration: 1.1,
        opacity: 0,
        x: 200,
        stagger: 0.2,
        ease: "back",
    });
    gsap.to('.fadeXhiw2', {
      scrollTrigger: '.fadeXhiw2',
      duration: 1.1,
      opacity: 1,
      x: 0,
      stagger: 0.2,
      ease: "back",
  });

}, []);

  return (
    <section sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <DescriptionsTextFeature
            className="fadeXhiw2"
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
};
