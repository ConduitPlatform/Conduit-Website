import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomSnapBox = styled(Box)(({ theme }) => ({
  overflow: 'auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill,minmax(375px, 1fr))',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(9,minmax(275px, 400px))',
  },

  scrollSnapType: 'x mandatory',
  '&::-webkit-scrollbar': {
    height: 8,
  },
  '&::-webkit-scrollbar-thumb': {
    bgcolor: 'background.paper',
    border: `1px solid ${theme.palette.secondary.dark}`,
    borderRadius: 8,
  },
  '&>*': {
    scrollSnapAlign: 'center',
  },
}));

export default CustomSnapBox;
