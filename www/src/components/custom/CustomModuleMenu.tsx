import { FC } from 'react';
import { Button } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomMenuItem from './CustomMenuItem';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={6}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
    '& a': {
      textDecoration: 'none',
      color: theme.palette.text.secondary,
      display: 'flex',
      alignItems: 'center',
    },
  },
}));

const CustomModuleMenu: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick} endIcon={<KeyboardArrowDownIcon />}>
        MODULES
      </Button>
      <StyledMenu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
        <CustomMenuItem>CMS</CustomMenuItem>
        <CustomMenuItem>MAILS</CustomMenuItem>
        <CustomMenuItem>STORAGE</CustomMenuItem>
      </StyledMenu>
    </>
  );
};

export default CustomModuleMenu;
