/** @jsxImportSource theme-ui */
import { Box, Text, Container} from 'theme-ui';
import { Link } from './link';

export default function RandomText({
  description,
  descriptionLink,
  bold,
  path,
}) {
  return (
    <>
    {description &&
      <Box sx={styles.card}>
      <Box sx={styles.wrapper}>
      <Container sx={styles.container}>
          <Text as="p" className="designation" sx={bold ? styles.contentBold : styles.content}>
            {description}
          </Text>
        </Container>
      </Box>
    </Box>}

    {descriptionLink &&
      <Box sx={styles.cardLink}>
      <Box sx={styles.wrapper}>
        <Container sx={styles.container}>
          <Link isNotScrollable={true} path={path}>
            <Text as="p" className="designation" sx={styles.contentURL}>
              Note: {descriptionLink}
            </Text>
          </Link>
        </Container>
      </Box>
    </Box>}
    </>
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
  cardLink: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 0,
    a: {
      m: ['0 auto', null, null, 0],
    },
    pt: '25px',
    pb: '50px',
  },
  wrapper: {
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: -1,
  },
  content: {
    fontSize: ['14px', null, null, '16px'],
    color: 'text_secondary',
    display: 'inline-block',
    pb: [3, 3, 3, 3, 3, 3],
  },
  contentBold: {
    fontSize: ['14px', null, null, '16px'],
    color: 'text_secondary',
    display: 'inline-block',
    fontWeight: 'bold',
    fontStyle: 'italic',
    pb: [3, 3, 3, 3, 3, 3],
  },
  contentURL: {
    fontSize: ['14px', null, null, '16px'],
    color: 'text_secondary',
    textDecoration: 'underline',
    display: 'inline-block',
    pb: [3, 3, 3, 3, 3, 3],
  }
};
