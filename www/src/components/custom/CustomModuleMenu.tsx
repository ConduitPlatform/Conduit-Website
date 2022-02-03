import { FC, useEffect } from 'react';
import { Button, Grow, Theme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomMenuItem from './CustomMenuItem';
import moduleMenuItems from '../../fixedData/moduleMenuItems';

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
  top: 19.5,
  '& .MuiPaper-root': {
    borderTop: `1px solid ${theme.palette.background.default}`,
    background: theme.palette.background.paper,
    width: '100%',
    maxWidth: 600,
    minWidth: 300,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,

    boxShadow: `0px 12px 14px 1px rgba(0,0,0,0.2), inset 0 0 0 0.2px ${theme.palette.divider}`,
  },
  '& .MuiList-root': {
    display: 'grid',
    gap: 8,
    padding: 8,
    gridTemplateColumns: '1fr 1fr',
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
        endIcon={
          <KeyboardArrowDownIcon
            sx={{ transform: `rotate(${!!anchorEl ? '180deg' : '0deg'})`, transition: '0.2s' }}
          />
        }>
        MODULES
      </Button>
      <StyledMenu
        transitionDuration={500}
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        onClick={handleClose}>
        {moduleMenuItems.map((item) => (
          <CustomMenuItem
            key={item.title}
            description={item.description}
            title={item.title}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </StyledMenu>
    </>
  );
};

export default CustomModuleMenu;
