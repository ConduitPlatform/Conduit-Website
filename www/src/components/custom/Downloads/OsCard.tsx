import React, { FC, ReactNode } from 'react';
import { Box, ButtonBase, Card, Checkbox, Typography, useTheme } from '@mui/material';

interface Props {
  title: string;
  checked?: boolean;
  img: ReactNode;
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
      <ButtonBase onClick={() => handleChecked()} sx={{ display: 'block', width: '100%' }}>
        <Box display="flex" p={4} gap={'34px'} alignItems="center" justifyContent="space-between">
          <Checkbox checked={checked ?? false} color="secondary" onClick={() => handleChecked()} />
          <Box display="flex" gap={4} alignItems="center">
            <Typography variant="body1">{title}</Typography>
          </Box>
          {img}
        </Box>
      </ButtonBase>
    </Card>
  );
};

export default OSCard;
