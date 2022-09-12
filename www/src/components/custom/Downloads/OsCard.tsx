import React, { FC } from 'react';

import {
  Box,
  ButtonBase,
  Card,
  Checkbox,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

interface Props {
  title: string;
  subtitle: string;
  checked?: boolean;
  handleChecked: () => void;
}

const OSCard: FC<Props> = ({ title, subtitle, checked, handleChecked }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        height: '130px',
        border: checked ? `2px solid ${theme.palette.secondary.main}` : '2px solid #F7F7F8',
        borderRadius: '24px',
        display: 'flex',
        alignItems: 'center',
      }}
      elevation={0}>
      <ButtonBase onClick={() => handleChecked()} sx={{ display: 'block', textAlign: 'initial' }}>
        <Box display="flex" p={4} gap={'34px'} alignItems="center">
          <Checkbox checked={checked ?? false} color="secondary" onClick={() => handleChecked()} />
          <Box display="flex" gap={1} flexDirection="column">
            <Typography variant="body1">{title}</Typography>
            <Typography variant="body2">{subtitle}</Typography>
          </Box>
        </Box>
      </ButtonBase>
    </Card>
  );
};

export default OSCard;
