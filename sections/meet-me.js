/** @jsxImportSource theme-ui */
import React, { useState, useEffect } from 'react';
import NextImage from '../components/next-image';
import { Container, Box, Grid, Text, Heading, Button } from 'theme-ui';
import { keyframes } from '@emotion/react';
import DefaultTextFeature from '../components/default-text-feature';
import { IoIosPlay } from 'react-icons/io';
import { gsap } from 'gsap/dist/gsap';
import VideoModal from '../components/modals/video-modal';

import MyGraphic from '../assets/meet-me/meet-me-red.png';
import shapePattern from '../assets/my-shape-pattern.png';

import Handshake from '../assets/meet-me/handshake.svg';
import Fingerprint from '../assets/meet-me/fingerprint.svg';

const data = {
  subTitle: 'Call Me Dez',
  title: 'Press Play To Meet Me',
  features: [
    {
      id: 1,
      imgSrc: Handshake,
      altText: 'How People Call Me',
      title: 'The Best Teammate You Can Find',
      text: 'Once we start working together, your success becomes my success. I genuinely care, so you better bring your A game.',
    },
    {
      id: 2,
      imgSrc: Fingerprint,
      altText: 'Ass-Kicker',
      title: "It's All About YOU",
      text: "I'm not here to just tell you what worked for me. We are both here to figure what works best SPECIFICALLY for YOU. All approaches will be tailored to you.",
    },
  ],
};

export default function MeetMe() {
  useEffect(() => {
    gsap.from('.imageIcon', {
      scrollTrigger: '.imageIcon',
      duration: 1,
      opacity: 0,
      y: 150,
      stagger: 0.3,
      ease: 'back',
    });
    gsap.to('.imageIcon', {
      scrollTrigger: '.imageIcon',
      duration: 1,
      opacity: 1,
      y: 0,
      stagger: 0.3,
      ease: 'back',
    });

    gsap.from('.meetVideo', {
      scrollTrigger: '.meetVideo',
      duration: 1.3,
      opacity: 0,
      x: -300,
    });
    gsap.to('.meetVideo', {
      scrollTrigger: '.meetVideo',
      duration: 1.3,
      opacity: 1,
      x: 0,
    });
  }, []);

  //modal status
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section sx={styles.services}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Container>
            <NextImage
              className="meetVideo"
              width={466}
              height={550}
              src={MyGraphic}
              alt="Meet Me - Video Thumbnail"
              sx={styles.img}
            />
          </Container>
          <div>
            <Button
              sx={styles.videoBtn}
              onClick={() => setIsOpen(true)}
              aria-label="Play Button"
            >
              <span>
                <IoIosPlay />
              </span>
            </Button>
            <VideoModal
              home={true}
              selector={'#content'}
              open={isOpen}
              onClose={() => setIsOpen(false)}
              url="https://www.youtube.com/watch?v=FgbqUo6cMfo"
            />
          </div>

          <Box sx={styles.shapeBox}>
            <NextImage src={shapePattern} alt="Shape" />
          </Box>
        </Box>
        <Box sx={styles.contentBox}>
          <Box sx={styles.textFeature}>
            <DefaultTextFeature
              subTitle={data.subTitle}
              title={data.title}
              description={
                'Chemistry is the most important thing you need to have with your coach. Hit play to see if you like my vibe.'
              }
            />
          </Box>
          <Grid sx={styles.grid}>
            {data.features.map((item) => (
              <Box sx={styles.card} key={item.id}>
                <NextImage
                  className="imageIcon"
                  src={item.imgSrc}
                  alt={item.altText}
                  sx={styles.icon}
                />

                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
      {/*<ModalVideo
        channel="youtube"
        isOpen={videoOpen}
        videoId="qH__36x6ZLE"
        onClose={() => setVideoOpen(false)}
      />*/}
    </section>
  );
}

const playPluse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7],
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
  img: {
    width: ['300px', null, '390px', null, '466px'],
    height: ['354px', null, '460px', null, '550px'],
  },
  services: {
    pb: ['90px', null, 9, null, null, 10, null, '150px'],
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },
  videoBtn: {
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: 'primary',
      borderRadius: '50%',
      animation: `${playPluse} 1.5s ease-out infinite`,
      opacity: 0.5,
    },
    '> span': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 'inherit',
      height: 'inherit',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2,
    },
    svg: {
      fontSize: [40, null, 48, null, 62],
    },
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s',
  },

  icon: {
    width: ['45px', null, null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },

    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%',
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
  textFeature: {
    pr: ['0px', '50px', '70px', '0px', '0px', '0px', '0px', '0px'],
    pl: ['0px', '50px', '70px', '0px', '0px', '0px', '0px', '0px'],
  },
};
