/** @jsxImportSource theme-ui */
import { Container, Box } from 'theme-ui';
import { useEffect } from 'react';
import DescriptionsTextFeature from '../components/descriptions-text-feature';
import NextImage from '../components/next-image';
import Illustration from '../assets/how-it-works/how-it-works2.svg';
import { gsap } from "gsap/dist/gsap";

const data = {
  description:
    '3. In the first call, we\'ll create your official KDZ Success plan',
  description2: '4. As soon as the first official call is done, it\'s game time.',
  description3: '5. I\'ll track and support your performance on a 100% daily basis.',
};

export default function HowItWorksTwo() {

  useEffect(() => {

    gsap.from('.fadeXhiw3', {
        scrollTrigger: '.fadeXhiw3',
        duration: 1.1,
        opacity: 0,
        x: -200,
        stagger: 0.2,
        ease: "back",
    });
    gsap.to('.fadeXhiw3', {
      scrollTrigger: '.fadeXhiw3',
      duration: 1.1,
      opacity: 1,
      x: 0,
      stagger: 0.2,
      ease: "back",
  });

}, []);


  return (
    <section sx={styles.howitworks}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <NextImage src={Illustration} alt="Thumbnail" />
        </Box>
        <Box sx={styles.contentBox}>
          <DescriptionsTextFeature
            className="fadeXhiw3"
            description={data.description}
            description2={data.description2}
            description3={data.description3}
          />
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
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
  },
  howitworks: {
    /*mt: [8, null, 9, null, null, 10, null, '170px'],
    pb: [8, null, 9, null, null, 10, null, '170px'],
    ,*/
    overflow: 'hidden',
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
};
