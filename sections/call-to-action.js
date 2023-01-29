/** @jsxImportSource theme-ui */
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image'
import NextImage from '../components/next-image'
import {
  Container,
  Box,
  Grid,
  Text,
  Button,
} from 'theme-ui';
import DefaultTextFeature from '../components/default-text-feature'
import CTAMe from '../assets/images/my-pics/cta.png';
import checkFilledCircle from '../assets/icons/yellow-check.png'
import { gsap } from "gsap/dist/gsap";
import CalendlyButton from '../components/calendly/calendly-button'

export default function CallToAction() {

  const ref = useRef();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#content");
    setMount(true);

    gsap.from('.fadeXcta', {
      scrollTrigger: '.fadeXcta',
      duration: 1,
      opacity: 0,
      x: -100,//used to be 100
      stagger: 0.2,
      ease: "back",
    });
    gsap.to('.fadeXcta', {
      scrollTrigger: '.fadeXcta',
      duration: 1,
      opacity: 1,
      x: 0,
      stagger: 0.2,
      ease: "back",
    });

    gsap.from('.fadeYcta', {
      scrollTrigger: '.fadeYcta',
      duration: 1.8,
      opacity: 0,
      y: -100,
      stagger: 0.2,
      ease: "back",
    });
    gsap.to('.fadeYcta', {
      scrollTrigger: '.fadeYcta',
      duration: 1.8,
      opacity: 1,
      y: 0,
      stagger: 0.2,
      ease: "back",
    });

  }, ["#content"]);

  return (
    <section id="cta" sx={styles.services}>
      <Container sx={styles.containerBox}>
        <Box className="fadeYcta" sx={styles.thumbnail}>
          <NextImage src={CTAMe} alt="Thumbnail" />
        </Box>
        <Box sx={styles.contentBox}>
          <DefaultTextFeature subTitle='Coaching Spots Are Not Guaranteed' title={'If You\'re Ready For The Challenge, This Is It'} description={'Book your qualifying call now and take your first step toward true change and ensuring you achieve your ambitious goals. Let\'s get you to YOUR next level.'} isRedBG={true} />

          <Grid sx={styles.grid}>
              <Box sx={styles.card}>
                <Box sx={styles.wrapper}>
                  <Text className="fadeXcta" sx={styles.listItem} as="p">
                    <NextImage src={checkFilledCircle} alt="check icon" />
                    Get Daily Accountability
                  </Text>
                  <Text className="fadeXcta" sx={styles.listItem} as="p">
                    <NextImage src={checkFilledCircle} alt="check icon" />
                    Get A Teammate For Your Life
                  </Text>
                  <Text className="fadeXcta" sx={styles.listItem} as="p">
                    <NextImage src={checkFilledCircle} alt="check icon" />
                    Get A Success Consiglieri
                  </Text>
                  <Box sx={styles.explore}>
                  {mount ? 
                  <CalendlyButton blueColor={true} content="Book Your Qualifying Call" selector="#content" />
                  : null}
                  </Box>
                </Box>
              </Box>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pt: [6, null, 6, 7, 7, 7],
    pb: [6, null, 6, 117, 117, 117],
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    mb: ['50px', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      width: ['360px', null, '470px', null, '551px'],
      height: ['404px', null, '528px', null, '619px'],
      maxWidth: ['100%', '100%', '100%', '100%', '90%', '100%', '100%'],
    },
  },
  services: {
    backgroundColor: 'primary',
    pt: [8, null, 9, null, null, 7, null, 7],
    /*pb: ['90px', null, 9, null, null, 10, null, '50px'],*/
  },
  contentBox: {
    width: ['100%', null, null, 315, 450, 500, 550, 550],
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
    textAlign: ['center', null, null, 'left', 'left'],
    mt: '-25px',
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
  listItem: {
    color: 'whiteText',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: 'flex',
    alignItems: 'center',
    ml: ['auto', null, null, '0px'],
    mr: ['auto', null, null, '0px'],
    img: {
      mr: '10px',
    },
  },
  explore: {
    mt: ['20px', '20px', '20px', '20px', '40px'],
  },
  button: {
    backgroundColor: 'secondary',
  },
  description: {
    color: 'whiteText',
    fontSize: ['14px', '16px'],
    lineHeight: [1.85, 2.2],
    mt: '10px',
  },
};
