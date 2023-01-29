/** @jsxImportSource theme-ui */
import { Box, Container, Text } from 'theme-ui';

export default function CaseStudyInfo({
  client,
  occupation,
  successGoal,
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.wrapper}>

      {client && (
        <Container sx={styles.container}>
        <Text as="h4" className="designation" sx={styles.designation}>
          Client:
        </Text>
        <Text as="p" className="designation" sx={styles.content}>
          {client}
        </Text>
        </Container>
      )}

      {occupation && (
        <Container sx={styles.container}>
        <Text as="h4" className="designation" sx={styles.designation}>
          Occupation:
        </Text>
        <Text as="p" className="designation" sx={styles.content}>
          {occupation}
        </Text>
        </Container>
      )}

      {successGoal && (
        <Container sx={styles.container}>
        <Text as="h4" className="designation" sx={styles.successGoal}>
          Success Goal:
        </Text>
        <Text as="p" className="designation">
          {successGoal}
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
  },
  successGoal: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    fontWeight: 900,
    lineHeight: [1.85, null, null, 2, null, '2.2'],
    color: 'text_secondary',
  },
  container: {
    pt: [2, 2, 2, 2, 2, 2],
    pb: [2, 2, 2, 2, 2, 2],
  },
};
