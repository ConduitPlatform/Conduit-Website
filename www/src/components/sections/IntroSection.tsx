import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TypewriterComponent from 'typewriter-effect';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneLight, duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Button, Grid, Grow, IconButton, Popover, useMediaQuery } from '@mui/material';
import Illustration from '../../../public/icons/Illustration';
import { styled } from '@mui/material/styles';
import { ArrowForwardIos, ContentCopy } from '@mui/icons-material';
import Link from '../../Link';
import { SxObject } from '../../models/SxObjects';
import { useTheme } from '@mui/system';

const styles: SxObject = {
  basicText: {
    textAlign: ['center', 'center', 'left'],
  },
  highlighterContainer: {
    flexGrow: '1',
    flexShrink: '0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyIcon: { marginLeft: 1 },
};

const highlighterCustomStyle = {
  borderRadius: '4px',
  padding: '0.8em',
  boxShadow:
    '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
};

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 20,
}));

const bootstrapBash = 'source <(curl -L -s https://getconduit.dev/bootstrap)';

export default function IntroSection() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

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
            {`Build a flexible, fully customizable backend server, using Conduit.
            Conduit is a NodeJS-based Backend as a Service,
             that aims to cut down development times by providing ready-made modules that offer common functionality out of the box.`}
          </Typography>
          <StyledBox my={8}>
            <Button
              component={Link}
              href={'/docs'}
              size="large"
              variant="contained"
              color="secondary"
              endIcon={<ArrowForwardIos />}>
              GET STARTED
            </Button>

            {matches ? (
              <Box sx={styles.highlighterContainer}>
                <SyntaxHighlighter
                  language={'bash'}
                  style={theme.palette.mode === 'light' ? duotoneDark : duotoneLight}
                  customStyle={highlighterCustomStyle}>
                  {bootstrapBash}
                </SyntaxHighlighter>
                <IconButton
                  size={'small'}
                  sx={styles.copyIcon}
                  color={'secondary'}
                  onClick={copyBash}>
                  <ContentCopy fontSize={'small'} />
                </IconButton>
                <Popover
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  hideBackdrop
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}>
                  <Typography sx={{ p: 1 }}>Copied!</Typography>
                </Popover>
              </Box>
            ) : null}
          </StyledBox>
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
    </Box>
  );
}
