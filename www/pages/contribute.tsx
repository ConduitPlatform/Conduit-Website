import { Box, Container, Divider, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const ContributePaperComponent = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(2),
  minHeight: '140px',
  borderRadius: '8px',
  borderColor: theme.palette.secondary.main,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
}));

export default function Contribute() {
  return (
    <Container maxWidth={'lg'} sx={{ pt: [4, 8, 12] }}>
      <Typography textAlign="center" variant="h4" padding="25px">
        Contribute to Conduit
      </Typography>
      <ContributePaperComponent elevation={1} style={{ border: '1px solid black' }}>
        <Box>
          <Typography style={{ padding: '20px' }}>We contribute here</Typography>
        </Box>
        <Divider style={{ backgroundColor: '#07D9C4' }} orientation="vertical" flexItem />
        <Box>
          <Typography style={{ padding: '20px' }}>We contribute here</Typography>
          <Typography style={{ padding: '20px' }}>We contribute here</Typography>
          <Typography style={{ padding: '20px' }}>We contribute here</Typography>
          <Typography style={{ padding: '20px' }}>We contribute here</Typography>
          <Typography style={{ padding: '20px' }}>We contribute here</Typography>
        </Box>
      </ContributePaperComponent>
    </Container>
  );
}
