/** @jsxImportSource theme-ui */
import { Container, Box, Text, Grid } from 'theme-ui';
import React, { useState, useEffect } from 'react';
import NextImage from '../../components/next-image';
import SectionHeader from '../../components/section-header';
import trustpilotData from '../../components/proof-of-origin/proof-trustpilot.data';
import linkedinData from '../../components/proof-of-origin/proof-linkedin.data';
import fiverrData from '../../components/proof-of-origin/proof-fiverr.data';
import RandomText from '../../components/random-text';
import { ExternalLink } from '../../components/external-link';
import { useMediaQuery } from 'react-responsive';

export default function ProofOfOrigin() {

  const isMobile = useMediaQuery({ query: `(max-width: 720px)` });

  const [mobileMode, setMobileMode] = useState(true);

    useEffect(() => {

        setMobileMode(isMobile);
    
        }, []);

  return (
    <section sx={styles.proof}>
    <div className='padme'></div>
    <SectionHeader slogan="Proof Of Origin" title="The Origin Of The Testimonials" />
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <Box sx={styles.padding}>
            <Text as="h3" sx={styles.title}>Trustpilot Reviews</Text><ExternalLink path='https://www.trustpilot.com/review/myupself.com' sx={styles.link}>(Click Here to vist the TrustPilot page)</ExternalLink>
          </Box>
          <Grid sx={styles.grid} columns={mobileMode ? 1 : 2}>
          {trustpilotData.map((item, i) => (
            <NextImage src={item.image} alt="Trustpilot Reviews" />
          ))}
          </Grid>
        </Box>

        <Box sx={styles.contentBox}>
          <Box sx={styles.padding2}>
            <Text as="h3" sx={styles.title}>LinkedIn Reviews</Text><ExternalLink path='https://www.linkedin.com/services/page/769279313049218a19/' sx={styles.link}>(Click Here to vist the LinkedIn Reviews page)</ExternalLink>
          </Box>
          <Grid sx={styles.grid} columns={mobileMode ? 1 : 2}>
          {linkedinData.map((item, i) => (
            <NextImage src={item.image} alt="LinkedIn Reviews" />
          ))}
          </Grid>
        </Box>

        <Box sx={styles.contentBox}>
          <Box sx={styles.padding2}>
            <Text as="h3" sx={styles.title}>Fiverr Reviews</Text><ExternalLink path='https://www.fiverr.com/pedro10/be-your-life-and-accountability-coach' sx={styles.link}>(Click Here to vist the Fiverr Reviews page)</ExternalLink>
          </Box>
          <Grid sx={styles.grid} columns={mobileMode ? 1 : 2}>
          {fiverrData.map((item, i) => (
            <NextImage src={item.image} alt="Fiverr Reviews" />
          ))}
          </Grid>
        </Box>
        <Box sx={styles.bottomBox}>
        <RandomText bold={true} description="Disclaimer: Some names may have been altered in the reviews by request. Some people wished to remain annonymous and I respected their wishes. Some testimonials might also have been corrected grammatically or shortened for conciseness. Also, any mentions to the name 'Pedro' refer to me, Dez. That is my birth name and also my nickname on Fiverr." />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  proof: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: [8, null, 9, null, null, 10, null, '120px'],
    overflow: 'hidden',
    '.padme': {
      pt: ['25px', null, null, null, '10px', '10px', '10px'],
    }
  },
  containerBox: {
    //display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 3],
  },
  title: {
    display: 'inline',
  },
  link: {
    ml: '15px',
    fontSize: '15px',
    textDecoration: 'underline',
    fontStyle: 'italic',
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
  bottomBox: {
    mt: '100px',
    mb: '-50px',
  },
  padding: {
    pb: '25px',
    display: 'block',
  },
  padding2: {
    pt: '120px',
    pb: '25px',
    display: 'block',
  }
};
