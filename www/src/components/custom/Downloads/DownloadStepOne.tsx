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
import OSCard from './OsCard';
import AppleLogo from '../../../../public/icons/appleLogo.svg';
import WindowsLogo from '../../../../public/icons/windowsLogo.svg';
import LinuxLogo from '../../../../public/icons/linux-tux.svg';
import NPMLogo from '../../../../public/icons/npmLogo.svg';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight, materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { ContentCopy } from '@mui/icons-material';
import { highlighterCustomStyle, styles } from './HighlighterStyles';

interface Props {
  platform: 'NPM' | 'MAC OS' | 'Linux' | 'Windows' | '';
  setPlatform: (platform: 'NPM' | 'MAC OS' | 'Linux' | 'Windows' | '') => void;
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
  const handleChangePlatform = (platform: 'NPM' | 'MAC OS' | 'Linux' | 'Windows' | '') => {
    setPlatform(platform);
    setOsVersion('');
  };

  const windowsDownload = () => {
    setPlatform('Windows');
    setCurrentStep(1);
  };

  const open = Boolean(anchorEl);
  const openConfigured = Boolean(anchorElConfigured);

  const handleChangeOsVersion = (osVersion: '64bit' | 'amd64' | 'arm64' | 'appleSilicon' | '') => {
    setOsVersion(osVersion);
    setCurrentStep(1);
  };

  const command = `npx @conduitplatform/cli deploy setup`;
  const commandConfigured = `npx @conduitplatform/cli deploy setup --config`;

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

  return (
    <Box py={2} display="flex" flexDirection="column" gap={4}>
      <Box
        display="flex"
        flexDirection="row"
        gap={3}
        justifyContent={mobile ? 'center' : 'space-between'}
        flexWrap="wrap">
        <OSCard
          title="NPM"
          checked={platform === 'NPM'}
          img={<NPMLogo />}
          handleChecked={() => setPlatform('NPM')}
        />
        <OSCard
          title="Windows"
          checked={platform === 'Windows'}
          img={<WindowsLogo />}
          handleChecked={() => windowsDownload()}
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
                Simple setup
              </Typography>
              <Box sx={styles.highlighterContainer}>
                <SyntaxHighlighter
                  language={'bash'}
                  style={theme.palette.mode === 'dark' ? materialLight : materialDark}
                  customStyle={highlighterCustomStyle}
                  codeTagProps={{ style: { fontSize: '0.8em', fontFamily: 'monospace' } }}>
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
            <Box display="flex" flexDirection="column">
              <Typography textAlign="center" variant="caption">
                Configurable setup
              </Typography>
              <Box sx={styles.highlighterContainer}>
                <SyntaxHighlighter
                  language={'bash'}
                  style={theme.palette.mode === 'dark' ? materialLight : materialDark}
                  customStyle={highlighterCustomStyle}
                  codeTagProps={{ style: { fontSize: '0.8em', fontFamily: 'monospace' } }}>
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
                AMD64
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
      </Box>
    </Box>
  );
};

export default DownloadStepOne;
