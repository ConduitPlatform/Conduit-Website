import * as React from 'react';
import { FC } from 'react';
import {
  Box,
  Button,
  Divider,
  FormHelperText,
  SxProps,
  TextField,
  Theme,
  Typography,
} from '@mui/material';
import Copyright from '../../Copyright';
import ContactLinks from '../custom/ContactLinks';
import ConduitLogo from '../../../public/conduitLogo.svg';

const svgResponsiveStyle: SxProps = {
  '& *': {
    fill: (theme: Theme) => theme.palette.text.primary,
  },
};

const Footer: FC = () => {
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
        maxWidth={'lg'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        flexWrap={'wrap'}
        rowGap={3}>
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
        <Box display={'flex'} gap={4} justifyContent={'center'} />
      </Box>
      <Box maxWidth={'lg'} margin={'auto'} mt={4} mb={3}>
        <Divider />
      </Box>
      <Box
        margin={'auto'}
        maxWidth={'lg'}
        display={'flex'}
        justifyContent={'space-between'}
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
