/** @jsxImportSource theme-ui */
import { Container, Box } from 'theme-ui';
import { useEffect } from 'react';
import AboutTextFeature from '../../components/about-text-feature';
import NextImage from '../../components/next-image';
import SectionHeaderAway from '../../components/section-header-away';
import MyPic from '../../assets/images/my-pics/face-dark.jpg';
import { gsap } from "gsap/dist/gsap";

const data = {
  description:
    'I’m Kai Dezen, but you can call me Dez. In 1993, I was born in Porto, Portugal to a lower middle class family who always placed my needs ahead of their own. Anything they COULD give me, they did.',
  description2: 'I was very fortunate for that. However, as a consequence I became very spoiled. This made my mindset (until the age of 25) be the opposite of what is best suited for success.',
  description3: 'I was unaware of what the real world was like because I had been too protected. So, I just wasted that first part of my life seeking external, instant pleasures and joy.'
};

export default function AboutMe() {

  useEffect(() => {

    gsap.from('.fadeYabout1', {
        scrollTrigger: '.fadeYabout1',
        duration: 1.5,
        opacity: 0,
        y: 100,
        stagger: 0.2,
        ease: "back",
    });
    gsap.to('.fadeYabout1', {
      scrollTrigger: '.fadeYabout1',
      duration: 1.5,
      opacity: 1,
      y: 0,
      stagger: 0.2,
      ease: "back",
  });

    }, []);

  return (
    <section sx={styles.about}>
    <div className='padme'></div>
    <SectionHeaderAway slogan="In case you're curious" title="Who Am I?" isWhite={true} isDark={true} />
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <AboutTextFeature
            description={data.description}
            description2={data.description2}
            description3={data.description3}
          />
        </Box>
        <Box className="fadeYabout1" sx={styles.thumbnail}>
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
    '.padme': {
      pt: ['25px', null, null, null, '10px', '10px', '10px'],
    }
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
