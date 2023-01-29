/** @jsxImportSource theme-ui */
import { Container, Box, Grid, Text } from 'theme-ui';
import { useEffect } from 'react';
import AboutTextFeature from '../../components/about-text-feature';
import NextImage from '../../components/next-image';
import Image from 'next/image';
import Drawing from '../../assets/drawings/pricing-three.svg';
import SectionHeader from '../../components/section-header-packages';
import YellowCheck from '../../assets/icons/yellow-check.png';
import { gsap } from "gsap/dist/gsap";

const data = {
  description:
    'In this plan, I will basically become (and act like) a stakeholder in your life. I will take on your problems as if they were my own. This is why we\'ll be in constant communication. On a daily basis.',
  description2: 'I will literally take time off during my week to reflect on YOUR problems or goals. I solve all my issues, so making your issues mine will be unbelievably valuable to you.',
  description3: 'You will be one of the top 3 clients I have (yes, there are only 3 active clients on this plan at any time) and so, you\'ll be given all the attention possible. I will also be available for emergencies.'
};

export default function PricingThree() {

  useEffect(() => {

    gsap.from('.fadeXpackage3', {
        scrollTrigger: '.fadeXpackage3',
        duration: 1.5,
        opacity: 0,
        x: 100,
        stagger: 0.2,
        ease: "back",
    });
    gsap.to('.fadeXpackage3', {
      scrollTrigger: '.fadeXpackage3',
      duration: 1.5,
      opacity: 1,
      x: 0,
      stagger: 0.2,
      ease: "back",
    });

    gsap.from('.fadeXincludes3a', {
      scrollTrigger: '.fadeXincludes3a',
      duration: 0.9,
      opacity: 0,
      x: 100,
      stagger: 0.1,
    });
    gsap.to('.fadeXincludes3a', {
      scrollTrigger: '.fadeXincludes3a',
      duration: 0.9,
      opacity: 1,
      x: 0,
      stagger: 0.1,
    });

    gsap.from('.fadeXincludes3b', {
      scrollTrigger: '.fadeXincludes3b',
      duration: 0.9,
      opacity: 0,
      x: 100,
      stagger: 0.1,
    });
    gsap.to('.fadeXincludes3b', {
      scrollTrigger: '.fadeXincludes3b',
      duration: 0.9,
      opacity: 1,
      x: 0,
      stagger: 0.1,
    });
    
  }, []);

  return (
    <section sx={styles.about}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <AboutTextFeature
            description={data.description}
            description2={data.description2}
            description3={data.description3}
          />
        </Box>
        <Box className="fadeXpackage3"  sx={styles.thumbnail}>
          <NextImage src={Drawing} alt="Thumbnail" />
        </Box>
      </Container>
      <SectionHeader isDark={true} slogan="What Premium Priority Client Includes" />
      <Container sx={styles.containerBox2}>
      <Grid sx={styles.grid} columns={2}>
        <Box>
          <Text className="fadeXincludes3a" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />A Weekly 45-minute Call</Text>
          <Text className="fadeXincludes3a" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Daily Performance Tracking</Text>
          <Text className="fadeXincludes3a" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Regular Performance Feedback</Text>
          <Text className="fadeXincludes3a" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />1 extra hour of my week dedicated to reflecting on your situation</Text>
          <Text className="fadeXincludes3a" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Daily Check-in Calls (Super Reflection Mon-Fri)</Text>
          <Text className="fadeXincludes3a" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Unlimited Texts (Including Voice Messages) - Get an objective perspective on ANYTHING during the week - message me a question at any time and I'll reply ASAP</Text>
          <Text className="fadeXincludes3a" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Emergency Calls: You can contact me to have a call anytime from 10AM to 7PM (my time zone), I will answer or get back to you ASAP (In case I'm in a call). Only 1 emergency call per month is allowed</Text>
          <Text className="fadeXincludes3a" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Get a book recommendation per week according to your needs</Text>
          <Text className="fadeXincludes3a" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Get a problem-solving thinker for YOUR problems - I will make your problems into my own and I will obsess over how to fix them. (I always fix my problems/challenges or at least mitigate them)</Text>
        </Box>
        <Box>
          <Text className="fadeXincludes3b" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Ensure your plan is put into action - I will be your plan in human form, reminding you of deadlines and asking if what you planned still makes sense</Text>
          <Text className="fadeXincludes3b" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Get more flexibility and availability - Get access to more hours of availability for you to book a call (S Tier Calendly Link)</Text>
          <Text className="fadeXincludes3b" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Get undivided attention - I will be extremely focused on you because you are one of ONLY 3 allowed priority clients</Text>
          <Text className="fadeXincludes3b" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Get inside my mind - I will share with you personal insights I've learned from my personal journaling</Text>
          <Text className="fadeXincludes3b" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Enterprise Mode - We'll do a 2h session at the end of each quarter and a 3h session at the end of the year</Text>
          <Text className="fadeXincludes3b" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />No details missed: I will record our calls and review them after. You'll receive a report on the call</Text>
          <Text className="fadeXincludes3b" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Always know where you're standing - I will write Monthly Progress Reports regarding your performance towards your goals</Text>
          <Text className="fadeXincludes3b" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />PLUS: Everything that is included in the previous packages.</Text>
        </Box>
        </Grid>
        </Container>
    </section>
  );
}

const styles = {
  about: {
    backgroundColor: 'secondary',
    pt: ['80px', null, null, null, '50px', null, '100px'],
    pb: [7, null, 7, null, null, 7, null, '120px'],
    overflow: 'hidden',
    '.padme': {
      pt: ['25px', null, null, null, '10px', '10px', '10px'],
    }
  },
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pt: [0, 6, 0, null, 7],
    pb: [0, 0, 0, null, 8],
  },
  containerBox2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pt: [0, 4, 0, null, 2],
    pb: [0, 0, 0, null, 7],
  },
  contentBox: {
    order: [2, null, null, 0],
    fontSize: '20px',
    color: 'whiteText',
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, '60%', null, 485],
    pb: ['30px', '40px', null, 0],
    mt: ['auto', null, null, 0],
    mb: ['auto', null, null, 0],
    ml: ['auto', null, null, 0],
    mr: ['auto', null, '50px', null, '50px', 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    pb: [7, null, null, 0],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
      maxWidth: [380, null, null, null, 500],
    },
  },
  listItem: {
    color: 'whiteText',
    fontWeight: 500,
    fontSize: 16,
    //lineHeight: 2.81,
    display: 'flex',
    alignItems: 'center',
    ml: ['auto', null, null, '0px'],
    mr: ['auto', null, null, '0px'],
    pb: ['19px', '19px', '19px', '19px'],
    img: {
      mr: '20px',
      minHeight: '20px',
      minWidth: '20px',
    },
  },
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '0px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};