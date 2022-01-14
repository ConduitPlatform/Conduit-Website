import * as React from 'react';
import { FC, useContext } from 'react';
import { Box, Button, FormHelperText, TextField, Typography, useTheme } from '@mui/material';
import Copyright from '../../Copyright';
import Image from 'next/image';
import quintLogo from '../../../public/icons/quint-logo.svg';
import { ColorModeContext } from '../../../pages/_app';
import CustomSwitch from '../custom/CustomSwitch';

const Footer: FC = () => {
  const muiTheme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <Box paddingY={2} paddingX={4}>
      <Box
        margin={'auto'}
        maxWidth={'xl'}
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}>
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
          <Box display={'flex'} gap={3}>
            <Button variant={'outlined'}>Home</Button>
            <Button variant={'outlined'}>DOCS</Button>
            <Button variant={'outlined'}>GET STARTED</Button>
          </Box>
        </Box>
      </Box>

      <Box mt={4} mb={2}>
        <Copyright />
      </Box>
    </Box>
  );
};

export default Footer;
