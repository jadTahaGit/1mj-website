/** @jsxImportSource theme-ui */
import NextImage from '../next-image';
import Image from 'next/image'
import { Box, Heading, Text } from 'theme-ui';

export default function FeatureCard({
  src,
  altText = 'Kaidezen Coaching - Website Icon',
  title,
  text,
  ...rest
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.image}>
        <NextImage src={src} alt={altText} />
      </Box>
      

      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text {...rest} sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    mb: -1,
  },
  image: {
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
    ml: -2,
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [2, 3],
      color: 'accent',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ['10px', null, '15px'],
    },

    subTitle: {
      color: '#EEEEEE',
      fontSize: [1, '15px'],
      fontWeight: 400,
      lineHeight: '1.9',
    },
  },
};
