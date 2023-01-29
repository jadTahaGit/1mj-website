import React, { useRef, useEffect, useState } from 'react';
import { Box, Container, Heading, Text, Button, Label, Input, Select, Textarea, } from 'theme-ui';
import SectionHeader from '../../components/section-header';
import emailjs from '@emailjs/browser';
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";
import CalendlyButton from '/components/calendly/calendly-button';

const ContactMe = () => {

  const ref = useRef();
    const [mount, setMount] = useState(false);
  
    useEffect(() => {
      ref.current = document.querySelector("#content");
      setMount(true);
    }, ["#content"]);

  const [submitted, setSubmitted] = useState(false);
  const [successfulSubmission, setSuccessfulSubmission] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  function handleSpinner() {
      setShowSpinner(prevValue => !prevValue);
    }

  function sendEmail(e) {

      e.preventDefault();

      handleSpinner();
  
      emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_6wElYBSsnz2hEGGNG17bV')
        .then((result) => {
            console.log(result.text);
            setSubmitted(true);
            setSuccessfulSubmission(true);
            handleSpinner();
        }, (error) => {
            console.log(error.text);
        });
    }

    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;

    const form = (submitted 
                  ? 
                    successfulSubmission 
                    ? 
                    <Container sx={styles.postSendContainer}>
                      <Heading as="h2" sx={styles.postSendText}>Your Message Has Been Sent</Heading>
                      <Text as="p" sx={styles.postSendText}>Thank you for contacting me. I will get back to you as soon as possible. Meanwhile, feel free to book a qualifying call with me to get the process started.</Text>
                      <Box sx={styles.button}>{mount ? 
                      <CalendlyButton content="Book Your Qualifying Call Now" selector="#content" />
                      : null}</Box>
                    </Container> 
                    : 
                    <Container sx={styles.postSendContainer}>
                      <Heading as="h2" sx={styles.postSendText}>Oops, something went wrong.</Heading>
                      <Text as="p" sx={styles.postSendText}>Sorry, but it was not possible to send your message. Please refresh the page and try again.</Text>
                    </Container>
                  : 
                    <Box as="form" onSubmit={sendEmail} action="#" sx={styles.forms}>
                      <Label htmlFor="email" sx={styles.label}>Your Email Address</Label>
                      <Input name="user_email" id="email" type='email' required mb={3} />
                      <Label htmlFor="name" type='text' required>Your Name</Label>
                      <Input name="user_name" id="name" mb={3} />
                      <Label htmlFor="reason">Reason For Contact</Label>
                      <Select name="subject" id="reason" mb={3}>
                        <option>I'm interested in hiring you</option>
                        <option>I have a question</option>
                        <option>I want to interview you</option>
                        <option>I want to book you to speak at an event</option>
                        <option>I want to make you an invitation</option>
                        <option>Other</option>
                      </Select>
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea name="message" id="message" type='text' required rows={5} mb={3} sx={styles.textArea}/>
                      <Button sx={styles.sendButton} type='submit' value="Send">Send Message</Button>
                    </Box>);


  return (
    <Box as="section" sx={styles.contact}>
      <Container>
      <SectionHeader slogan="What's up?" title="Send Me A Message" />
      {showSpinner ? <Container sx={styles.postSendContainer}><BounceLoader color="#DA1212" loading={showSpinner} cssOverride={{marginLeft: 'auto', marginRight: 'auto'}} size={50} /></Container> :
                    form}
      </Container>
    </Box>
  );
};

export default ContactMe;

const styles = {
  contact: {
    backgroundColor: 'whiteText',
    pt: '100px',
    pb: ['80px', null, null, null, '80px', null, '100px'],
    ml: ['5%', null, null, null, '10%', null, '15%'],
    mr: ['5%', null, null, null, '10%', null, '15%'], 
  },
  forms: {
    display: ['flex', null, null, 'block'],
    flexDirection: ['column', null, null, null],
    textAlign: ['center', null, null, 'left'],
    justifyContent: 'center',
    color: 'text',
    mt: -5,
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    select: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
  },
  postSendContainer: {
    display: 'flex',
    height: '50vh',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    pl: 'auto',
    pr: 'auto',
  },
  postSendText: {
    mt: '10px',
    pl: ['0px', null, '60px', '80px', '120px', '150px', '150px'],
    pr: ['0px', null, '60px', '80px', '120px', '150px', '150px'],
  },
  button: {
    mt: '5px',
    ml: 'auto',
    mr: 'auto',
  },
  textArea: {
    fontFamily: "'DM Sans', sans-serif", 
  },
  sendButton: {
    mt: '15px',
  }
};