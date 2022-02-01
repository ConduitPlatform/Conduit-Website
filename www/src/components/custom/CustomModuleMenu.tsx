import { FC } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomMenuItem from './CustomMenuItem';
import CMS from '../../../public/moduleIcons/cms.svg';
import Emails from '../../../public/moduleIcons/emails.svg';
import Authentication from '../../../public/moduleIcons/authentication.svg';
import Storage from '../../../public/moduleIcons/storage.svg';

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
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    background: theme.palette.background.paper,
    width: '50%',
    maxWidth: 600,
    minWidth: 300,
    boxShadow: `0px 12px 14px 1px rgba(0,0,0,0.2)`,
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

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        color={'secondary'}
        variant={'outlined'}
        onClick={handleClick}
        endIcon={
          <KeyboardArrowDownIcon
            sx={{ transform: `rotate(${!!anchorEl ? '180deg' : '0deg'})`, transition: '0.2s' }}
          />
        }>
        MODULES
      </Button>
      <StyledMenu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
        {/* <CustomMenuItem title="CMS" icon={<CMS />}  />
        <CustomMenuItem title="authentication" icon={<Authentication />} />
        <CustomMenuItem title="email" icon={<Emails />} /> */}
        <CustomMenuItem title="storage" icon={<Storage />} link="/storage" />
      </StyledMenu>
    </>
  );
};

export default CustomModuleMenu;
