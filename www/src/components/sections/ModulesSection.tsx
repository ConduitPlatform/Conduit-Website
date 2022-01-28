import * as React from 'react';
import { Box, Typography } from '@mui/material';
import ModuleCard from '../custom/ModuleCard';
import DataArrayIcon from '@mui/icons-material/DataArray';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import CustomCarousel from '../custom/CustomCarousel';

export default function ModulesSection() {
  return (
    <Box mt={[12, 16]}>
      <Box py={3}>
        <Typography mb={1} alignItems={'center'} display={'flex'} variant={'h4'}>
          <ViewModuleIcon sx={{ width: 40, height: 40, mr: 1 }} color={'secondary'} />
          <strong> Build a backend in minutes</strong>
        </Typography>
        <Typography variant={'body1'}>with various modules Conduit has to offer!</Typography>
      </Box>
      <Box>
        <CustomCarousel maxSteps={4}>
          <ModuleCard
            title="CMS"
            href="/docs/modules/cms/"
            subtitle="This module facilitates the management of content
             types through the generation of db level schemas."
            listItems={[
              'Create any content type(schema)',
              'Create collections based on said types',
              'Expose content through GraphQL',
              'Pagination, sorting etc',
            ]}
            icon={<DataArrayIcon />}
          />
          <ModuleCard
            title="CMS"
            href="/docs/modules/cms/"
            subtitle="This module facilitates the management
             of content types through the generation of db level schemas."
            listItems={[
              'Create any content type(schema)',
              'Create collections based on said types',
              'Expose content through GraphQL',
              'Pagination, sorting etc',
            ]}
            icon={<DataArrayIcon />}
          />
          <ModuleCard
            title="CMS"
            href="/docs/modules/cms/"
            subtitle="This module facilitates the management
             of content types through the generation of db level schemas."
            listItems={[
              'Create any content type(schema)',
              'Create collections based on said types',
              'Expose content through GraphQL',
              'Pagination, sorting etc',
            ]}
            icon={<DataArrayIcon />}
          />
        </CustomCarousel>
      </Box>
      {/*<Grid container spacing={3}>*/}
      {/*  <Grid item display="flex" md={4} sm={6} xs={12}>*/}
      {/*    <ModuleCard*/}
      {/*      title="CMS"*/}
      {/*      href="/docs/modules/cms/"*/}
      {/*      subtitle="This module facilitates the management
       of content types through the generation of db level schemas."*/}
      {/*      listItems={[*/}
      {/*        'Create any content type(schema)',*/}
      {/*        'Create collections based on said types',*/}
      {/*        'Expose content through GraphQL',*/}
      {/*        'Pagination, sorting etc',*/}
      {/*      ]}*/}
      {/*      icon={<DataArrayIcon />}*/}
      {/*    />*/}
      {/*  </Grid>*/}
      {/*  <Grid item display="flex" md={4} sm={6} xs={12}>*/}
      {/*    <ModuleCard*/}
      {/*      title="MAILS"*/}
      {/*      href="/docs/modules/email/"*/}
      {/*      subtitle="This module is used for
      sending e-mails base on templates or not via any plugin or code."*/}
      {/*      listItems={[*/}
      {/*        'Upload your email templates on email provider account.',*/}
      {/*        'Download created email templates from email provider to your local database.',*/}
      {/*        'Email variables are also supported',*/}
      {/*      ]}*/}
      {/*      icon={<MailIcon />}*/}
      {/*    />*/}
      {/*  </Grid>*/}
      {/*  <Grid item display="flex" md={4} sm={6} xs={12}>*/}
      {/*    <ModuleCard*/}
      {/*      title="STORAGE"*/}
      {/*      href="/docs/modules/storage"*/}
      {/*      subtitle="Containers and folders make
       it so much easier to go through your files!!"*/}
      {/*      listItems={['description1', 'description2']}*/}
      {/*      icon={<SaveIcon />}*/}
      {/*    />*/}
      {/*  </Grid>*/}
      {/*  <Grid item display="flex" md={4} sm={6} xs={12}>*/}
      {/*    <ModuleCard*/}
      {/*      title="AUTHENTICATION"*/}
      {/*      href="/docs/modules/authentication/"*/}
      {/*      subtitle="The authentication module
       is a module that offers authentication in multiple ways."*/}
      {/*      listItems={[*/}
      {/*        'Local authentication with email/password',*/}
      {/*        'Optional 2FA supported on all strategies',*/}
      {/*        'Optional Account linking',*/}
      {/*      ]}*/}
      {/*      icon={<PeopleAltIcon />}*/}
      {/*    />*/}
      {/*  </Grid>*/}
      {/*  <Grid item display="flex" md={4} sm={6} xs={12}>*/}
      {/*    <ModuleCard*/}
      {/*      title="FORMS"*/}
      {/*      href="/docs/modules/forms/"*/}
      {/*      subtitle="Simple form submission support.
       Mostly a glue for various Conduit modules since we don't have a workflow creation tool"*/}
      {/*      listItems={[*/}
      {/*        'Local authentication with email/password',*/}
      {/*        'Optional 2FA supported on all strategies',*/}
      {/*        'Optional Account linking',*/}
      {/*      ]}*/}
      {/*      icon={<FormatAlignLeftIcon />}*/}
      {/*    />*/}
      {/*  </Grid>*/}
      {/*  <Grid item display="flex" md={4} sm={6} xs={12}>*/}
      {/*    <ModuleCard*/}
      {/*      title="NOTIFICATIONS"*/}
      {/*      href="/docs/modules/push-notifications/"*/}
      {/*      subtitle="Handles sending push notifications to users"*/}
      {/*      listItems={[*/}
      {/*        'Compatible with Firebase Push Notification Service',*/}
      {/*        'Easily configurable',*/}
      {/*        'Failover baked-in',*/}
      {/*      ]}*/}
      {/*      icon={<NotificationsActiveIcon />}*/}
      {/*    />*/}
      {/*  </Grid>*/}
      {/*  <Grid item display="flex" md={4} sm={6} xs={12}>*/}
      {/*    <ModuleCard*/}
      {/*      title="CHAT"*/}
      {/*      href="/docs/modules/chat"*/}
      {/*      subtitle="Allows communication between many users with a simple to use UI"*/}
      {/*      listItems={[*/}
      {/*        'Allows multiple room creation',*/}
      {/*        'Invite users to your room',*/}
      {/*        'Delete messages on the fly',*/}
      {/*      ]}*/}
      {/*      icon={<NotificationsActiveIcon />}*/}
      {/*    />*/}
      {/*  </Grid>*/}
      {/*  <Grid item display="flex" md={4} sm={6} xs={12}>*/}
      {/*    <ModuleCard*/}
      {/*      title="DATABASE"*/}
      {/*      href="/docs/modules/database"*/}
      {/*      subtitle="This module allows for basic
      functionality on both SQL DBs through Sequelize and MongoDB through Mongoose."*/}
      {/*      listItems={[*/}
      {/*        'query language of the module is BSON, since it
       is easy to serialize into string and deserialize into query objects that can be easily
        manipulated in JS',*/}
      {/*        'Many supported operations',*/}
      {/*      ]}*/}
      {/*      icon={<NotificationsActiveIcon />}*/}
      {/*    />*/}
      {/*  </Grid>*/}
      {/*  <Grid item display="flex" md={4} sm={6} xs={12}>*/}
      {/*    <ModuleCard*/}
      {/*      title="SMS"*/}
      {/*      href="/docs/modules/sms"*/}
      {/*      subtitle="Provides sms delivery
       functionality in conduit, focused mainly in 2FA currently"*/}
      {/*      listItems={[*/}
      {/*        'Compatible with Firebase Push Notification Service',*/}
      {/*        'Easily configurable',*/}
      {/*        'Failover baked-in',*/}
      {/*      ]}*/}
      {/*      icon={<NotificationsActiveIcon />}*/}
      {/*    />*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}
    </Box>
  );
}
