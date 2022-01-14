import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, Grid } from '@mui/material';
import ModuleCard from '../../custom/ModuleCard';
import DataArrayIcon from '@mui/icons-material/DataArray';
import MailIcon from '@mui/icons-material/Mail';
import SaveIcon from '@mui/icons-material/Save';
import PaymentIcon from '@mui/icons-material/Payment';

export default function LandingPageLower() {
  return (
    <Box sx={{ my: 22 }}>
      <Divider>
        <Typography variant="button" component="h1">
          Stop making the same stuff twice
        </Typography>
      </Divider>
      <Grid container spacing={10} padding={'30px'}>
        <Grid item md={3} sm={6} xs={12}>
          <ModuleCard
            title="CMS"
            subtitle="A full fledged schema-editor. You can even create your own custom endpoint!"
            icon={<DataArrayIcon />}
          />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <ModuleCard
            title="MAILS"
            subtitle="Create, send and manage your emails. You can sync them via multiple providers available."
            icon={<MailIcon />}
          />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <ModuleCard
            title="STORAGE"
            subtitle="Containers and folders make it so much easier to go through your files!"
            icon={<SaveIcon />}
          />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <ModuleCard
            title="PAYMENTS"
            subtitle="Manage customers, products, subscriptions and transactions, all in one module."
            icon={<PaymentIcon />}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
