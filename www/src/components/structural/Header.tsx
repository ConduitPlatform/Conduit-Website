import * as React from 'react';
import { FC, useContext } from 'react';
import { AppBar, Grid, Box, Button, useTheme, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ColorModeContext } from '../../../pages/_app';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  padding: theme.spacing(3, 4),
}));

const styles = {
  headerLayout: {
    margin: 'auto',
    gap: 2,
    maxWidth: 'xl',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
} as const;

const Header: FC = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <CustomAppBar elevation={0} position={'sticky'} color={'inherit'}>
      <Box>
        <Grid sx={styles.headerLayout} container>
          <Box display={'flex'} alignItems={'center'} columnGap={4}>
            <Button variant={'outlined'} color={'info'}>
              CONDUIT LOGO
            </Button>
            <Button color={'secondary'} href={'/'}>
              Home
            </Button>
            <Button href={'/docs'}>Docs</Button>
          </Box>
          <Box display={'flex'} alignItems={'center'} columnGap={4}>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Button color={'info'}>Github stars</Button>
            <Button variant={'contained'} color={'info'}>
              GET STARTED
            </Button>
          </Box>
        </Grid>
      </Box>
    </CustomAppBar>
  );
};

export default Header;
