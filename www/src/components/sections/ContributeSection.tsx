import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';
import * as React from 'react';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import Link from '../../Link';
const ContributeSection: FC = () => {
  return (
    <Box mt={[16, 20]}>
      <Typography gutterBottom align={'center'} variant={'h3'}>
        <strong>Join the Conduit Community</strong>
      </Typography>
      <Typography align={'center'} variant={'h5'}>
        Your contribution will help improve conduit!
        <br />
      </Typography>

      <Box display="flex" mt={6} mb={1} justifyContent={'center'}>
        <Button
          href={'/contribute'}
          component={Link}
          endIcon={<PeopleOutlinedIcon />}
          color={'secondary'}
          variant={'contained'}
          size={'large'}>
          <Typography align={'center'}>
            <strong>Join the Community</strong>
          </Typography>
        </Button>
      </Box>
      <Typography align={'center'}>
        Lets make conduit great <strong>Together!</strong>
      </Typography>
    </Box>
  );
};

export default ContributeSection;
