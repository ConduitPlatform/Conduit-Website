import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import TypeScript from '../public/timelineIcons/ts.svg';
import NewFeatures from '../public/timelineIcons/new.svg';
import Documentation from '../public/timelineIcons/documentation.svg';
import Performance from '../public/timelineIcons/performance.svg';
import TypewriterComponent from 'typewriter-effect';
import 'react-vertical-timeline-component/style.min.css';
import { Container, Grid, Typography, styled, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useTheme } from '@mui/system';
import Link from 'next/link';
import TimelineElement from '../src/components/custom/TimelineElement';

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  textShadow: `1px 2px ${theme.palette.secondary.main}`,
}));

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

export default function Roadmap() {
  const theme = useTheme();
  return (
    <Container maxWidth="xl" sx={{ pt: [2, 4, 8] }}>
      <Link href={'/'} passHref>
        <Button sx={{ marginLeft: [0, 0, 0, 6] }} color={'inherit'} startIcon={<ArrowBack />}>
          GO BACK
        </Button>
      </Link>
      <Heading textAlign="center" variant="h4" padding="25px">
        Conduit Roadmap
      </Heading>
      <Grid container spacing={1} sx={{ p: [3, 6, 9] }}>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          md={6}
          sm={12}
          xs={12}
          sx={{ pb: [2, 4, 8] }}>
          <Grid item>
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
          </Grid>
          <Grid item sx={{ pt: [2, 4, 8] }}>
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
          </Grid>
        </Grid>
        <StyledGridItem item md={6} sm={12}>
          <VerticalTimeline lineColor={theme.palette.secondary.dark} layout="1-column">
            <TimelineElement
              title="Typescript"
              text=" Even though Conduit is mostly built on Typescript we want to make sure that
                everything has a type!"
              icon={<TypeScript />}
            />
            <TimelineElement
              title="Documentation"
              text=" Documentation is a continuous work in progress so that everything makes sense to the
                end user"
              icon={<Documentation />}
            />
            <TimelineElement title="New features" text="Lorem ipsum" icon={<NewFeatures />} />
            <TimelineElement
              title="Performance"
              text=" Conduit is performant as-is. We'll make sure that stays true as the project grows"
              icon={<Performance />}
            />
          </VerticalTimeline>
        </StyledGridItem>
      </Grid>
    </Container>
  );
}