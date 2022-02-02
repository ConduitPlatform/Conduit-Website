import CMS from '../../public/moduleIcons/cms.svg';
import * as React from 'react';
import Authentication from '../../public/moduleIcons/authentication.svg';
import Emails from '../../public/moduleIcons/emails.svg';

const moduleMenuItems = [
  {
    title: 'CMS',
    icon: <CMS />,
    description:
      'Create custom Schemas, Queries and leverage automatically-created CRUD operations.',
    link: '/cms',
  },
  {
    title: 'AUTHENTICATION',
    icon: <Authentication />,
    description: 'Authenticate users via multiple platforms',
    link: '/authentication',
  },
  {
    title: 'MAILS',
    icon: <Emails />,
    description:
      'Connect with your favourite Email Provider to deliver transactional emails and manage templates.',
    link: '/emails',
  },
  {
    title: 'DATABASE',
    icon: <Authentication />,
    description: 'One module to rule them all',
    link: '/database',
  },
];
export default moduleMenuItems;
