import React from 'react';
import Authentication from '../../../public/moduleIcons/authentication.svg';
import Chat from '../../../public/moduleIcons/chat.svg';
import Emails from '../../../public/moduleIcons/emails.svg';
import Forms from '../../../public/moduleIcons/forms.svg';
import Storage from '../../../public/moduleIcons/storage.svg';
import Notifications from '../../../public/moduleIcons/notifications.svg';

export const ModuleCardData = [
  {
    title: 'CMS',
    href: '/docs/modules/cms/',
    subtitle:
      'This module facilitates the management of content types through the generation of db level schemas.',
    icon: <Emails />,
  },
  {
    title: 'MAILS',
    href: '/docs/modules/email/',
    subtitle:
      'This module is used for sending e-mails base on templates or not via any plugin or code.',
    icon: <Emails />,
  },
  {
    title: 'STORAGE',
    href: '/docs/modules/storage',
    subtitle: 'Containers and folders make it so much easier to go through your files!!',
    icon: <Storage />,
  },
  {
    title: 'AUTHENTICATION',
    href: '/docs/modules/authentication/',
    subtitle: 'The authentication module is a module that offers authentication in multiple ways.',
    icon: <Authentication />,
  },
  {
    title: 'FORMS',
    href: '/docs/modules/forms/',
    subtitle:
      'Simple form submission support. Mostly a glue for various Conduit modules since we dont have a workflow creation tool',
    icon: <Forms />,
  },
  {
    title: 'NOTIFICATIONS',
    href: '/docs/modules/push-notifications/',
    subtitle: 'Handles sending push notifications to users.',
    icon: <Notifications />,
  },
  {
    title: 'CHAT',
    href: '/docs/modules/chat',
    subtitle: 'Allows communication between many users with a simple to use UI.',
    icon: <Chat />,
  },
  {
    title: 'DATABASE',
    href: '/docs/modules/database',
    subtitle:
      'This module allows for basic functionality on both SQL DBs through Sequelize and MongoDB through Mongoose.',
    icon: <Emails />,
  },
  {
    title: 'SMS',
    href: '/docs/modules/email/',
    subtitle: 'Provides sms delivery functionality in conduit, focused mainly in 2FA currently',
    icon: <Emails />,
  },
];
