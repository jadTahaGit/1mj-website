/** @jsxImportSource theme-ui */
import { Container, Box, Grid, Text } from 'theme-ui';
import { useEffect } from 'react';
import AboutTextFeature from '../../components/about-text-feature';
import NextImage from '../../components/next-image';
import Image from 'next/image';
import Drawing from '../../assets/drawings/pricing-two.svg';
import YellowCheck from '../../assets/icons/yellow-check.png';
import SectionHeader from '../../components/section-header-away';
import { gsap } from "gsap/dist/gsap";

const data = {
  description:
    'Taking the time to reflect on a consistent basis is probably the most underrated habit of a successful person. Warren Buffet does it every week, for example.',
  description2: 'However, there is an even stronger power when it comes to reflecting with someone else. (Provided, of course, that someone else is capable of having a valuable input)',
  description3: 'This is my most popular plan. Most clients benefit a lot from this. I will guide you objectively toward your goals while helping you to reflect about everything along the way.'
};

export default function PricingTwo() {

  useEffect(() => {

    gsap.from('.fadeXpackage2', {
        scrollTrigger: '.fadeXpackage2',
        duration: 1.5,
        opacity: 0,
        x: -100,
        stagger: 0.2,
        ease: "back",
    });
    gsap.to('.fadeXpackage2', {
      scrollTrigger: '.fadeXpackage2',
      duration: 1.5,
      opacity: 1,
      x: 0,
      stagger: 0.2,
      ease: "back",
     });


    gsap.from('.fadeXincludes2a', {
      scrollTrigger: '.fadeXincludes2a',
      duration: 0.9,
      opacity: 0,
      x: 100,
      stagger: 0.1,
    });
    gsap.to('.fadeXincludes2a', {
      scrollTrigger: '.fadeXincludes2a',
      duration: 0.9,
      opacity: 1,
      x: 0,
      stagger: 0.1,
    });

    gsap.from('.fadeXincludes2b', {
      scrollTrigger: '.fadeXincludes2b',
      duration: 0.9,
      opacity: 0,
      x: 100,
      stagger: 0.1,
    });
    gsap.to('.fadeXincludes2b', {
      scrollTrigger: '.fadeXincludes2b',
      duration: 0.9,
      opacity: 1,
      x: 0,
      stagger: 0.1,
    });

  }, []);

  return (
    <section sx={styles.about}>
      <Container sx={styles.containerBox}>
        <Box className="fadeXpackage2"  sx={styles.thumbnail}>
          <NextImage src={Drawing} alt="Thumbnail" />
        </Box>
        <Box sx={styles.contentBox}>
          <AboutTextFeature
            description={data.description}
            description2={data.description2}
            description3={data.description3}
            lightBG={true}
          />
        </Box>
      </Container>
      <SectionHeader slogan="What Weekly Guidance & Reflection Includes" />
      <Container sx={styles.containerBox2}>
      <Grid sx={styles.grid} columns={2}>
        <Box>
          <Text className="fadeXincludes2a" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />A Weekly 45-minute Call</Text>
          <Text className="fadeXincludes2a" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Daily Performance Tracking</Text>
          <Text className="fadeXincludes2a" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Regular Performance Feedback</Text>
          <Text className="fadeXincludes2a" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Get a coach that will make you elevate your standards and push you to your limits. No basking in your ego. Only goal seeking.</Text>
          <Text className="fadeXincludes2a" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Ensure mindfully epic productive planning: You'll get planning sessions where I will see you plan AND ask you to justify what you are planning.</Text>
          <Text className="fadeXincludes2a" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Get help on the process of delegating your work so you have more time to achieve your goals.</Text>
        </Box>
        <Box>
          <Text className="fadeXincludes2b" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Get an objective view of your thoughts by sharing your journals for them to be analyzed and for me to give you my perspective/feedback (Optional)</Text>
          <Text className="fadeXincludes2b" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Psychedelics Therapy - I can help you learn more about your subconscious (The full process is not included)</Text>
          <Text className="fadeXincludes2b" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Get help making tough decisions - Use my Decision-Making Matrix + a dedicated session to contemplate about the decision by being asked the right questions</Text>
          <Text className="fadeXincludes2b" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />Add a great influence to your life - I will send you a report on the last book I read every time I finish reading a book.</Text>
          <Text className="fadeXincludes2b" sx={styles.listItem} as="p"><Image src={YellowCheck} alt="check icon" />PLUS: Everything that is included in the previous package.</Text>
        </Box>
        </Grid>
        </Container>
    </section>
  );
}

const styles = {
  about: {
    backgroundColor: 'whiteText',
    pt: ['80px', null, null, null, '50px', null, '100px'],
    pb: [7, null, 7, null, null, 7, null, '120px'],
    overflow: 'hidden',
  },
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pt: [0, 3, 0, null, 7],
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
    fontSize: '20px',
    color: 'whiteText',
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, '60%', null, 485],
    pb: ['30px', '40px', null, 0],
    mt: ['auto', null, null, 0],
    mb: ['auto', null, null, 0],
    mr: ['auto', null, null, 0],
    ml: ['auto', null, '50px', null, '50px', 0],
    '.description': {
      pl: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    //order: [2, null, null, 0],
    position: 'relative',
    ml: 'auto',
    mr: ['auto', null, null, null, 7],
    pb: [6, 8, null, null, 0],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
      maxWidth: [380, null, null, null, 500],
    },
  },
  listItem: {
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
