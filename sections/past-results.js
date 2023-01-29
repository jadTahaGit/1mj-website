/** @jsxImportSource theme-ui */
import { useEffect } from 'react';
import Image from 'next/image';
import { Container, Grid, Box, Text } from 'theme-ui';
import SectionHeader from '../components/section-header';
import YellowCheck from '../assets/icons/yellow-check.png';
import { gsap } from "gsap/dist/gsap";

export default function PastResults() {

  useEffect(() => {

    gsap.from('.fadeXpersonal', {
      scrollTrigger: '.fadeXpersonal',
      duration: 0.9,
      opacity: 0,
      x: -100,//used to be 100
      stagger: 0.1,
    });
    gsap.to('.fadeXpersonal', {
      scrollTrigger: '.fadeXpersonal',
      duration: 0.9,
      opacity: 1,
      x: 0,
      stagger: 0.1,
    });

    gsap.from('.fadeXbusiness', {
      scrollTrigger: '.fadeXbusiness',
      duration: 0.9,
      opacity: 0,
      x: -100,//used to be 100
      stagger: 0.1,
    });
    gsap.to('.fadeXbusiness', {
      scrollTrigger: '.fadeXbusiness',
      duration: 0.9,
      opacity: 1,
      x: 0,
      stagger: 0.1,
    });

}, []);

  return (
    <section sx={styles.results}>
      <Container>
        <SectionHeader
          slogan="What Can You Expect?"
          title="Results Of Past Clients"
        />
        <Grid sx={styles.grid} columns={2}>
        <Box>
        <Text as='h3' sx={styles.title}>Personal Growth</Text>
        <Text className="fadeXpersonal" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Made a personal transformation</Text>
        <Text className="fadeXpersonal" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Defeated procrastination</Text>
        <Text className="fadeXpersonal" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Reprioritized their life</Text>
        <Text className="fadeXpersonal" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />MASSIVELY improved their relationship with themselves</Text>
        <Text className="fadeXpersonal" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Became more emotionally intelligent</Text>
        <Text className="fadeXpersonal" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Learned to better deal with adversity and the unexpected</Text>
        <Text className="fadeXpersonal" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Developed a winner mindset</Text>
        <Text className="fadeXpersonal" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Achieved true self-belief</Text>
        <Text className="fadeXpersonal" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Learned to hold themselves accountable</Text>
        <Text className="fadeXpersonal" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Killed negative self-talk</Text>
        </Box>
        <Box>
        <Text as='h3' sx={styles.title}>Business Growth</Text>
        <Text className="fadeXbusiness" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Grew their business and even doubled their monthly revenue</Text>
        <Text className="fadeXbusiness" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Figured out how to work less hours in their thriving business</Text>
        <Text className="fadeXbusiness" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Learned to hold themselves accountable to business goals</Text>
        <Text className="fadeXbusiness" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Got over impostor syndrome</Text>
        <Text className="fadeXbusiness" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Developed better systems for time management</Text>
        <Text className="fadeXbusiness" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Created a better work-life balance</Text>
        <Text className="fadeXbusiness" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Became more confident in their day-to-day operations</Text>
        <Text className="fadeXbusiness" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Learned how to successfully delegate</Text>
        <Text className="fadeXbusiness" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Learned how to deal with common business owner stressors</Text>
        <Text className="fadeXbusiness" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Became better leaders</Text>
        </Box>
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  results: {
    backgroundColor: 'background',
    pt: [8, null, 9, null, null, 10, null, '150px'],
    pb: [8, null, 9, null, null, 10, null, '170px'],
  },
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    display: 'flex',
    alignItems: 'center',
    ml: ['auto', null, null, '0px'],
    mr: ['auto', null, null, '0px'],
    pb: ['19px', '19px', '19px', '19px'],
    img: {
      mr: '10px',
    },
  },
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
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
  title: {
    fontWeight: 'bold',
    pb: ['35px', '35px', '35px', '35px'],
    //textAlign: 'center',
  }
};
