import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Divider, Grid, IconButton, Paper } from '@mui/material';
import { AirplaneTicket, ArrowForward } from '@mui/icons-material';

const StyledCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  minHeight: '140px',
  borderWidth: '1px',
  borderRadius: '12px',
  borderStyle: 'solid',
  borderColor: theme.palette.secondary.main,
  flexDirection: 'column',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
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
        <Typography variant="button" component="h1">
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
