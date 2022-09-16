import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TypewriterComponent from 'typewriter-effect';
import { Button, Grid, Grow, useMediaQuery } from '@mui/material';
import Illustration from '../../../public/icons/Illustration';
import { ArrowForwardIos, GitHub } from '@mui/icons-material';

import { SxObject } from '../../models/SxObjects';
import { useTheme } from '@mui/system';
import DownloadDialog from '../custom/Downloads/DownloadDialog';

const styles: SxObject = {
  basicText: {
    textAlign: ['center', 'center', 'left'],
  },
  bottomContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: {
      md: 'flex-start',
      xs: 'center',
    },
  },
  highlighterContainer: {
    flexGrow: '1',
    flexShrink: '0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: {
      md: 'flex-start',
      xs: 'center',
    },
  },
  copyIcon: { marginLeft: 1 },
};

const highlighterCustomStyle = {
  borderRadius: '4px',
  padding: '0.5em 1em 0.55em 1em',
  boxShadow:
    '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
};

const bootstrapBash = 'source <(curl -s https://getconduit.dev/bootstrap)';

export default function IntroSection() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [dialog, setDialog] = React.useState<boolean>(false);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const copyBash = (event: React.MouseEvent<HTMLButtonElement>) =>
    (async () => {
      const target = event.currentTarget;
      await navigator.clipboard.writeText(bootstrapBash);
      if (!open) {
        setAnchorEl(target);
        setTimeout(() => setAnchorEl(null), 2000);
      }
    })();

  return (
    <Box>
      <Grid container>
        <Grid sx={styles.basicText} item md={6} sm={12}>
          <Typography variant="h2" component="h1" gutterBottom>
            <strong>{`The only Backend you'll ever need`}</strong>
          </Typography>
          <Typography variant="h4" component="h1" gutterBottom>
            Built for
            <TypewriterComponent
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) =>
                typewriter
                  .typeString('The future')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Ease of use')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('<span style="color: #07D9C4; text-decoration: underline">You</span>')
                  .pauseFor(2000)
                  .start()
              }
            />
          </Typography>
          <Typography variant="body2" paddingTop={'50px'}>
            {`Build a flexible, fully customizable & Self-Hosted backend server, using Conduit.
            Conduit is a NodeJS-based Backend as a Service,
             that aims to cut down development times by providing ready-made modules that offer common functionality out of the box.`}
          </Typography>
          <Box my={8} gap={1} sx={styles.bottomContainer}>
            <Button
              sx={{ px: '18px' }}
              onClick={() => setDialog(true)}
              size="large"
              variant="contained"
              color="secondary"
              endIcon={<ArrowForwardIos />}>
              GET STARTED
            </Button>
            <a href="https://github.com/ConduitPlatform/Conduit" style={{ textDecoration: 'none' }}>
              <Button
                sx={{ px: '18px' }}
                size="large"
                variant="outlined"
                color="secondary"
                endIcon={<GitHub />}>
                Github
              </Button>
            </a>
          </Box>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Grow in={true} timeout={{ enter: 1000 }}>
            <Box>
              <Illustration />
            </Box>
          </Grow>

          {/* <Image src={workspace} alt="workspace" /> */}
        </Grid>
      </Grid>
      <DownloadDialog isOpen={dialog} setIsOpen={setDialog} />
    </Box>
  );
}
