import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, slogan, isWhite, isDark, needRed }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      {needRed ?
        <Text
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
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
          variant: 'sectionHeader.subTitle',
          color: isDark ? '#EEEEEE' : 'headingSecondary',
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text>
      }
    
      <Heading
        as="h2"
        sx={{
          variant: 'sectionHeader.title',
          color: isWhite ? 'accent' : 'heading',
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
