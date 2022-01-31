import * as React from 'react';
import { Box, Grid, styled, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TypewriterComponent from 'typewriter-effect';
import CustomDivider from '../custom/CustomDivider';

const StyledGridItem = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '.fullGrow': {
    flexGrow: 1,
    width: 250,
  },
}));

const StyledGridItemText = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
}));

export default function Roadmap() {
  return (
    <Box>
      <Grid container spacing={1}>
        <StyledGridItemText item md={6} sm={12} xs={12}>
          <Typography variant="h4">
            Strive to
            <TypewriterComponent
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) =>
                typewriter
                  .typeString('Create')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Improve')
                  .pauseFor(1000)
                  .deleteAll()
                  .pauseFor(2000)
                  .start()
              }
            />
          </Typography>
          <Typography variant="subtitle2">
            {`Even though Conduit is on its' early steps it strives to improve.
             Our vision is to help people build their backend as fast and with
             as little effort possible.
             Being open-source was an easy decision as we strongly believe the
             community is what is going to make Conduit great. Even though
             Conduit is in a working state, in the coming months we will
             work on requested changes/improvements and of course everyone is
             welcome to contribute.`}
          </Typography>
        </StyledGridItemText>
        <StyledGridItem item md={6} sm={12}>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent>Typescript</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="info" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="caption">
                  Even though Conduit is mostly built on Typescript we want to make sure that
                  everything has a type!
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="caption">
                  Documentation is a continuous work in progress so that everything makes sense to
                  the end user
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Documentation </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>New features</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="error" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="caption">
                  Modules such as Payments and Actor will be added
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="caption">
                  {`Conduit is performant as-is.
                   We'll make sure that stays true as the project grows`}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Performance</TimelineContent>
            </TimelineItem>
          </Timeline>
        </StyledGridItem>
      </Grid>
    </Box>
  );
}
