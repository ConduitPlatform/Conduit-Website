import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Divider, Grid, IconButton, Paper } from '@mui/material';
import { AirplaneTicket, ArrowForward } from '@mui/icons-material';

const StyledCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  color: '#3c44b1',
  minHeight: '140px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: theme.palette.primary.main,
  flexDirection: 'column',
  backgroundColor: theme.palette.background.default,
  '&:hover': {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.main,
  },
  '&:focus': {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.main,
  },
}));

const StyledIconContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

export default function Landing() {
  return (
    <Box sx={{ my: 22 }}>
      <Divider>
        <Typography style={{ textAlign: 'center' }} variant="button" component="h1" gutterBottom>
          Stop making the same stuff twice
        </Typography>
      </Divider>
      <Grid container spacing={10} padding={'30px'}>
        <Grid item xs={3}>
          <StyledCard variant="outlined">
            <StyledIconContainer>
              <AirplaneTicket />
              <Typography align="center">&nbsp; Example card</Typography>
            </StyledIconContainer>
            <Divider />

            <Typography variant="subtitle2">
              Lorem, ipsum dolor sit amet consectetur
              <StyledIconButton size="small">
                <ArrowForward />
              </StyledIconButton>
            </Typography>
          </StyledCard>
        </Grid>
        <Grid item xs={3}>
          <StyledCard variant="outlined"></StyledCard>
        </Grid>
        <Grid item xs={3}>
          <StyledCard variant="outlined"></StyledCard>
        </Grid>
        <Grid item xs={3}>
          <StyledCard variant="outlined"></StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
}
