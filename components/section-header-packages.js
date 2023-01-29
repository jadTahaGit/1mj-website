import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, slogan, isWhite }) {
  return (
    <Box sx={{ variant: 'aboutSectionHeader' }}>

      <Text
        as="p"
        sx={{
          variant: 'aboutSectionHeader.subTitle',
          color: 'accent',
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text>
    
      <Heading
        as="h2"
        sx={{
          variant: 'aboutSectionHeader.title',
          color: isWhite ? 'accent' : 'heading',
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
