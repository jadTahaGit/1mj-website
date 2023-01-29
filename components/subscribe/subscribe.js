/** @jsxImportSource theme-ui */
import { useState, useCallback } from 'react';
import { Box, Container, Button, Flex, Text, Label, Link } from 'theme-ui';
import SubscribeHeading from './subscribe-heading';
import Input from './input'
//import tiktok from 'assets/logos/tiktok.svg';
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';


const Subscribe = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted.');
  };


  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <SubscribeHeading
            sx={styles.heading}
            title="Want Books That Will Make You Better?"
            description="Sign up for my newsletter. Every month I will send you a review of the latest book that I've read, ensuring you're always on top of what's great out there."
          />
          <Box as="form" sx={styles.subscribe} onSubmit={handleSubmit}>
            <Flex sx={styles.inputGroup}>
              <Label htmlFor="email" sx={styles.srOnly}>
                Email
              </Label>
              <Input
                id="email"
                type="email"
                className="email-input"
                placeholder="Enter your email address here"
              />
              <Button sx={styles.subscribe.button} variant="primary">Send Me Book Recommendations</Button>
            </Flex>
            {/*<Box sx={styles.checkbox}>
              <Label htmlFor="no_spam" className={checked ? 'checked' : ''}>
                <Checkbox
                  id="no_spam"
                  onChange={handleCheckbox}
                  defaultChecked={checked}
                />
                Don’t provide any promotional message.
              </Label>*/}
              {/* <Checkbox
                id="no_spam"
                checked={checked}
                onChange={handleCheckbox}
                label="Don’t provide any promotional message."
              /> 
            </Box>*/}
          </Box>
        </Box>
        <Box sx={styles.socialBox}>
        <Text sx={styles.text}>Follow me on social media to be influenced by me for free:</Text>
        <Box sx={styles.socialIcons}>
        <Link href='https://www.youtube.com/channel/UCqhrCpNuc_z1yYengX4axbQ' target="_blank" rel="noopener noreferrer">
          <FaYoutube sx={styles.singleIcon} />
        </Link>
        <Link href='https://www.linkedin.com/in/kaidezen/' target="_blank" rel="noopener noreferrer">
          <FaLinkedin sx={styles.singleIcon} />
        </Link>
        <Link href='https://twitter.com/myupself' target="_blank" rel="noopener noreferrer">
          <FaTwitter sx={styles.singleIcon} />
        </Link>
        <Link href='https://www.instagram.com/myupself/' target="_blank" rel="noopener noreferrer">
          <FaInstagram sx={styles.singleIcon} />
        </Link>
        </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Subscribe;

const styles = {
  section: {
    backgroundColor: 'secondary',
    pt: ['40px', null, null, null, null, null],
    pb: ['15px', null, null, null, null, '10px'],
  },
  contentWrapper: {
    pt: [null, null, null, '40px', '50px', '10px'],
    pb: [null, null, null, '50px', '50px', '30px'],
    pr: [null, null, null, '110px', '50px', '0px'],
    pl: [null, null, null, '110px', '50px', '0px'],
    gap: '50px',
    display: ['block', null, 'grid', 'block', 'grid'],
    alignItems: 'center',
    gridTemplateColumns: ['repeat(2, 1fr)'],
  },
  heading: {
    textAlign: ['center', null, 'left', 'center', 'left'],
    mb: ['30px', null, null, null, 0],
    ml: 0,
    h2: {
      color: 'whiteText',
      fontSize: [4, null, null, null, null, 6, 7],
    },
    p: {
      color: 'whiteText',
      lineHeight: 1.87,
      marginTop: 1,
      ml: ['auto', null, null, null, 0],
      mr: ['auto', null, null, null, 0],
      maxWidth: 420,
    },
  },
  subscribe: {
    '.email-input': {
      mr: [0, null, null, 0],
      minHeight: ['50px', '50px', '60px'],
      '::placeholder': { 
        color: '#BFBFC6',
        opacity: 1, /* Firefox */
      },
    },
    button: {
      borderRadius: 5,
      minHeight: ['30px', '30px', '40px'],
      fontSize: ['12px', '12px', '14px'],
      mt: ['15px', null, null, 3],
      ml: [ null, null, null, null, 0],
      mr: [ null, null, null, null, 0],
      mb: ['30px', null, null, 0],
    },
  },
  inputGroup: {
    flexDirection: ['column', null, null, 'column'],
    pl: ['20px', null, null, null, 0],
    pr: ['20px', null, null, null, 0],
  },
  srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important',
    },
  text: {
    textAlign: 'center',
    color: 'whiteText',
    display: 'inline-block',
  },
  socialBox: {
    textAlign: 'center',
    pr: [null, null, null, '110px', '50px', '0px'],
    pl: [null, null, null, '110px', '50px', '0px'],
  },
  socialIcons: {
    margin: '0px 30px',
    display: 'inline-block',
    pt: ['15px', '15px', '10px', '10px', '0px', '0px'],
  },
  singleIcon: {
    margin: '0px 10px',
    color: 'whiteText',
    '&.hover': {
      cursor: 'pointer',
    }
  }
};
