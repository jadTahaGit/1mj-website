import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeaderAway({ title, slogan, isWhite, isDark, needRed, extraDescription, topPadding }) {
  return (
    <Box sx={{ variant: 'aboutSectionHeader' }}>
      {topPadding && <div sx={styles.padme} ></div>}
      {needRed ?
        <Text
        as="p"
        sx={{
          variant: 'aboutSectionHeader.subTitle',
          color: 'primary',
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text>
      :
      <Text
        as="p"
        sx={{
          variant: 'aboutSectionHeader.subTitle',
          color: isDark ? 'whiteText' : 'headingSecondary',
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text>
      }
    
      <Heading
        as="h2"
        sx={{
          variant: 'aboutSectionHeader.title',
          color: isWhite ? 'accent' : 'heading',
        }}
      >
        {title}
      </Heading>

      {extraDescription &&
        <Text
        as="p"
        sx={styles.extra}
        >
          {extraDescription}
        </Text>}
    </Box>
  );
}

const styles = {
  padme: {
    pt: '550px',
  },
  extra: {
    pt: '25px',
    color: 'text_secondary',
  },
};