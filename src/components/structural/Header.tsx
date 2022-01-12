import * as React from 'react';
import { FC } from 'react';
import { AppBar, Grid, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomAppBar = styled(AppBar)(
  ({ theme }) => `
  padding: ${theme.spacing(3, 2)};
`
);
const styles = {
  displayGap: { display: 'flex', alignItems: 'center', gap: '0 20px' },
};

const Header: FC = () => {
  return (
    <CustomAppBar position={'sticky'} color={'inherit'}>
      <Grid gap={'15px'} container justifyContent={'space-between'} alignItems={'center'}>
        <Box sx={styles.displayGap}>
          <Button variant={'outlined'} color={'info'}>
            CONDUIT LOGO
          </Button>
          <Button color={'secondary'} href={'/'}>
            Home
          </Button>
          <Button href={'/docs'}>Docs</Button>
        </Box>
        <Box sx={styles.displayGap}>
          <Button color={'info'}>Github stars</Button>
          <Button variant={'contained'} color={'info'}>
            GET STARTED
          </Button>
        </Box>
      </Grid>
    </CustomAppBar>
  );
};

export default Header;
