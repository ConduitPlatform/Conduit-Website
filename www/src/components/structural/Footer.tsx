import * as React from 'react';
import { FC, useContext } from 'react';
import {
  Box,
  Button,
  Divider,
  FormHelperText,
  SxProps,
  TextField,
  Theme,
  Typography,
  useTheme,
} from '@mui/material';
import Copyright from '../../Copyright';
import { ColorModeContext } from '../../../pages/_app';
import CustomSwitch from '../custom/CustomSwitch';
import HeaderLinkButton from '../custom/HeaderLinkButton';
import ContactLinks from '../custom/ContactLinks';
import { navigationLinks } from '../../fixedData/navigationLinks';
import ConduitLogo from '../../../public/conduitLogo.svg';

const svgResponsiveStyle: SxProps = {
  '& *': {
    fill: (theme: Theme) => theme.palette.text.primary,
  },
};

const Footer: FC = () => {
  const muiTheme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        background: (theme) => `${theme.palette.background.paper}`,
      }}
      paddingY={3}
      paddingX={[2, 4]}>
      <Box
        margin={'auto'}
        maxWidth={'xl'}
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        flexWrap={'wrap'}
        rowGap={4}>
        <Box>
          <Box sx={svgResponsiveStyle}>
            <ConduitLogo />
          </Box>
          <Box my={1}>
            <Typography variant={'body2'}>Join the Conduit newsletter!</Typography>
            <FormHelperText>Learn all of our news about products and updates.</FormHelperText>
          </Box>
          <form onSubmit={handleSubmit}>
            <Typography variant={'caption'}>Enter your email here:</Typography>
            <Box display={'flex'} gap={2}>
              <TextField
                size={'small'}
                type={'email'}
                required
                color={'secondary'}
                id={'residence-type-radio'}
                placeholder={'Email address'}
              />
              <Button type={'submit'} size={'small'} variant={'contained'} color={'secondary'}>
                Subscribe
              </Button>
            </Box>
          </form>
        </Box>
        <Box display={'flex'} gap={4} justifyContent={'center'}>
          <Box margin={'auto'}>
            <CustomSwitch
              checked={muiTheme.palette.mode === 'dark'}
              onClick={colorMode.toggleColorMode}
            />
          </Box>
          <Box display={'flex'} flexWrap={'wrap'} gap={2}>
            {navigationLinks.map((item) => (
              <HeaderLinkButton
                key={item.title}
                ButtonProps={{ href: item.href, color: 'inherit' }}>
                {item.title}
              </HeaderLinkButton>
            ))}
          </Box>
        </Box>
      </Box>
      <Box maxWidth={'xl'} margin={'auto'} mt={4} mb={3}>
        <Divider />
      </Box>
      <Box
        margin={'auto'}
        maxWidth={'xl'}
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        flexWrap={'wrap'}
        rowGap={3}>
        <Copyright />
        <ContactLinks />
      </Box>
    </Box>
  );
};

export default Footer;
