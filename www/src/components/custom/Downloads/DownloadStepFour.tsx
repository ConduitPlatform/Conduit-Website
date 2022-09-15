import React, { FC } from 'react';
import { Box, IconButton, Popover, Typography, useTheme } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight, materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { SxObject } from '../../../models/SxObjects';
import { ContentCopy } from '@mui/icons-material';

const highlighterCustomStyle = {
  borderRadius: '4px',
  padding: '0.5em 1em 0.55em 1em',
  boxShadow:
    '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
};

const styles: SxObject = {
  basicText: {
    textAlign: ['center', 'center', 'left'],
  },
  bottomContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: {
      md: 'center',
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
      md: 'center',
      xs: 'center',
    },
  },
  copyIcon: { marginLeft: 1 },
};

interface Props {
  configuration: 'configless' | 'configured' | '';
  platform: 'NPM' | 'MAC OS' | 'Linux' | 'Windows' | '';
}

const DownloadStepFour: FC<Props> = ({ configuration, platform }) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const command = `${platform === 'NPM' ? 'npx @conduitplatform/cli' : 'conduit'} deploy setup ${
    configuration === 'configured' ? '--config' : ''
  }`;

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
    <Box p={2}>
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
    </Box>
  );
};

export default DownloadStepFour;
