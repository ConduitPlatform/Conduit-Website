import CMS from '../../public/moduleIcons/cms.svg';
import * as React from 'react';
import Storage from '../../public/moduleIcons/storage.svg';
import Authentication from '../../public/moduleIcons/authentication.svg';
import Emails from '../../public/moduleIcons/emails.svg';

const moduleMenuItems = [
  {
    title: 'CMS',
    icon: <CMS />,
    description:
      'Create custom Schemas, Queries and leverage automatically-created CRUD operations.',
    link: '/storage',
  },

  {
    title: 'MAILS',
    icon: <Emails />,
    description:
      'Connect with your favourite Email Provider to deliver transactional emails and manage templates.',
    link: '/storage',
  },

  {
    title: 'STORAGE',
    icon: <Storage />,
    description: 'Upload files using Azure, Google or Amazon Storage, with a consistent API',
    link: '/storage',
  },

  {
    title: 'AUTHENTICATION',
    icon: <Authentication />,
    description:
      'Authenticate Users with email/password or social logins. Did we mention it supports 2FA as well?',
    link: '/storage',
  },
];
export default moduleMenuItems;
