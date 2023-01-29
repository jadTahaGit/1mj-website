/** @jsxImportSource theme-ui */
import { Box, Heading, Text, Button, Link } from 'theme-ui';

export default function DefaultTextFeature({
  subTitle,
  title,
  description,
  btnName,
  btnURL = '#',
  isRedBG,
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.wrapper}>
        <Text as="p" sx={styles.wrapper.subTitle}>
          {subTitle}
        </Text>
        {isRedBG ?
          <Heading as="h2" sx={styles.wrapper.titleInYellow}>
          {title}
        </Heading>
        :
        <Heading as="h2" sx={styles.wrapper.title}>
          {title}
        </Heading>}
      </Box>

      {description && (
        isRedBG 
        ? 
        <Text as="p" className="description" sx={styles.secondaryDescription}>
          {description}
        </Text>
        : 
        <Text as="p" className="description" sx={styles.description}>
          {description}
        </Text>
      )}

      {btnName && (
        <Link href={btnURL} variant="default">
          <Button variant="primary" aria-label={btnName}>
            {btnName}
          </Button>
        </Link>
      )}
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
    subTitle: {
      fontSize: [0, null, 1],
      color: 'secondary',
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: [2, 3],
      lineHeight: 1.5,
      letterSpacing: ['1.5px', null, '2px'],
    },
    title: {
      fontSize: ['24px', null, '28px', '30px', '36px', '42px', null, '48px'],
      color: 'primary',
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: '700',
      letterSpacing: '-.5px',
      mb: 5,
    },
    titleInYellow: {
      //fontSize: ['24px', null, '28px', '30px', '36px', '42px', null, '48px'],
      fontWeight: 'bold',
      fontSize: ['30px', null, null, null, '42px', '40px', '50px'],
      lineHeight: 1.33,
      letterSpacing: '-1px',
      color: 'accent',
      mb: 5,
    },
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    fontWeight: 400,
    lineHeight: [1.85, null, null, 2, null, '2.2'],
    color: 'text_secondary',
    mb: '30px',
  },
  secondaryDescription: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    fontWeight: 400,
    lineHeight: [1.85, null, null, 2, null, '2.2'],
    color: 'whiteText',
    mb: '30px',
  },
};
