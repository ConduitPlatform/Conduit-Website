import * as React from 'react';
import { Divider, Grid } from '@mui/material';
import ModuleCard from '../../custom/ModuleCard';
import DataArrayIcon from '@mui/icons-material/DataArray';
import MailIcon from '@mui/icons-material/Mail';
import SaveIcon from '@mui/icons-material/Save';
import PaymentIcon from '@mui/icons-material/Payment';

export default function LandingPageLower() {
  return (
    <>
      <Divider sx={{ my: 8 }}>Stop making the same stuff twice</Divider>

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
            subtitle="Create, send and manage your emails, syncing them via multiple providers."
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
            subtitle="Manage customers, products, subscriptions and transactions!"
            icon={<PaymentIcon />}
          />
        </Grid>
      </Grid>
    </>
  );
}
