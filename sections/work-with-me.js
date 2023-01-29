/** @jsxImportSource theme-ui */
import { useEffect } from 'react';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from '../components/section-header';
import PatternBG from '../assets/work-with-me/patternBG.png';
import ArrowOdd from '../assets/work-with-me/arrowOdd.svg';
import ArrowEven from '../assets/work-with-me/arrowEven.svg';
import { gsap } from "gsap/dist/gsap";

const data = [
  {
    id: 1,
    title: 'Book Your Qualifying Call',
    text:
      'Fill out a quick form and then book your qualifying call at your earliest covenience.',
  },
  {
    id: 2,
    title: 'Await Approval',
    text:
      'If you\'re approved for the qualifying call, you\'ll receive an email confirmation with info about the call.',
  },
  {
    id: 3,
    title: 'Double-Checking',
    text:
      'In the call is where we\'ll be able decide if we really should work together. I expect your commitment and you can expect my professionalism.',
  },
  {
    id: 4,
    title: 'Ready To Get Started',
    text:
      'If everything is approved, we will book our first official call and everything will start from that moment onwards!',
  },
];

export default function WorkWithMe() {

  useEffect(() => {

    gsap.from('.fadeYwwm', {
      scrollTrigger: '.fadeYwwm',
      duration: 1,
      opacity: 0,
      y: 100,
      stagger: 0.2,
      ease: "back",
    });
    gsap.to('.fadeYwwm', {
      scrollTrigger: '.fadeYwwm',
      duration: 1,
      opacity: 1,
      y: 0,
      stagger: 0.2,
      ease: "back",
    });

    gsap.from('.fadeOarrows', {
      scrollTrigger: '.fadeOarrows',
      duration: 1,
      opacity: 0,
      y: 25,
      stagger: 0.2,
      ease: "back",
    });
    gsap.to('.fadeOarrows', {
      scrollTrigger: '.fadeOarrows',
      duration: 1,
      opacity: 1,
      y: 0,
      stagger: 0.2,
      ease: "back",
    });


    }, []);

  return (
    <section sx={styles.workflow}>
      <Container>
        <SectionHeader
          slogan="Not everyone Can Be My Client"
          title="How To Work With Me"
          isWhite={true}
          isDark={true}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box className="fadeOarrows" sx={styles.card} key={item.id}>
              <Box className="fadeYwwm" sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: 'secondary',
    backgroundImage: `url('/public/patternBG.png')`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${ArrowOdd})`,
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    '&:last-child::before': {
      display: 'none',
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'primary',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#EEEEEE',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'accent',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'whiteText',
      pr: [0, null, null, null, null, 5],
    },
  },
};
