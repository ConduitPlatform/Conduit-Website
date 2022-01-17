import { FC } from 'react';
import { Box, Button, Card, CardActions, Divider, Fade, Typography } from '@mui/material';
import * as React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/Image';
import quintImage from '../../../public/icons/quint-image.jpeg';

const styles = {
  cardLayer: {
    display: 'flex',
    flexWrap: 'wrap-reverse',
    '&>:nth-child(n)': {
      flexGrow: 1,
      width: 450,
    },
  },
} as const;

const AboutUsSection: FC = () => {
  return (
    <Box>
      <Divider sx={{ my: 8 }}>ABOUT US</Divider>

      <Box>
        <Card sx={{ padding: 4, borderRadius: 2 }} elevation={0}>
          <Box sx={styles.cardLayer} gap={3}>
            <Box>
              <Typography gutterBottom variant={'h5'}>
                <strong>WE ARE QUINTESSENTIAL SFT</strong>
              </Typography>
              <Divider />
              <Typography my={2} variant={'h6'}>
                We design and develop uncompromising web and mobile applications.
              </Typography>
              <Fade in={true} style={{ transitionDelay: '3000ms' }} timeout={{ enter: 2000 }}>
                <Typography mt={1}>
                  Quintessential is a technology company that develops premium software solutions
                  for internal use and third-party clients. Quintessential is deeply concerned about
                  Design and Development in every product that is being managed or developed under
                  it's guidance.
                </Typography>
              </Fade>
              <Fade in={true} style={{ transitionDelay: '3000ms' }} timeout={{ enter: 3000 }}>
                <Typography mt={1}>
                  Years have passed from our very first start and engagement with technology and
                  entrepreneurship. The journey is wonderful, challenging and as everything, it has
                  it’s ups and downs. As we know, dreams and lifetime decisions are always being
                  shaped by moments of struggle and infinite devotion in solving real, big problems
                  out there. Different people, experts on critical fields in the Tech and Business
                  Industry, fuelled by passion and armed with experience, skill and devotion, join
                  forces officially to strive for one, common goal. To create a Technology Company
                  which produces and delivers excellent software products for private, in-house use
                  and third-party stakeholders.
                </Typography>
              </Fade>
              <Fade in={true} style={{ transitionDelay: '3500ms' }} timeout={{ enter: 3500 }}>
                <Typography mt={1}>
                  Quintessential is the solution to the permanent problem, of delivering indifferent
                  software products in the modern age from the Fin-tech industry to the
                  “Unicorn-startup” ecosystem. We aim in producing cutting-edge, state of the art,
                  meaningful technology that stands out and pleases both people and businesses.
                </Typography>
              </Fade>
            </Box>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
              }}>
              <Image alt="Mountains" layout="responsive" src={quintImage} objectFit={'contain'} />
            </Box>
          </Box>
          <CardActions sx={{ mt: 1, justifyContent: 'flex-end' }}>
            <Button
              size={'large'}
              color={'inherit'}
              component={'a'}
              target={'_blank'}
              href={'https://www.quintessential.gr/what-we-do'}>
              <Box display={'flex'} alignItems={'center'} gap={2}>
                See our website
                <ArrowForwardIcon />
              </Box>
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default AboutUsSection;
