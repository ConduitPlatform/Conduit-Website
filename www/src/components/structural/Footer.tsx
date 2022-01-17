import * as React from 'react';
import { FC, useContext } from 'react';
import { Box, Button, FormHelperText, TextField, Typography, useTheme } from '@mui/material';
import Copyright from '../../Copyright';
import Image from 'next/image';
import quintLogo from '../../../public/icons/quint-logo.svg';
import { ColorModeContext } from '../../../pages/_app';
import CustomSwitch from '../custom/CustomSwitch';
import HeaderLinkButton from '../custom/HeaderLinkButton';

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
      paddingX={4}>
      <Box
        margin={'auto'}
        maxWidth={'xl'}
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        flexWrap={'wrap'}
        rowGap={4}>
        <Box>
          <Image objectFit={'contain'} src={quintLogo} alt={'quintessential-sft'} />
          <Box my={1}>
            <Typography variant={'body2'}>Join the quintessential newsletter!</Typography>
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
            <HeaderLinkButton ButtonProps={{ size: 'small', href: '/' }}>Home</HeaderLinkButton>
            <HeaderLinkButton ButtonProps={{ size: 'small', href: '/docs' }}>DOCS</HeaderLinkButton>
            <HeaderLinkButton ButtonProps={{ size: 'small', href: '/get-started' }}>
              GET STARTED
            </HeaderLinkButton>
          </Box>
        </Box>
      </Box>

      <Box mt={4}>
        <Copyright />
      </Box>
    </Box>
  );
};

export default Footer;
