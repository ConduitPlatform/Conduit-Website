import React, { FC, useEffect, useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Popover,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Download } from '@mui/icons-material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight, materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { ContentCopy } from '@mui/icons-material';
import { highlighterCustomStyle, styles } from './HighlighterStyles';

const downloadURL =
  'https://github.com/ConduitPlatform/CLI/releases/download/v0.0.9/conduit-v0.0.9-6767589-';

interface Props {
  platform: 'NPM' | 'MAC OS' | 'Linux' | 'Windows' | '';
  osVersion: '64bit' | 'amd64' | 'arm64' | 'appleSilicon' | '';
  setCurrentStep: (currentStep: number) => void;
}

const DownloadStepTwo: FC<Props> = ({ platform, osVersion, setCurrentStep }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [download, setDownload] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const extractURL = () => {
    if (platform === 'Windows') {
      return `${downloadURL}win32-x64.tar.gz`;
    } else if (platform === 'Linux') {
      if (osVersion === 'amd64') {
        return `${downloadURL}linux-x64.tar.gz`;
      } else return `${downloadURL}linux-arm.tar.gz`;
    } else {
      if (osVersion === 'appleSilicon') {
        return `${downloadURL}darwin-arm64.tar.gz`;
      } else return `${downloadURL}darwin-x64.tar.gz`;
    }
  };

  useEffect(() => {
    if (download)
      setTimeout(() => {
        setDownload(false);
      }, 10000);
  }, [download]);

  const open = Boolean(anchorEl);
  const command = `homebrew ......`;

  const copy = (event: React.MouseEvent<HTMLButtonElement>) =>
    (async () => {
      const target = event.currentTarget;
      await navigator.clipboard.writeText(command);
      if (!open) {
        setAnchorEl(target);
        setTimeout(() => setAnchorEl(null), 2000);
      }
    })();

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap={2}
        justifyContent="center"
        p={2}>
        {platform !== 'MAC OS' && (
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            gap={3}
            p={2}
            justifyContent="center">
            <Typography>Download package</Typography>
            <a style={{ textDecoration: 'none' }} href={extractURL()} download>
              <Button
                color="secondary"
                endIcon={<Download />}
                onClick={() => setDownload(true)}
                variant="outlined">
                Download
              </Button>
            </a>
          </Box>
        )}
        {platform === 'MAC OS' && (
          <>
            <Typography>Download .dng</Typography>
            <a style={{ textDecoration: 'none' }} href={extractURL()} download>
              <Button
                color="secondary"
                endIcon={<Download />}
                onClick={() => setDownload(true)}
                variant="outlined">
                Download
              </Button>
            </a>
            <Typography>OR</Typography>
            <Box
              display="flex"
              flexDirection="column"
              gap={1}
              justifyContent="center"
              alignItems="center">
              <Typography>Homebrew command</Typography>
              <Box sx={styles.highlighterContainer}>
                <SyntaxHighlighter
                  language={'bash'}
                  style={theme.palette.mode === 'dark' ? materialLight : materialDark}
                  customStyle={highlighterCustomStyle}
                  codeTagProps={{
                    style: { fontSize: !mobile ? '0.8em' : '0.6em', fontFamily: 'monospace' },
                  }}>
                  {command}
                </SyntaxHighlighter>
                <IconButton size={'small'} sx={styles.copyIcon} color={'secondary'} onClick={copy}>
                  <ContentCopy fontSize={'small'} />
                </IconButton>
                <Popover
                  open={open}
                  anchorEl={anchorEl}
                  onClose={() => setAnchorEl(null)}
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
            </Box>
          </>
        )}
        {download && <Typography>Your download will begin shortly!</Typography>}
        <Box width="100%" borderBottom={`1px solid ${theme.palette.secondary.main}`} />
        <Typography pt={2}>Install</Typography>
        <Typography color="error">*Install command pending</Typography>
        <Typography textAlign="center" color="secondary">
          *Path has to be addded to env vars until native Conduit packages arrive
        </Typography>
        <Button variant="contained" color="secondary" onClick={() => setCurrentStep(2)}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default DownloadStepTwo;
