import * as React from 'react';
import { Box, Typography } from '@mui/material';
import ModuleCard from '../custom/ModuleCard';
import Authentication from '../../../public/moduleIcons/authentication.svg';
import Chat from '../../../public/moduleIcons/chat.svg';
import Emails from '../../../public/moduleIcons/emails.svg';
import Forms from '../../../public/moduleIcons/forms.svg';
import Storage from '../../../public/moduleIcons/storage.svg';
import Notifications from '../../../public/moduleIcons/notifications.svg';
import { ViewModuleTwoTone } from '@mui/icons-material';
import CustomCarousel from '../custom/CustomCarousel';

export default function ModulesSection() {
  return (
    <Box mt={[12, 16]}>
      <Box py={3}>
        <Typography mb={1} alignItems={'center'} display={'flex'} variant={'h4'}>
          <ViewModuleTwoTone sx={{ width: 40, height: 40, mr: 1 }} color={'secondary'} />
          <strong> Build a backend in minutes</strong>
        </Typography>
        <Typography variant={'body1'}>with various modules Conduit has to offer!</Typography>
      </Box>
      <Box>
        <CustomCarousel maxSteps={4}>
          <ModuleCard
            title="MAILS"
            href="/docs/modules/email/"
            subtitle="This module is used for
      sending e-mails base on templates or not via any plugin or code."
            listItems={[
              'Upload your email templates on email provider account.',
              'Download created email templates from email provider to your local database.',
              'Email variables are also supported',
            ]}
            icon={<Emails />}
          />
          <ModuleCard
            title="STORAGE"
            href="/docs/modules/storage"
            subtitle="Containers and folders make
       it so much easier to go through your files!!"
            listItems={['description1', 'description2']}
            icon={<Storage />}
          />
          <ModuleCard
            title="AUTHENTICATION"
            href="/docs/modules/authentication/"
            subtitle="The authentication module
       is a module that offers authentication in multiple ways."
            listItems={[
              'Local authentication with email/password',
              'Optional 2FA supported on all strategies',
              'Optional Account linking',
            ]}
            icon={<Authentication />}
          />
          <ModuleCard
            title="FORMS"
            href="/docs/modules/forms/"
            subtitle="Simple form submission support.
       Mostly a glue for various Conduit modules since we don't have a workflow creation tool"
            listItems={[
              'Local authentication with email/password',
              'Optional 2FA supported on all strategies',
              'Optional Account linking',
            ]}
            icon={<Forms />}
          />
          <ModuleCard
            title="NOTIFICATIONS"
            href="/docs/modules/push-notifications/"
            subtitle="Handles sending push notifications to users"
            listItems={[
              'Compatible with Firebase Push Notification Service',
              'Easily configurable',
              'Failover baked-in',
            ]}
            icon={<Notifications />}
          />
          <ModuleCard
            title="CHAT"
            href="/docs/modules/chat"
            subtitle="Allows communication between many users with a simple to use UI"
            listItems={[
              'Allows multiple room creation',
              'Invite users to your room',
              'Delete messages on the fly',
            ]}
            icon={<Chat />}
          />
        </CustomCarousel>
      </Box>
    </Box>
  );
}
