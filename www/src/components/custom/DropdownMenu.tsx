import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useCallback, useEffect, useState } from 'react';

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

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [releases, setReleases] = useState([]);
  const open = Boolean(anchorEl);

  const getReleases = useCallback(async () => {
    const res = await fetch('https://api.github.com/repos/mui-org/material-ui/releases');
    return res.json();
  }, []);

  useEffect(() => {
    getReleases().then((res) => {
      const lastReleases = res.splice(0, 5);
      setReleases(lastReleases);
    });
  }, [getReleases]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color={'secondary'}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}>
        Releases
      </Button>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {releases.map((release: any, index) => {
          return (
            <MenuItem onClick={handleClose} disableRipple key={index}>
              <a className="menu-item" href={release?.html_url} target="_blank" rel="noreferrer">
                {release?.tag_name}
              </a>
            </MenuItem>
          );
        })}
      </StyledMenu>
    </div>
  );
};

export default DropdownMenu;
