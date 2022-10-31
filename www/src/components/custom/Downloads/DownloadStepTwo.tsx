import React, { FC, useEffect, useState } from 'react';
import {
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Popover,
  Typography,
  IconButton,
} from '@mui/material';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { highlighterCustomStyle, styles } from './HighlighterStyles';
import { ContentCopy } from '@mui/icons-material';

interface Props {
  platform: 'NPM' | 'MAC OS' | 'Linux' | 'Windows' | 'HELM' | '';
  osVersion: '64bit' | 'amd64' | 'arm64' | 'appleSilicon' | '';
  setCurrentStep: (currentStep: number) => void;
}

const installChartCommand = 'helm install conduit conduit-platform/conduit';
const exposeAdminUICommand = 'kubectl port-forward svc/conduit-admin 8000:80';

const DownloadStepTwo: FC<Props> = ({ platform, osVersion, setCurrentStep }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [latestVersion, setLatestVersion] = useState<any>();
  const [download, setDownload] = useState(false);
  const [anchorElInstallChart, setAnchorElInstallChart] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [anchorExposeAdminUI, setAnchorElExposeAdminUI] = React.useState<HTMLButtonElement | null>(
    null
  );

  const openInstallChart = Boolean(anchorElInstallChart);
  const openExposeAdminUI = Boolean(anchorExposeAdminUI);

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

  const copy = (event: React.MouseEvent<HTMLButtonElement>) =>
    (async () => {
      const target = event.currentTarget;
      await navigator.clipboard.writeText(installChartCommand);
      if (!openInstallChart) {
        setAnchorElInstallChart(target);
        setTimeout(() => setAnchorElInstallChart(null), 2000);
      }
    })();

  const copyConfigured = (event: React.MouseEvent<HTMLButtonElement>) =>
    (async () => {
      const target = event.currentTarget;
      await navigator.clipboard.writeText(exposeAdminUICommand);
      if (!openInstallChart) {
        setAnchorElExposeAdminUI(target);
        setTimeout(() => setAnchorElExposeAdminUI(null), 2000);
      }
    })();

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

  const extractPlatform = () => {
    if (platform === 'MAC OS') {
      return `curl -Lo conduit-cli.tar.gz ${finalizedDownload()}\nmkdir ~/.conduit \ntar xvf conduit-cli.tar.gz --strip-components=1 -C ~/.conduit\nchmod a+x ~/.conduit/bin/conduit\n\n#Update your $PATH to include the installation directory\necho '\\n#Add Conduit CLI to executable PATH' >> ~/.zshrc\necho '\\nexport PATH=$PATH:~/.conduit/bin\\n' >> ~/.zshrc\nsource ~/.zshrc`;
    } else if (platform === 'Linux') {
      return `curl -Lo conduit-cli.tar.gz ${finalizedDownload()}\nmkdir ~/.conduit \ntar xvf conduit-cli.tar.gz --strip-components=1 -C ~/.conduit\nchmod a+x ~/.conduit/bin/conduit\n\n#Update your $PATH to include the installation directory\n#For Bash Users\necho '\\n#Add Conduit CLI to executable PATH' >> ~/.bashrc\necho '\\nexport PATH=$PATH:~/.conduit/bin\\n' >> ~/.bashrc\n#For Zsh Users\necho '\\n#Add Conduit CLI to executable PATH' >> ~/.zshrc\necho '\\nexport PATH=$PATH:~/.conduit/bin\\n' >> ~/.zshrc\nsource ~/.zshrc`;
    }
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
        py={2}>
        {/* {platform !== 'MAC OS' && (
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
        )} */}
        {/* {platform === 'MAC OS' && (
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
            </a> */}
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
        {/* </>
        )} */}

        {(platform === 'MAC OS' || platform === 'Linux') && (
          <>
            <Box width="100%">
              <SyntaxHighlighter
                language={'bash'}
                style={dracula}
                customStyle={highlighterCustomStyle}
                codeTagProps={{
                  style: { fontSize: !mobile ? '0.8em' : '0.6em', fontFamily: 'monospace' },
                }}>
                {extractPlatform()}
              </SyntaxHighlighter>
            </Box>
          </>
        )}
        {platform === 'HELM' && (
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" flexDirection="column">
              <Typography textAlign="center" variant="caption">
                Install Chart
              </Typography>
              <Box sx={styles.highlighterContainer}>
                <SyntaxHighlighter
                  language={'bash'}
                  style={dracula}
                  customStyle={highlighterCustomStyle}
                  codeTagProps={{
                    style: { fontSize: !mobile ? '0.8em' : '0.5em', fontFamily: 'monospace' },
                  }}>
                  {installChartCommand}
                </SyntaxHighlighter>

                <IconButton size={'small'} sx={styles.copyIcon} color={'secondary'} onClick={copy}>
                  <ContentCopy fontSize={'small'} />
                </IconButton>
                <Popover
                  open={openInstallChart}
                  anchorEl={anchorElInstallChart}
                  onClose={() => setAnchorElInstallChart(null)}
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
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
              <Typography textAlign="center" variant="caption">
                Expose Admin UI
              </Typography>
              <Box sx={styles.highlighterContainer}>
                <SyntaxHighlighter
                  language={'bash'}
                  style={dracula}
                  customStyle={highlighterCustomStyle}
                  codeTagProps={{
                    style: { fontSize: !mobile ? '0.8em' : '0.5em', fontFamily: 'monospace' },
                  }}>
                  {exposeAdminUICommand}
                </SyntaxHighlighter>

                <IconButton
                  size={'small'}
                  sx={styles.copyIcon}
                  color={'secondary'}
                  onClick={copyConfigured}>
                  <ContentCopy fontSize={'small'} />
                </IconButton>
                <Popover
                  open={openExposeAdminUI}
                  anchorEl={anchorExposeAdminUI}
                  onClose={() => setAnchorElExposeAdminUI(null)}
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
              <Typography mt={2} variant="caption">
                Access Admin UI at localhost:8000
              </Typography>
            </Box>
          </Box>
        )}
        {platform !== 'HELM' && (
          <Button variant="contained" color="secondary" onClick={() => setCurrentStep(2)}>
            Continue
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default DownloadStepTwo;
