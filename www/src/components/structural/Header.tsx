import * as React from 'react';
import { FC } from 'react';
import { AppBar, Grid, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomAppBar = styled(AppBar)(
  ({ theme }) => `
  padding: ${theme.spacing(3, 4)};

`
);

const styles = {
  headerLayout: {
    margin: 'auto',
    gap: 2,
    maxWidth: 'xl',
  },
} as const;

const Header: FC = () => {
  return (
    <CustomAppBar elevation={0} position={'sticky'} color={'inherit'}>
      <Box>
        <Grid
          sx={styles.headerLayout}
          container
          justifyContent={'space-between'}
          alignItems={'center'}>
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
