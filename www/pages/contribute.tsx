import { Container, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const ContributePaperComponent = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  minHeight: '140px',
  borderRadius: '12px',
  borderColor: theme.palette.secondary.main,
  flexDirection: 'column',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
}));

export default function Contribute() {
  return (
    <Container maxWidth={'xl'} sx={{ pt: [4, 8, 12] }}>
      <Typography textAlign="center" variant="h4" padding="25px">
        Contribute to Conduit
      </Typography>
      <ContributePaperComponent elevation={10} style={{ border: '1px solid black' }}>
        <Typography>We contribute here</Typography>
      </ContributePaperComponent>
    </Container>
  );
}
