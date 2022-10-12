import React, { FC, useEffect, useState } from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Download } from '@mui/icons-material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { highlighterCustomStyle, styles } from './HighlighterStyles';

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

  useEffect(() => {
    fetch('https://api.github.com/repos/ConduitPlatform/CLI/releases/latest')
      .then((res) => res.json())
      .then((data) => setLatestVersion(data.assets.map((item: any) => item.browser_download_url)));
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
        return `win32-x64.tar.gz`;
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

  // const open = Boolean(anchorEl);
  // const command = `homebrew ......`;

  // const copy = (event: React.MouseEvent<HTMLButtonElement>) =>
  //   (async () => {
  //     const target = event.currentTarget;
  //     await navigator.clipboard.writeText(command);
  //     if (!open) {
  //       setAnchorEl(target);
  //       setTimeout(() => setAnchorEl(null), 2000);
  //     }
  //   })();

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
            {/* <Typography>OR</Typography>
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

        {(platform === 'MAC OS' || platform === 'Linux') && (
          <>
            <Box width="100%" borderBottom={`1px solid ${theme.palette.secondary.main}`} />
            <Typography pt={2}>Installation instructions</Typography>
            <Box
              display="flex"
              flexDirection="column"
              gap={1}
              justifyContent="center"
              alignItems="center">
              <Box sx={styles.highlighterContainer}>
                <SyntaxHighlighter
                  language={'bash'}
                  style={dracula}
                  customStyle={highlighterCustomStyle}
                  codeTagProps={{
                    style: { fontSize: !mobile ? '0.8em' : '0.65em', fontFamily: 'monospace' },
                  }}>
                  {platform === 'MAC OS'
                    ? `mkdir ~/.conduit \ntar xvf conduit-cli.tar.gz --strip-components=1 -C ~/.conduit\nchmod a+x ~/.conduit/bin/conduit\n#Update your $PATH to include the installation directory\n#For Zsh Users\necho '\\n#Add Conduit CLI to executable PATH'\necho 'export PATH=$PATH:~/.conduit/bin\\n' >> ~/.zshrc\nsource ~/.zshrc`
                    : `mkdir ~/.conduit \ntar xvf conduit-cli.tar.gz --strip-components=1 -C ~/.conduit\nchmod a+x ~/.conduit/bin/conduit\n#Update your $PATH to include the installation directory\n#For Bash Users\necho '\\n#Add Conduit CLI to executable PATH'\necho 'export PATH=$PATH:~/.conduit/bin\\n' >> ~/.bashrc\n#For Zsh Users\necho '\\n#Add Conduit CLI to executable PATH'\necho 'export PATH=$PATH:~/.conduit/bin\\n' >> ~/.zshrc\nsource ~/.zshrc`}
                </SyntaxHighlighter>
              </Box>
            </Box>
          </>
        )}
        <Button variant="contained" color="secondary" onClick={() => setCurrentStep(2)}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default DownloadStepTwo;
