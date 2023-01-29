/** @jsxImportSource theme-ui */
import React, { useRef, useEffect, useState } from 'react';
import { Box, Text } from 'theme-ui';
import CalendlyButton from '/components/calendly/calendly-button';

export default function AboutTextFeature({
  description,
  description2,
  description3,
  button,
  lightBG
}) {

  const ref = useRef();
    const [mount, setMount] = useState(false);
  
    useEffect(() => {
      ref.current = document.querySelector("#content");
      setMount(true);
    }, ["#content"]);

  return (
    <Box sx={styles.card}>
      {description && (
        <Text as="p" sx={lightBG ? styles.darkDescription : styles.description}>
          {description}
        </Text>
      )}
      {description2 && (
        <Text as="p" sx={lightBG ? styles.darkDescription : styles.description}>
          {description2}
        </Text>
      )}
      {description3 && (
        <Text as="p" sx={lightBG ? styles.darkDescription : styles.description}>
          {description3}
        </Text>
      )}
      {button && <Box sx={styles.mobileButtonWrapper}>
        {mount ? 
        <CalendlyButton content="Book Your Qualifying Call Now" selector="#content" />
        : null}
        </Box>
      }
    </Box>
  );
}

const styles = {
  mobileButtonWrapper: {
    mt: ['-35px', null, null, '0px'],
    mb: ['15px', null, null, '0px'],
    mx: ['auto', null, null, '0px'],
  },
  button: {
    textAlign: 'center',
    ml: ['auto', null, null, '0px', '0px'],
    mr:['auto', null, null, '0px', '0px'],
    mb: ['50px', null, null, null, '5px'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 0,
    a: {
      m: ['0 auto', null, null, 0],
    },
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: -1,
    subTitle: {
      fontSize: [0, null, 1],
      color: 'primary',
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: [2, 3],
      lineHeight: 1.5,
      letterSpacing: ['1.5px', null, '2px'],
    },
    title: {
      fontSize: ['24px', null, '28px', '30px', '36px', '42px', null, '48px'],
      color: 'heading_secondary',
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: '700',
      letterSpacing: '-.5px',
      mb: 5,
    },
  },
  description: {
    fontSize: ['15px', 1, null, null, null, '18px', null, 3],
    lineHeight: [1.85, null, null, 2, null, '2.0'],
    color: 'whiteText',
    mb: '30px',
  },
  darkDescription: {
    fontSize: ['15px', 1, null, null, null, '18px', null, 3],
    lineHeight: [1.85, null, null, 2, null, '2.0'],
    color: 'text',
    mb: '30px',
  },
};
