/** @jsxImportSource theme-ui */
import { useEffect } from 'react';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCard from '../components/cards/feature-card';
import Performance from '../assets/why-me/why-me1.svg';
import Partnership from '../assets/why-me/why-me2.svg';
import Subscription from '../assets/why-me/why-me3.svg';
import Support from '../assets/why-me/why-me4.svg';
import { gsap } from "gsap/dist/gsap";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'I Practice What I Preach',
    title: 'I Practice What I Preach',
    text:
      'I’ve worked all my life to achieve my own success. No handouts, just perseverance and strategy. Life experience taught me what I know.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Skilled In Empathy',
    title: 'Skilled In Empathic Listening In Addition To Empathy',
    text:
      'I’m the best at helping people achieve their success because I excel at seeing the perspective of other people. Plus, I naturally engage in empathic listening.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'No Matter What Mentality',
    title: 'No Matter What Mentality',
    text:
      'My actual mindset. If I set a goal for myself, you have to kill me to stop me from achieving it. Even if a truck hits me, I’ll still do it.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'My Maleability',
    title: 'My Maleability',
    text:
      'I personalize my approach to each client. Everyone is different and has different needs, goals and ways of thinking. I adapt to you.',
  },
];

export default function WhyMe() {

  useEffect(() => {

    gsap.from('.fadeOwhyme', {
        scrollTrigger: '.fadeOwhyme',
        duration: 1.1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
    });
    gsap.to('.fadeOwhyme', {
      scrollTrigger: '.fadeOwhyme',
      duration: 1.1,
      opacity: 1,
      y: 0,
      stagger: 0.2,
    });

    }, []);

  return (
    <section sx={{ variant: 'section.whyMe' }}>
      <Container>
        <SectionHeader
          slogan="The Question In Your Mind"
          title="Why Me?"
          isWhite={true}
          isDark={true}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              className="fadeOwhyme"
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
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
};
