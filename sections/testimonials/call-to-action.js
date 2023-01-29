import React, { useRef, useEffect, useState } from 'react';
import { Container, Box, Button, Text, Heading } from 'theme-ui';
import CalendlyButton from '/components/calendly/calendly-button';

const CallToAction = () => {

  const ref = useRef();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#content");
    setMount(true);
  }, ["#content"]);
  return (
    <Box as="section" sx={styles.video}>
      <Container sx={styles.containerCTA}>
      <Box sx={{ variant: 'aboutSectionHeader' }}>
        <Heading
        as="h2"
        sx={styles.title}
        >
          Want to be the next success story?
        </Heading>
        <Text
        as="p"
        sx={styles.subTitle}
        >
          See if you qualify to be my client
        </Text>
        </Box>
        <Box sx={styles.button}>
        {mount ? 
          <CalendlyButton content="Book Your Qualifying Call Now" selector="#content" />
          : null}
        </Box>
      </Container>
    </Box>
  );
};

export default CallToAction;

const styles = {
  containerCTA: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    py: 'auto',
  },
  button: {
    mt: '-30px',
    ml: 'auto',
    mr: 'auto',
  },
  video: {
    backgroundColor: 'accent',
    pt: [80, null, null, null, null, null, 110],
    pb: [80, null, null, null, null, null, 110],
    textAlign: 'center',
  },
  title: {
    fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
      color: 'heading',
      lineHeight: [1.3, null, null, 1.25],
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: '-.5px',
      mb: 2,
  },
  subTitle: {
    fontSize: [0, '13px', null, '14px'],
    color: 'secondary',
    textAlign: 'center',
    letterSpacing: ['1.5px', null, '2px'],
    textTransform: 'uppercase',
    fontWeight: '700',
    lineHeight: 1.5,
  },

};
