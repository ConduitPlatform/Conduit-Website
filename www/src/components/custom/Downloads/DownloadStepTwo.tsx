import React, { FC, useEffect, useState } from 'react';
import { Box, Button, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Download } from '@mui/icons-material';

interface Props {
  platform: 'NPM' | 'MAC OS' | 'Linux' | 'Windows' | '';
  osVersion: '64bit' | 'amd64' | 'arm64' | 'appleSilicon' | '';
  setCurrentStep: (currentStep: number) => void;
}

const DownloadStepTwo: FC<Props> = ({ platform, osVersion, setCurrentStep }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [latestVersion, setLatestVersion] = useState<any>();
  const [download, setDownload] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/ConduitPlatform/CLI/releases')
      .then((res) => res.json())
      .then((data) =>
        setLatestVersion(data[0].assets.map((item: any) => item.browser_download_url))
      );
  }, []);

  useEffect(() => {
    if (download)
      setTimeout(() => {
        setDownload(false);
      }, 10000);
  }, [download]);

  const extractSuffix = () => {
    if (latestVersion !== undefined) {
      if (platform === 'Windows') {
        return `$win32-x64.tar.gz`;
      } else if (platform === 'Linux') {
        if (osVersion === 'amd64') {
          return `linux-x64.tar.gz`;
        } else return `linux-arm.tar.gz`;
      } else {
        if (osVersion === 'appleSilicon') {
          return `darwin-arm64.tar.gz`;
        } else return `darwin-x64.tar.gz`;
      }
    }
  };

  const finalizedDownload = () => {
    const suffix = extractSuffix();
    return suffix !== undefined && latestVersion?.find((item: string) => item.includes(suffix));
  };

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
            {/* <Typography>Download package</Typography> */}
            <a style={{ textDecoration: 'none' }} href={finalizedDownload()} download>
              <Button
                color="secondary"
                endIcon={<Download />}
                onClick={() => setDownload(true)}
                variant="outlined">
                Download Package
              </Button>
            </a>
          </Box>
        )}
        {platform === 'MAC OS' && (
          <>
            <Typography>Download .dng</Typography>
            <a style={{ textDecoration: 'none' }} href={finalizedDownload()} download>
              <Button
                color="secondary"
                endIcon={<Download />}
                onClick={() => setDownload(true)}
                variant="outlined">
                Download Package
              </Button>
            </a>
            {/* <Typography>OR</Typography> TODO to be added when homebrew commands are ready
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
            </Box> */}
          </>
        )}
        {download && <Typography>Your download will begin shortly!</Typography>}
        {/* <Box width="100%" borderBottom={`1px solid ${theme.palette.secondary.main}`} />
        <Typography pt={2}>Install</Typography>
        <Typography color="error">*Install command pending</Typography>
        <Typography textAlign="center" color="secondary">
          *Path has to be addded to env vars until native Conduit packages arrive
        </Typography> */}
        <Button variant="contained" color="secondary" onClick={() => setCurrentStep(2)}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default DownloadStepTwo;
