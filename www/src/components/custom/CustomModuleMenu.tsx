import { FC, useEffect } from 'react';
import { Button, Grow, Theme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomMenuItem from './CustomMenuItem';
import { ModuleCardData } from './ModuleCardData';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={6}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    TransitionComponent={Grow}
    {...props}
  />
))(({ theme }) => ({
  top: '23px',
  '& .MuiPaper-root': {
    borderTop: `1px solid ${theme.palette.background.default}`,
    background: theme.palette.background.paper,
    width: '50%',
    minWidth: '650px',
    overflow: 'hidden',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,

    boxShadow: `0px 12px 14px 1px rgba(0,0,0,0.2), inset 0 0 0 0.2px ${theme.palette.divider}`,
  },
  '& .MuiList-root': {
    display: 'grid',
    gap: 8,
    padding: 12,
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

const CustomModuleMenu: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  useEffect(() => {
    setAnchorEl(null);
  }, [matches]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        color={'inherit'}
        onClick={handleClick}
        sx={{ '& .MuiButton-endIcon': { marginLeft: 0 } }}
        endIcon={
          <KeyboardArrowDownIcon
            sx={{ transform: `rotate(${!!anchorEl ? '180deg' : '0deg'})`, transition: '0.2s' }}
          />
        }>
        MODULES
      </Button>
      <StyledMenu
        disableScrollLock
        transitionDuration={500}
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        onClick={handleClose}>
        {ModuleCardData.map((item) => (
          <CustomMenuItem
            key={item.title}
            description={item.subtitle}
            title={item.title}
            icon={item.icon}
            link={item.href}
          />
        ))}
      </StyledMenu>
    </>
  );
};

export default CustomModuleMenu;
