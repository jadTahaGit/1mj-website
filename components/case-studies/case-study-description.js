/** @jsxImportSource theme-ui */
import { Box, Container, Text } from 'theme-ui';

export default function CaseStudyInfo({
  how,
  testimonial
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.wrapper}>
      {how && (
        <Container sx={styles.container}>
        <Text as="h4" className="designation" sx={styles.designation}>
          How It Went:
        </Text>
        <Text as="p" className="designation" sx={styles.content}>
          {how}
        </Text>
        </Container>
      )}

      {testimonial && (
        <Container sx={styles.container}>
        <Text as="h4" className="designation" sx={styles.designation}>
          Written Testimonial:
        </Text>
        <Text as="p" className="designation" sx={styles.content}>
          {testimonial}
        </Text>
        </Container>
      )}
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 0,
    a: {
      m: ['0 auto', null, null, 0],
    },
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: -1,
  },
  designation: {
    display: 'inline-block',
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    fontWeight: 900,
    lineHeight: [1.85, null, null, 2, null, '2.2'],
    color: 'text_secondary',
    mb: '0px',
    pr: [3, 3, 3, 3, 3, 3],
  },
  content: {
    display: 'inline-block',
    pb: [3, 3, 3, 3, 3, 3],
  }
};
