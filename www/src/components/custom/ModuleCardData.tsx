import React from 'react';
import Authentication from '../../../public/moduleIcons/authentication.svg';
import Chat from '../../../public/moduleIcons/chat.svg';
import Emails from '../../../public/moduleIcons/emails.svg';
import Forms from '../../../public/moduleIcons/forms.svg';
import Storage from '../../../public/moduleIcons/storage.svg';
import Notifications from '../../../public/moduleIcons/notifications.svg';
import SMS from '../../../public/moduleIcons/sms.svg';
import CMS from '../../../public/moduleIcons/cms.svg';
import Database from '../../../public/moduleIcons/database.svg';

export const ModuleCardData = [
  {
    title: 'CMS',
    href: '/docs/modules/cms/',
    subtitle: 'Create custom Schemas, Queries and leverage automatically-created CRUD operations.',
    icon: <CMS />,
  },
  {
    title: 'Mails',
    href: '/docs/modules/email/',
    subtitle:
      'Connect with your favourite Email Provider to deliver transactional emails and manage templates.',
    icon: <Emails />,
  },
  {
    title: 'Storage',
    href: '/docs/modules/storage',
    subtitle: 'Upload files using Azure, Google or Amazon Storage, with a consistent API',
    icon: <Storage />,
  },
  {
    title: 'Authentication',
    href: '/docs/modules/authentication/',
    subtitle:
      'Authenticate Users with email/password or social logins. Did we mention it supports 2FA as well?',
    icon: <Authentication />,
  },
  {
    title: 'Forms',
    href: '/docs/modules/forms/',
    subtitle: 'Simple form submission support. Create your form and forward replies to an email.',
    icon: <Forms />,
  },
  {
    title: 'Notifications',
    href: '/docs/modules/push-notifications/',
    subtitle: 'Connect your push notification provider and send notifications easily.',
    icon: <Notifications />,
  },
  {
    title: 'Chat',
    href: '/docs/modules/chat',
    subtitle: 'Leverage web sockets to create realtime chat applications in 5 minutes or less.',
    icon: <Chat />,
  },
  {
    title: 'Database',
    href: '/docs/modules/database',
    subtitle:
      'Use eithe Mongo or SQL databases, with a consistent Query interface to power your app',
    icon: <Database />,
  },
  {
    title: 'SMS',
    href: '/docs/modules/email/',
    subtitle: 'Provides sms delivery functionality in conduit, focused mainly in 2FA currently',
    icon: <SMS />,
  },
];
