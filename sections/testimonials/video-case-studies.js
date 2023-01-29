import React, { useState, useEffect } from 'react';
/** @jsxImportSource theme-ui */
import {
  Container,
  Box,
  Button,
} from 'theme-ui';
import NextImage from '../../components/next-image';
import { keyframes } from '@emotion/react';
import { IoIosPlay } from 'react-icons/io';
import shapePattern from '../../assets/my-shape-pattern.png';
import CaseStudyInfo from '../../components/case-studies/case-study-info';
import CaseStudyDescription from '../../components/case-studies/case-study-description';
import clientData from '../../components/case-studies/video-case-study.data';
import EmptyModal from '../../components/modals/empty-modal';
import VideoModal from '../../components/modals/video-modal';
import ReactPlayer from 'react-player';
import { gsap } from "gsap/dist/gsap";

export default function VideoCaseStudies() {

  useEffect(() => {

    gsap.from('.subtleVideoBounce', {
        scrollTrigger: '.subtleVideoBounce',
        duration: 1.5,
        opacity: 1,
        x: -50,
        stagger: 0,
        ease: "back"
    });
    gsap.to('.subtleVideoBounce', {
      scrollTrigger: '.subtleVideoBounce',
      duration: 1.5,
      opacity: 1,
      x: 0,
      stagger: 0,
      ease: "back"
    });

    gsap.from('.fadePlayButton', {
      scrollTrigger: '.fadePlayButton',
      duration: 1.5,
      opacity: 0,
      y: 50,
      stagger: 0,
    });
    gsap.to('.fadePlayButton', {
      scrollTrigger: '.fadePlayButton',
      duration: 1.5,
      opacity: 1,
      y: 0,
      stagger: 0,
    });

    setData(clientData);

    }, []);

    const [data, setData] = useState(clientData);

    //modal status
    const [isOpen, setIsOpen] = useState(false);

    const [trueData, setTrueData] = useState(null);

  return (

    <>{data.map(({ client, occupation, successGoal, thumbnail, how, testimonial }, i) => (

<section id="videos" sx={styles.services} key={i}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <NextImage className="subtleVideoBounce" src={thumbnail} alt="Thumbnail" />
          <div>
          <Button
            className="fadePlayButton"
            sx={styles.videoBtn}
            onClick={() => {
                setTrueData(data[i].videoId);
                setIsOpen(true);             
              }}
            aria-label="Play Button"
          >
            <span>
              <IoIosPlay />
            </span>
          </Button>
          <VideoModal selector={"#content"} open={isOpen} onClose={() => setIsOpen(false)} url={trueData} />
          </div>

          {i % 2 == 0 && 
          <Box sx={styles.shapeBox}>
            <NextImage src={shapePattern} alt="Shape" />
          </Box>}

        </Box>

        <Box sx={styles.contentBox}>
          <Box sx={styles.textFeature}>
            <CaseStudyInfo
            client={client}
            occupation={occupation}
            successGoal={successGoal}
            />
          </Box>
        </Box>
      </Container>
      <CaseStudyDescription
              how={how}
              testimonial={testimonial}
          />
    </section>
      ))}
      </>
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
  services: {
    py: [0, null, null, 2, null, 7],
    mb: [ '60px', '65px', 0, 0],
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
    mr: ['auto', null, null, 6, 6, 6],
    ml: ['auto', null, null, 0],
    mb: [ '20px', '25px', 0, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
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
      //animation: `${playPluse} 1.5s ease-out infinite`,
      opacity: 0.85,
    },
    '> span': {
      //backgroundColor: 'rgba(255,255,255,0.5)',
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
    width: ['100%', null, null, 315, 390, 450, 550, 600],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s',
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
  //textFeature: {
    //pr: ['0px', '50px', '70px', '0px', '0px', '0px', '0px', '0px'],
    //pl: ['0px', '50px', '70px', '0px', '0px', '0px', '0px', '0px'],
  //}
};
