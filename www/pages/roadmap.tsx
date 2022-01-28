import { Box, Container } from '@mui/material';
import React from 'react';

import { Chrono } from 'react-chrono';

const items = [
  {
    title: 'May 1940',
    cardTitle: 'Dunkirk',
    url: 'http://www.history.com',
    cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
    cardDetailedText: 'Men of the British Expeditionary Force (BEF) wade out to..',
  },
];

export default function Roadmap() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ width: '100%', height: '100%' }}>
        <Chrono
          items={items}
          mode="VERTICAL"
          theme={{
            primary: 'red',
            secondary: 'blue',
            cardBgColor: 'yellow',
            cardForeColor: 'violet',
            titleColor: 'red',
          }}
        />
      </Box>
    </Container>
  );
}
