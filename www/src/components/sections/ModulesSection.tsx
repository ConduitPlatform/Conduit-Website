import * as React from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import ModuleCard from '../custom/ModuleCard';
import DataArrayIcon from '@mui/icons-material/DataArray';
import MailIcon from '@mui/icons-material/Mail';
import SaveIcon from '@mui/icons-material/Save';

export default function ModulesSection() {
  return (
    <>
      <Divider sx={{ my: 8 }}>Stop making the same stuff twice</Divider>
      <Grid container spacing={3} padding={'30px'}>
        <Grid item md={4} sm={6} xs={12}>
          <ModuleCard
            title="CMS"
            subtitle={
              <>
                <Typography>
                  A full fledged schema-editor. You can even create your own custom endpoint!
                </Typography>
                <ul>
                  <li>Description</li>
                  <li>Description</li>
                  <li>Description</li>
                </ul>
              </>
            }
            icon={<DataArrayIcon />}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <ModuleCard
            title="MAILS"
            subtitle={
              <>
                <Typography>
                  Create, send and manage your emails, syncing them via multiple providers.
                </Typography>
                <ul>
                  <li>Description</li>
                  <li>Description</li>
                  <li>Description</li>
                </ul>
              </>
            }
            icon={<MailIcon />}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <ModuleCard
            title="STORAGE"
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
    </>
  );
}
