import React, { FC } from 'react';
import {
  Box,
  ButtonBase,
  Card,
  Checkbox,
  Icon,
  Typography,
  useTheme,
  SvgIcon,
} from '@mui/material';

interface Props {
  title: string;
  checked?: boolean;
  img: any;
  handleChecked: () => void;
}

const OSCard: FC<Props> = ({ title, img, checked, handleChecked }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        height: '100px',
        border: checked ? `2px solid ${theme.palette.secondary.main}` : '2px solid #F7F7F8',
        borderRadius: '24px',
        display: 'flex',
        alignItems: 'center',
      }}
      elevation={0}>
      <ButtonBase onClick={() => handleChecked()} sx={{ display: 'block' }}>
        <Box display="flex" p={4} gap={'34px'} alignItems="center">
          <Checkbox checked={checked ?? false} color="secondary" onClick={() => handleChecked()} />
          <Box width="100%" display="flex" gap={1} alignItems="center">
            <Typography variant="body1">{title}</Typography>
            {img}
          </Box>
        </Box>
      </ButtonBase>
    </Card>
  );
};

export default OSCard;
