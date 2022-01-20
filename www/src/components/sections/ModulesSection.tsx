import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ModuleCard from '../custom/ModuleCard';
import DataArrayIcon from '@mui/icons-material/DataArray';
import MailIcon from '@mui/icons-material/Mail';
import SaveIcon from '@mui/icons-material/Save';

export default function ModulesSection() {
  return (
    <Box mt={[8, 12, 16]}>
      <Box py={3}>
        <Typography variant={'h4'}>
          <strong>Build a backend in minutes</strong>
        </Typography>
        <Typography variant={'body1'}>with various tools conduit has to offer!</Typography>
      </Box>
      <Grid container spacing={3} padding={'30px'}>
        <Grid item display="flex" md={4} sm={6} xs={12}>
          <ModuleCard
            title="CMS"
            href="/docs/modules/cms/"
            subtitle="A full fledged schema-editor. You can even create your own custom endpoint!"
            listItems={[
              'Create any content type(schema)',
              'Create collections based on said types',
              'Expose content through GraphQL',
            ]}
            icon={<DataArrayIcon />}
          />
        </Grid>
        <Grid item display="flex" md={4} sm={6} xs={12}>
          <ModuleCard
            title="MAILS"
            href="/docs/modules/email/"
            subtitle="Create, send and manage your emails, syncing them via multiple providers."
            listItems={[
              'Upload your email templates on email provider account.',
              'Download created email templates from email provider to your local database.',
              'Email variables are also supported',
            ]}
            icon={<MailIcon />}
          />
        </Grid>
        <Grid item display="flex" md={4} sm={6} xs={12}>
          <ModuleCard
            title="STORAGE"
            href="/docs/modules/storage"
            subtitle="Containers and folders make it so much easier to go through your files!!"
            listItems={['description1', 'description2']}
            icon={<SaveIcon />}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
