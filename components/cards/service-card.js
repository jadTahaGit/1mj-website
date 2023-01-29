import React from 'react';
import NextImage from '../next-image'
import { Box, Text, Heading } from 'theme-ui';

const ServiceCard = ({ image, text, heading, ...rest }) => {
  return (
    <Box {...rest} sx={styles.serviceCard}>
      <Box sx={styles.image}>
        <NextImage src={image} alt={heading} />
      </Box>
      <Box sx={styles.content}>
        <Heading as="h3">{heading}</Heading>
        <Text as="p">{text}</Text>
      </Box>
    </Box>
  );
};

export default ServiceCard;

const styles = {
  serviceCard: {
    display: 'flex',
    flexDirection: ['column', null, null, 'row'],
    textAlign: ['center', null, null, 'left'],
    mb: 5,
  },
  image: {
    flexShrink: 0,
  },
  content: {
    ml: ['0', null, null, '30px'],
    mt: ['20px', null, null, '0px'],
    h3: {
      color: '#EEEEEE',
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: 1,
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: 'whiteText',
      mt: '20px',
      mb: '20px',
    },
  },
  link: {
    color: '#3183FF',
    fontSize: '16px',
    fontWeight: 500,
    display: 'inline-block',
    img: {
      ml: '5px',
    },
  },
};
