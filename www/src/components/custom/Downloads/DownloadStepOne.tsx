import React, { FC } from 'react';
import {
  Box,
  Button,
  Popover,
  Typography,
  useTheme,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import OSCard from './PlatformCard';
import AppleLogo from '../../../../public/icons/appleLogo.svg';
// import WindowsLogo from '../../../../public/icons/windowsLogo.svg';
import LinuxLogo from '../../../../public/icons/linux-tux.svg';
import HelmLogo from '../../../../public/icons/helm.svg';
import NPMLogo from '../../../../public/icons/npmLogo.svg';
import ConduitLogo from '../../../../public/conduitLogo.svg';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { ContentCopy } from '@mui/icons-material';
import { highlighterCustomStyle, styles } from './HighlighterStyles';

interface Props {
  platform: 'NPM' | 'MAC OS' | 'Linux' | 'Windows' | 'HELM' | '';
  setPlatform: (platform: 'NPM' | 'MAC OS' | 'Linux' | 'Windows' | 'HELM' | '') => void;
  setCurrentStep: (currentStep: number) => void;
  osVersion: '64bit' | 'amd64' | 'arm64' | 'appleSilicon' | '';
  setOsVersion: (osVersion: '64bit' | 'amd64' | 'arm64' | 'appleSilicon' | '') => void;
}

const DownloadStepOne: FC<Props> = ({
  platform,
  setPlatform,
  setCurrentStep,
  osVersion,
  setOsVersion,
}) => {
  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [anchorElConfigured, setAnchorElConfigured] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [anchorElHelmAdd, setAnchorElHelmAdd] = React.useState<HTMLButtonElement | null>(null);
  const [anchorElHelmUpdate, setAnchorElHelmUpdate] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleChangePlatform = (platform: 'NPM' | 'MAC OS' | 'Linux' | 'Windows' | 'HELM' | '') => {
    setPlatform(platform);
    setOsVersion('');
  };

  const windowsDownload = () => {
    setPlatform('Windows');
    setCurrentStep(1);
  };

  const open = Boolean(anchorEl);
  const openConfigured = Boolean(anchorElConfigured);
  const openHelmAdd = Boolean(anchorElHelmAdd);
  const openHelmUpdate = Boolean(anchorElHelmUpdate);

  const handleChangeOsVersion = (osVersion: '64bit' | 'amd64' | 'arm64' | 'appleSilicon' | '') => {
    setOsVersion(osVersion);
    setCurrentStep(1);
  };

  const command = `npx -y @conduitplatform/cli@latest deploy setup`;
  const commandConfigured = `npx -y @conduitplatform/cli@latest deploy setup --config`;

  const helmRepoAdd =
    'helm repo add conduit-platform https://conduitplatform.github.io/helm-charts/';
  const helmRepoUpdate = 'helm repo update';

  const copy = (event: React.MouseEvent<HTMLButtonElement>) =>
    (async () => {
      const target = event.currentTarget;
      await navigator.clipboard.writeText(command);
      if (!open) {
        setAnchorEl(target);
        setTimeout(() => setAnchorEl(null), 2000);
      }
    })();

  const copyConfigured = (event: React.MouseEvent<HTMLButtonElement>) =>
    (async () => {
      const target = event.currentTarget;
      await navigator.clipboard.writeText(commandConfigured);
      if (!open) {
        setAnchorElConfigured(target);
        setTimeout(() => setAnchorElConfigured(null), 2000);
      }
    })();

  const copyHelmRepoAdd = (event: React.MouseEvent<HTMLButtonElement>) =>
    (async () => {
      const target = event.currentTarget;
      await navigator.clipboard.writeText(helmRepoAdd);
      if (!openHelmAdd) {
        setAnchorElHelmAdd(target);
        setTimeout(() => setAnchorElHelmAdd(null), 2000);
      }
    })();

  const copyHelmRepoUpdate = (event: React.MouseEvent<HTMLButtonElement>) =>
    (async () => {
      const target = event.currentTarget;
      await navigator.clipboard.writeText(helmRepoUpdate);
      if (!openHelmUpdate) {
        setAnchorElHelmUpdate(target);
        setTimeout(() => setAnchorElHelmUpdate(null), 2000);
      }
    })();

  return (
    <Box py={2} display="flex" flexDirection="column" gap={4}>
      <Box
        display="flex"
        flexDirection="row"
        gap={mobile ? 1 : 2}
        justifyContent={mobile ? 'center' : 'space-around'}
        flexWrap="wrap">
        <OSCard
          title="NPM"
          checked={platform === 'NPM'}
          img={<NPMLogo />}
          handleChecked={() => setPlatform('NPM')}
        />
        {/* <OSCard
          title="Windows"
          checked={platform === 'Windows'}
          img={<WindowsLogo />}
          handleChecked={() => windowsDownload()}
        /> */}
        <OSCard
          title="Helm"
          checked={platform === 'HELM'}
          img={<HelmLogo />}
          handleChecked={() => setPlatform('HELM')}
        />
        <OSCard
          title="Linux"
          checked={platform === 'Linux'}
          img={<LinuxLogo />}
          handleChecked={() => handleChangePlatform('Linux')}
        />
        <OSCard
          title="MAC OS"
          checked={platform === 'MAC OS'}
          img={<AppleLogo />}
          handleChecked={() => handleChangePlatform('MAC OS')}
        />
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column" gap={2}>
        {platform === 'NPM' && (
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" flexDirection="column">
              <Typography textAlign="center" variant="caption">
                Simple Setup
              </Typography>
              <Box sx={styles.highlighterContainer}>
                <SyntaxHighlighter
                  language={'bash'}
                  style={dracula}
                  customStyle={highlighterCustomStyle}
                  codeTagProps={{
                    style: { fontSize: !mobile ? '0.8em' : '0.5em', fontFamily: 'monospace' },
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
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
              <Typography textAlign="center" variant="caption">
                Configurable Setup
              </Typography>
              <Box sx={styles.highlighterContainer}>
                <SyntaxHighlighter
                  language={'bash'}
                  style={dracula}
                  customStyle={highlighterCustomStyle}
                  codeTagProps={{
                    style: { fontSize: !mobile ? '0.8em' : '0.5em', fontFamily: 'monospace' },
                  }}>
                  {commandConfigured}
                </SyntaxHighlighter>

                <IconButton
                  size={'small'}
                  sx={styles.copyIcon}
                  color={'secondary'}
                  onClick={copyConfigured}>
                  <ContentCopy fontSize={'small'} />
                </IconButton>
                <Popover
                  open={openConfigured}
                  anchorEl={anchorElConfigured}
                  onClose={() => setAnchorElConfigured(null)}
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
              <Box pt={3}>
                <ConduitLogo />
              </Box>
            </Box>
          </Box>
        )}
        {platform !== '' && platform === 'Linux' && (
          <>
            <Typography>OS Version</Typography>
            <Box display="flex" gap={2}>
              <Button
                color="secondary"
                variant={osVersion === 'amd64' ? 'contained' : 'outlined'}
                onClick={() => handleChangeOsVersion('amd64')}>
                AMD64
              </Button>
              <Button
                color="secondary"
                variant={osVersion === 'arm64' ? 'contained' : 'outlined'}
                onClick={() => handleChangeOsVersion('arm64')}>
                ARM64
              </Button>
            </Box>
          </>
        )}
        {platform !== '' && platform === 'MAC OS' && (
          <>
            <Typography>OS Version</Typography>
            <Box display="flex" gap={2}>
              <Button
                color="secondary"
                variant={osVersion === 'amd64' ? 'contained' : 'outlined'}
                onClick={() => handleChangeOsVersion('amd64')}>
                Intel
              </Button>
              <Button
                color="secondary"
                variant={osVersion === 'appleSilicon' ? 'contained' : 'outlined'}
                onClick={() => handleChangeOsVersion('appleSilicon')}>
                Apple Silicon
              </Button>
            </Box>
          </>
        )}
        {platform !== '' && platform === 'HELM' && (
          <Box display="flex" flexDirection="column" gap={1}>
            <Box display="flex" flexDirection="column">
              <Typography textAlign="center" variant="caption">
                Get Repo Info
              </Typography>
              <Box sx={styles.highlighterContainer}>
                <SyntaxHighlighter
                  language={'bash'}
                  style={dracula}
                  customStyle={highlighterCustomStyle}
                  codeTagProps={{
                    style: { fontSize: !mobile ? '0.7em' : '0.4em', fontFamily: 'monospace' },
                  }}>
                  helm repo add conduit-platform https://conduitplatform.github.io/helm-charts/
                </SyntaxHighlighter>
                <IconButton
                  size={'small'}
                  sx={styles.copyIcon}
                  color={'secondary'}
                  onClick={copyHelmRepoAdd}>
                  <ContentCopy fontSize={'small'} />
                </IconButton>
                <Popover
                  open={openHelmAdd}
                  anchorEl={anchorElHelmAdd}
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
              <Box sx={styles.highlighterContainer}>
                <SyntaxHighlighter
                  language={'bash'}
                  style={dracula}
                  customStyle={highlighterCustomStyle}
                  codeTagProps={{
                    style: { fontSize: !mobile ? '0.7em' : '0.4em', fontFamily: 'monospace' },
                  }}>
                  helm repo update
                </SyntaxHighlighter>
                <IconButton
                  size={'small'}
                  sx={styles.copyIcon}
                  color={'secondary'}
                  onClick={copyHelmRepoUpdate}>
                  <ContentCopy fontSize={'small'} />
                </IconButton>
                <Popover
                  open={openHelmUpdate}
                  anchorEl={anchorElHelmUpdate}
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
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
              <Box display="flex" gap={2}>
                <Button
                  color="secondary"
                  variant={osVersion === 'appleSilicon' ? 'contained' : 'outlined'}
                  onClick={() => handleChangeOsVersion('appleSilicon')}>
                  Continue to installation
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DownloadStepOne;
