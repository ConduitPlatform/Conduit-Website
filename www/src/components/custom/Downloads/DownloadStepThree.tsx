import React, { FC } from 'react';
import { Box, IconButton, Popover, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight, materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { ContentCopy } from '@mui/icons-material';
import { highlighterCustomStyle, styles } from './HighlighterStyles';

const DownloadStepThree: FC = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [anchorElConfigured, setAnchorElConfigured] = React.useState<HTMLButtonElement | null>(
    null
  );

  const open = Boolean(anchorEl);
  const openConfigured = Boolean(anchorElConfigured);

  const command = `conduit deploy setup`;
  const commandConfigured = `conduit deploy setup --config`;

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
    <Box display="flex" flexDirection="column" gap={3} alignItems="center">
      <Typography textAlign="center">
        The default Conduit installation includes the following modules: Core, Database,
        Authentication, Router
      </Typography>
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
      <Typography textAlign="center">Do you wish to bring up additional modules?</Typography>
      <Box sx={styles.highlighterContainer}>
        <SyntaxHighlighter
          language={'bash'}
          style={theme.palette.mode === 'dark' ? materialLight : materialDark}
          customStyle={highlighterCustomStyle}
          codeTagProps={{
            style: { fontSize: !mobile ? '0.8em' : '0.6em', fontFamily: 'monospace' },
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
    </Box>
  );
};

export default DownloadStepThree;
