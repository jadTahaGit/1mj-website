import React from 'react';
import { Box, Text, Heading } from 'theme-ui';


const TestimonialsCard = ({ text, name, username }) => {

  return (
    <Box sx={styles.testimonialsCard}>
      <Text as="p"><q>{text}</q></Text>
      <Box sx={styles.testimonialsInfo}>
        <Box sx={styles.testimonialsContent}>
          <Heading as="h3">{name}</Heading>
          <Text as="p">{username}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialsCard;

const styles = {
  testimonialsCard: {
    cursor: 'grab',
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    mb: '20px',
    px: ['20px', null, null, null, null, '25px', '35px'],
    py: ['20px', null, null, null, null, '20px', '25px'],
    pb: ['25px', null, null, null, null, '25px', '35px'],
    ':active': {
      cursor: 'grabbing',
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
    },
  },
  testimonialsInfo: {
    display: 'flex',
    alignItems: 'center',
    mt: '20px',
  },
  testimonialsImage: {
    img: {
      display: 'block',
      mr: '15px',
    },
  },
  testimonialsContent: {
    h3: {
      m: 0,
      color: 'text',
      fontSize: '17px',
      fontWeight: 500,
      lineHeight: 1,
    },
    p: {
      m: 0,
      lineHeight: 1,
      color: '#DA1212',
      fontSize: '14px',
      fontWeight: 500,
      mt: '10px',
    },
  },
};
