/** @jsxImportSource theme-ui */
import { Container, Box, Grid, Text } from 'theme-ui';
import { useEffect } from 'react';
import AboutTextFeature from '../../components/about-text-feature';
import NextImage from '../../components/next-image';
import Image from 'next/image';
import SectionHeaderAway from '../../components/section-header-away';
import Drawing from '../../assets/drawings/pricing-one.svg';
import SectionHeader from '../../components/section-header-packages';
import YellowCheck from '../../assets/icons/yellow-check.png';
import { gsap } from "gsap/dist/gsap";

const data = {
  description:
    'This plan is for people who are just looking for a quick call to help them stay on track. See this as the right plan for those who are thinking "I really just need someone to be there to keep me in the right direction".',
  description2: 'You can even see this as a way for you to make SURE you will take the time to reflect and plan every week. Since it is a commitment with someone else, you\'re more likely to follow through.',
  description3: 'I will also be able to offer you an objective perspective on what you\'re planning (as in, I will tell you if I think it makes sense), plus I will hold you accountable to it.'
};

export default function PricingOne() {

  useEffect(() => {

    gsap.from('.fadeXpackage1', {
        scrollTrigger: '.fadeXpackage1',
        duration: 1.5,
        opacity: 0,
        x: 100,
        stagger: 0.2,
        ease: "back",
    });
    gsap.to('.fadeXpackage1', {
      scrollTrigger: '.fadeXpackage1',
      duration: 1.5,
      opacity: 1,
      x: 0,
      stagger: 0.2,
      ease: "back",
    });

    gsap.from('.fadeXincludes1a', {
      scrollTrigger: '.fadeXincludes1a',
      duration: 0.9,
      opacity: 0,
      x: 100,
      stagger: 0.1,
    });
    gsap.to('.fadeXincludes1a', {
      scrollTrigger: '.fadeXincludes1a',
      duration: 0.9,
      opacity: 1,
      x: 0,
      stagger: 0.1,
    });

    gsap.from('.fadeXincludes1b', {
      scrollTrigger: '.fadeXincludes1b',
      duration: 0.9,
      opacity: 0,
      x: 100,
      stagger: 0.1,
    });
    gsap.to('.fadeXincludes1b', {
      scrollTrigger: '.fadeXincludes1b',
      duration: 0.9,
      opacity: 1,
      x: 0,
      stagger: 0.1,
    });
    
  }, []);

  return (
    <section sx={styles.about}>
    <div className='padme'></div>
    <SectionHeaderAway slogan="Choose according to your needs" title="What are your options?" isWhite={true} isDark={true} />
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <AboutTextFeature
            description={data.description}
            description2={data.description2}
            description3={data.description3}
          />
        </Box>
        <Box className="fadeXpackage1" sx={styles.thumbnail}>
          <NextImage src={Drawing} alt="Thumbnail" />
        </Box>
      </Container>
      <SectionHeader isDark={true} slogan="What Accountability & Planning Includes" />
      <Container sx={styles.containerBox2}>
        <Grid sx={styles.grid} columns={2}>
          <Box>
            <Text className="fadeXincludes1a" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />A Weekly 30-minute Call</Text>
            <Text className="fadeXincludes1a" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Daily Performance Tracking</Text>
            <Text className="fadeXincludes1a" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Have someone on your side who will hold you accountable and who will always be able to offer you an objective perspective while also asking you the right questions to guide you in the right direction.</Text>
            <Text className="fadeXincludes1a" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Get a coach who is real. A coach who doesn't act like the typical coach who is always unrealistically optimistic and always tries too hard to show you how positive they are. Get a coach who practices what he preaches.</Text>
          </Box>
          <Box>
            <Text className="fadeXincludes1b" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Regular Performance Feedback</Text>
            <Text className="fadeXincludes1b" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Assistance with Defining Goals</Text>
            <Text className="fadeXincludes1b" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Increase how fast and easily you reach your goals while decreasing your effort and sacrifice by having my support on each step along the way. A coach with high standards will push you to be the best you that you can be. I'm that coach.</Text>
            <Text className="fadeXincludes1b" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Get input on your current habits and suggestions for new proven-to-work habits according to your goals</Text>
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
    pt: [0, null, null, null, null, null, 0],
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
