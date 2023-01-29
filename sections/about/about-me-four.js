/** @jsxImportSource theme-ui */
import { Container, Box } from 'theme-ui';
import { useEffect } from 'react';
import AboutTextFeature from '../../components/about-text-feature';
import NextImage from '../../components/next-image';
import MyPic from '../../assets/images/my-pics/last.jpg';
import { gsap } from "gsap/dist/gsap";

const data = {
  description:
    'All this helped me figure out what my purpose in life is. I want to help others reach their full potential and to think differently. I want to help YOU become the best version of yourself. No matter what challenges that entails, I want to help you achieve it.',
  description2: 'It’s time for you to go after what you TRULY want out of your life.',
  description3: 'Does that sound good to you? If  you’d like to have me on your corner, let’s talk. Stop waiting around for your life to change. Trust me, that won’t work. Book your qualifying call now.'
};

export default function AboutMeFour() {

  useEffect(() => {

    gsap.from('.fadeYabout4', {
        scrollTrigger: '.fadeYabout4',
        duration: 1.5,
        opacity: 0,
        y: 100,
        stagger: 0.2,
        ease: "back",
    });
    gsap.to('.fadeYabout4', {
      scrollTrigger: '.fadeYabout4',
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
        <Box className="fadeYabout4" sx={styles.thumbnail}>
          <NextImage src={MyPic} alt="Thumbnail" />
        </Box>
        <Box sx={styles.contentBox}>
          <AboutTextFeature
            description={data.description}
            description2={data.description2}
            description3={data.description3}
            button='Book Your Qualifying Call'
            lightBG={true}
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  about: {
    backgroundColor: 'whiteText',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: [8, null, 9, null, null, 10, null, '120px'],
    overflow: 'hidden',
  },
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pt: [0, 3, 0, null, 9],
    pb: [0, 7, 0, null, 9],
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
    mr: ['auto', null, null, 0],
    ml: ['auto', null, '50px', null, '50px', 0],
    '.description': {
      pl: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    order: [2, null, null, 0],
    position: 'relative',
    ml: 'auto',
    mr: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
      maxWidth: [380, null, null, null, 500],
    },
  },
};
