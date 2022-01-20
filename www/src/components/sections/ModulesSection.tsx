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
            subtitle={
              <>
                <Typography>
                  A full fledged schema-editor. You can even create your own custom endpoint!
                </Typography>
                <ul>
                  <li>Create any content type(schema)</li>
                  <li>Create collections based on said types</li>
                  <li>Expose content through GraphQL</li>
                </ul>
              </>
            }
            icon={<DataArrayIcon />}
          />
        </Grid>
        <Grid item display="flex" md={4} sm={6} xs={12}>
          <ModuleCard
            title="MAILS"
            href="/docs/modules/email/"
            subtitle={
              <>
                <Typography>
                  Create, send and manage your emails, syncing them via multiple providers.
                </Typography>
                <ul>
                  <li>Upload your email templates on email provider account.</li>
                  <li>
                    Download created email templates from email provider to your local database.
                  </li>
                  <li>Email variables are also supported.</li>
                </ul>
              </>
            }
            icon={<MailIcon />}
          />
        </Grid>
        <Grid item display="flex" md={4} sm={6} xs={12}>
          <ModuleCard
            title="STORAGE"
            href="/docs/modules/storage"
            subtitle={
              <>
                <Typography>
                  Containers and folders make it so much easier to go through your files!!
                </Typography>
                <ul>
                  <li>Description</li>
                  <li>Description</li>
                  <li>Description</li>
                </ul>
              </>
            }
            icon={<SaveIcon />}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
