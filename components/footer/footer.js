/** @jsxImportSource theme-ui */
import { Box, Text, Container } from 'theme-ui';
import { Link } from '../link'
import Logo from '../logo';

export default function Footer({}) {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container sx={styles.container}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: ['column', null, null, null, null, 'row'],
          }}
        >
        <Logo />
          <Text 
            as="p"
            sx={{
              color: '#ffffff',
              opacity: '0.7',
              fontSize: '14px',
              mt: ['10px', null, null, null, null, '0'],
            }}
          >
            Kaidezen © {new Date().getFullYear()} All rights reserved.
          </Text>
        </Box>
        <Box sx={styles.linksWrap}>
          <Link sx={styles.individualLink} i='1' path="/" isNotScrollable={true}>Home</Link>
          <Link sx={styles.individualLink} i='2' path="testimonials" isNotScrollable={true}>Testimonials</Link>
          <Link sx={styles.individualLink} i='3' path="pricing" isNotScrollable={true}>Pricing</Link>
          <Link sx={styles.individualLink} i='4' path="about" isNotScrollable={true}>About Me</Link>
          <Link sx={styles.individualLink} i='5' path="contact" isNotScrollable={true}>Contact Me</Link>
        </Box>  
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    pl: ['40px', null, null, null, null, '30px', '40px'],
    pr: ['40px', null, null, null, null, '30px', '40px'],
    pb: ['40px', null, null, null, null, '30px', '40px'],
    pt: ['10px', null, null, null, null, '10px', '20px'],
    backgroundColor: 'secondary',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
  container: {
    display: 'flex',
    flexDirection: ['column', null, null, null, null, 'row'],
    justifyContent: ['center', null, null, null, null, 'space-between'],
    alignItems: 'center',
    position: 'relative',
    flexWrap: 'wrap',
    pt: ['15px', null, null, null, null, '15px'],
  },
  linksWrap: {
    textDecoration: 'none',
    mt: ['15px', null, null, null, null, '0'],
    display: 'flex',
    flexWrap: 'wrap',
    a: {
      fontSize: ['13px', null, null, null, '16px'],
      color: '#ffffff',
      transition: 'all 500ms ease',
      '&:hover': { opacity: 0.7 },
    },
    'a+a': { ml: ['15px', null, null, null, '35px'] },
  },
  individualLink: {
    textDecoration: 'none',
    '&:hover': { 
      cursor: 'pointer',
    },
  },
};
