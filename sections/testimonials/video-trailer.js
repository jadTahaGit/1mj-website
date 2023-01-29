import React, { useState, useEffect } from 'react';
import { Container, Box, Button } from 'theme-ui';
import NextImage from '../../components/next-image';
import { Link } from '../../components/link';
import { FaPlay } from 'react-icons/fa';
import SectionHeader from '../../components/section-header-away';
import kosThumb from '../../assets/images/testimonials/kos.png';
import VideoModal from '../../components/modals/video-modal';
import { gsap } from 'gsap/dist/gsap';

//Next-link was being used instead of link but it gave a hydration error

export default function VideoTrailer() {
  //modal status
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.from('.subtleBounce', {
      scrollTrigger: '.subtleBounce',
      duration: 1.5,
      opacity: 0,
      x: -50,
      stagger: 0.3,
      ease: 'back',
    });
    gsap.to('.subtleBounce', {
      scrollTrigger: '.subtleBounce',
      duration: 1.5,
      opacity: 1,
      x: 0,
      stagger: 0.3,
      ease: 'back',
    });
  }, []);

  return (
    <Box id="trailer" as="section" sx={styles.video}>
      <Container>
        <SectionHeader
          isWhite={true}
          isDark={true}
          title="See What It's Like To Have Worked With Me"
          slogan="Hear it from the source"
        />
        <Box className="subtleBounce" sx={styles.videoBox}>
          <NextImage priority={true} src={kosThumb} alt="" />
          <div>
            <Button
              path="/"
              aria-label="Play Video Button"
              onClick={() => setIsOpen(true)}
              sx={styles.videoBtn}
            >
              <FaPlay />
            </Button>
            <VideoModal
              home={true}
              selector={'#content'}
              open={isOpen}
              onClose={() => setIsOpen(false)}
              url="https://youtu.be/FgbqUo6cMfo"
            />
          </div>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  video: {
    backgroundColor: 'secondary',
    pt: [160, null, 80, 80, 80, 80, 80],
    pb: [180, null, 150, 150, 150, 150, 150],
    textAlign: 'center',
    h3: {
      margin: 0,
      color: 'black',
      fontSize: [5, null, null, '21px', '36px', '32px', 8],
      letterSpacing: ['-0.5px', null, null, null, null, '-1.5px'],
      fontWeight: 'bold',
      lineHeight: [1.6, null, null, 1.25],
    },
    p: {
      fontSize: ['15px', null, null, '17px'],
      lineHeight: ['26px', null, null, 2],
      mt: ['10px', null, null, null, '25px'],
      mb: ['0px', null, null, null, '20px'],
    },
    br: {
      display: ['none', null, null, 'inherit'],
    },
  },
  videoBox: {
    pt: [20, 20, null, null, null, null, 0],
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '>img': {
      borderRadius: '10px',
      display: 'flex',
      width: ['100%', null, null, null, '60%', null, '70%'],
    },
  },
  link: {
    color: 'primary',
    fontSize: [1, null, 2],
    display: 'inline-block',
    verticalAlign: 'middle',
    fontWeight: 'bold',
    mt: ['15px', null, null, null, '0px'],
    mb: ['20px', null, null, '50px'],
    svg: {
      position: 'relative',
      top: '3px',
    },
  },
  videoBtn: {
    width: [44, null, 44, 66, 120],
    height: [44, null, 44, 66, 120],
    borderRadius: '50%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    transition: '500ms ease',
    svg: {
      fontSize: ['15px', null, '15px', null, '22px', '35px'],
      color: ['primary'],
    },
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'primary',
      svg: {
        color: '#fff',
      },
    },
  },
};
