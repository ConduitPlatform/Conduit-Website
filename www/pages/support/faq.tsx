import * as React from 'react';
import { Typography, Container } from '@mui/material';
import CustomizedAccordions from '../../src/components/custom/CustomAccordion';

const dummyAccordionData = [
  { title: 'Question 1', content: 'Answer 1' },
  { title: 'Question 2', content: 'Answer 2' },
  { title: 'Question 3', content: 'Answer 3' },
  { title: 'Question 4', content: 'Answer 4' },
  { title: 'Question 5', content: 'Answer 5' },
];

const Faq = () => {
  return (
    <Container maxWidth="lg" sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Conduit FAQ
      </Typography>
      <CustomizedAccordions data={dummyAccordionData} />
    </Container>
  );
};

export default Faq;
