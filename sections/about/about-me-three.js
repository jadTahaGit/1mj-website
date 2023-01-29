/** @jsxImportSource theme-ui */
import { Container, Box } from 'theme-ui';
import { useEffect } from 'react';
import AboutTextFeature from '../../components/about-text-feature';
import NextImage from '../../components/next-image';
import MyPic from '../../assets/images/my-pics/face-right.jpg';
import { gsap } from "gsap/dist/gsap";

const data = {
  description:
    'Fast-forward a few years and some other poor decisions I made, and we reach the moment in which I was emotionally destroyed. I can tell you more about it personally, but I don’t think more details would be relevant here.',
  description2: 'What matters is there was a moment that crushed me so much that it gave me a depression and demanded a huge shift in my personality. I am now a completely different person. I figured out how I could become the person I had always wanted to become. I figured out how I could reach my full potential. How I could become the best version of myself.',
};

export default function AboutMeThree() {

  useEffect(() => {

    gsap.from('.fadeYabout3', {
        scrollTrigger: '.fadeYabout3',
        duration: 1.5,
        opacity: 0,
        y: -100,
        stagger: 0.2,
        ease: "back",
    });
    gsap.to('.fadeYabout3', {
      scrollTrigger: '.fadeYabout3',
      duration: 1.5,
      opacity: 1,
      y: 0,
      stagger: 0.2,
      ease: "back",
  });

    }, []);

  return (
    <section sx={styles.about}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <AboutTextFeature
            description={data.description}
            description2={data.description2}
            description3={data.description3}
          />
        </Box>
        <Box className="fadeYabout3" sx={styles.thumbnail}>
          <NextImage src={MyPic} alt="Thumbnail" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  about: {
    backgroundColor: 'secondary',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: [8, null, 9, null, null, 10, null, '120px'],
    overflow: 'hidden',
  },
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 3],
  },
  contentBox: {
    fontSize: '20px',
    color: 'whiteText',
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, '60%', null, 485],
    pb: ['30px', '40px', null, 0],
    mt: ['auto', null, null, 0],
    mb: ['auto', null, null, 0],
    ml: ['auto', null, null, 0],
    mr: ['auto', null, '50px', null, '50px', 0],
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
      maxWidth: [380, null, null, null, 500],
    },
  },
};
