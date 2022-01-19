import { styled } from '@mui/material/styles';
import { Tabs } from '@mui/material';

const CustomTabs = styled(Tabs)(({ theme }) => ({
  marginTop: 2,
  padding: theme.spacing(1),
  borderRadius: '8px',
  '& .MuiTab-root': {
    padding: theme.spacing(1),
    margin: 8,
    minWidth: 70,
    minHeight: 0,
  },
  '& .Mui-selected': {
    color: 'inherit !important',
    borderRadius: 8,
    background: theme.palette.secondary.dark,
  },
  '& .MuiTabs-indicator': {
    display: 'none',
  },
}));

export default CustomTabs;
