import CMS from '../../public/moduleIcons/cms.svg';
import * as React from 'react';
import Authentication from '../../public/moduleIcons/authentication.svg';
import Emails from '../../public/moduleIcons/emails.svg';
import Database from '../../public/moduleIcons/database.svg';

const moduleMenuItems = [
  {
    title: 'CMS',
    icon: <CMS />,
    description:
      'Create custom Schemas, Queries and leverage automatically-created CRUD operations.',
    link: '/cms',
  },
  {
    title: 'Authentication',
    icon: <Authentication />,
    description: 'Authenticate users via multiple platforms',
    link: '/authentication',
  },
  {
    title: 'Mails',
    icon: <Emails />,
    description:
      'Connect with your favourite Email Provider to deliver transactional emails and manage templates.',
    link: '/emails',
  },
  {
    title: 'Database',
    icon: <Database />,
    description: 'The glue between the database engine and Conduit. Query your data with ease.',
    link: '/database',
  },
];
export default moduleMenuItems;
