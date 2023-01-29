import React, { useEffect } from 'react';
/** @jsxImportSource theme-ui */
import { Container } from 'theme-ui';
import CaseStudyDescription from '../../components/case-studies/case-study-description';
import clientData from '../../components/case-studies/written-case-study.data';
import CaseStudyCard from '../../components/cards/case-study-card';
import { gsap } from "gsap/dist/gsap";


export default function WrittenCaseStudies() {

  useEffect(() => {

    gsap.from('.graphicBounce', {
        scrollTrigger: '.graphicBounce',
        duration: 1.5,
        opacity: 0,
        y: 100,
        stagger: 0.3,
        ease: "back"
    });
    gsap.to('.graphicBounce', {
      scrollTrigger: '.graphicBounce',
      duration: 1.5,
      opacity: 1,
      y: 0,
      stagger: 0.3,
      ease: "back"
  });

    }, []);

  return (

<>{clientData.map(({ client, occupation, goal, how, testimonial }, i) => (

    <section id="written" sx={styles.services} key={i}>
      <Container sx={styles.containerBox}>
        <CaseStudyCard className="graphicBounce" client={client} occupation={occupation} goal={goal} />
      </Container>
      <CaseStudyDescription
              how={how}
              testimonial={testimonial}
          />
    </section>
    
    ))}
      </>
  );
}

const styles = {
  services: {
    pb: [0, null, null, 3, null, 9],
    position: 'relative',
    mb: [ '60px', '65px', '65px', '65px', 0],
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [7, null, null, null, null, 7],
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 6, 6],
    ml: ['auto', null, null, 0],
    mb: [ '35px', '35px', '35px', '35px', 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, 550, 600],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s',
  },
  //textFeature: {
    //pr: ['0px', '50px', '70px', '0px', '0px', '0px', '0px', '0px'],
    //pl: ['0px', '50px', '70px', '0px', '0px', '0px', '0px', '0px'],
  //}
};
