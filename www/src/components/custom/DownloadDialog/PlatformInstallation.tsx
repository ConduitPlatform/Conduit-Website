import React, { FC, ReactNode } from 'react';
import { Box, IconButton, Popover, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Platform } from './types';
import { highlighterCustomStyle, styles } from './HighlighterStyles';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { ContentCopy } from '@mui/icons-material';

type PlatformInstallInfo = {
  installLines: [string, string?][];
  bottomText?: ReactNode;
};

const cliInstallText = 'Install Conduit through Conduit CLI';

type Props = {
  platform: Platform;
};

const PlatformInstallation: FC<Props> = ({ platform }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [copyBtnElement, setCopyBtnElement] = React.useState<HTMLButtonElement | null>(null);

  const platformInfo: Map<Platform, PlatformInstallInfo> = new Map([
    [
      Platform.LINUX,
      {
        installLines: [['sh <(curl -s https://getconduit.dev/bootstrap)', cliInstallText]],
      },
    ],
    [
      Platform.MAC,
      {
        installLines: [['sh <(curl -s https://getconduit.dev/bootstrap)', cliInstallText]],
      },
    ],
    [
      Platform.NPM,
      {
        installLines: [
          ['npx -y @conduitplatform/cli@latest deploy setup --config', cliInstallText],
        ],
        bottomText: (
          <strong hidden={window.navigator.platform !== 'Win32'}>
            Windows users should run through WSL
          </strong>
        ),
      },
    ],
    [
      Platform.HELM,
      {
        installLines: [
          [
            'helm repo add conduit-platform https://conduitplatform.github.io/helm-charts',
            'Add Helm Repo',
          ],
          ['helm repo update'],
          ['helm install conduit conduit-platform/conduit', 'Install Chart'],
          ['kubectl port-forward svc/conduit-admin 8000:80', 'Expose Admin Dashboard'],
        ],
      },
    ],
  ]);

  const copyLine = async (text: string, btnElement: HTMLButtonElement) => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      if (btnElement) {
        setCopyBtnElement(btnElement);
        setTimeout(() => setCopyBtnElement(null), 2000);
      }
    }
  };

  const activeInfo = platformInfo.get(platform) ?? platformInfo.get(Platform.NPM)!;
  const lineElements: React.ReactElement[] = [];
  activeInfo.installLines.forEach((line, index) => {
    const fontSize: { desktop: string; mobile: string } = {
      desktop: platform === Platform.HELM ? '0.7em' : '0.9em',
      mobile: platform === Platform.HELM ? '0.6em' : '0.7em',
    };
    lineElements.push(
      <Box display="flex" flexDirection="column">
        {line[1] && (
          <Typography textAlign="center" variant="caption" marginTop={2}>
            {line[1]}
          </Typography>
        )}
        <Box sx={styles.highlighterContainer}>
          <SyntaxHighlighter
            language={'bash'}
            style={dracula}
            customStyle={highlighterCustomStyle}
            codeTagProps={{
              style: {
                fontSize: mobile ? fontSize.mobile : fontSize.desktop,
                fontFamily: 'monospace',
              },
            }}>
            {line[0]}
          </SyntaxHighlighter>
          {navigator.clipboard && (
            <>
              <IconButton
                id={`btn-${index}`}
                size={'small'}
                sx={styles.copyIcon}
                color={'secondary'}
                onClick={(event) => copyLine(line[0], event.currentTarget)}>
                <ContentCopy fontSize={'small'} />
              </IconButton>
              <Popover
                id={`popover-${index}`}
                open={copyBtnElement?.id.split('-')[1] === String(index)}
                anchorEl={copyBtnElement}
                onClose={() => setCopyBtnElement(null)}
                hideBackdrop
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'left',
                }}>
                <Typography sx={{ p: 1 }}>Copied!</Typography>
              </Popover>
            </>
          )}
        </Box>
      </Box>
    );
  });

  return (
    <Box display="flex" alignItems="center" flexDirection="column" gap={2}>
      <Box display="flex" flexDirection="column">
        {lineElements}
        {activeInfo.bottomText && (
          <Typography textAlign="center">{activeInfo.bottomText}</Typography>
        )}
      </Box>
      {/*{platformInfo.get(platform)!.bottomText && <Typography textAlign="center" variant="caption">{platformInfo.get(platform)!.bottomText]}</Typography> }*/}
    </Box>
  );
};

export default PlatformInstallation;
