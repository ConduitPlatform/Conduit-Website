import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import EmailIcon from '../public/icons/email.svg';
import PuzzleIcon from '../public/icons/puzzle.svg';
import DatabaseIcon from '../public/moduleIcons/database.svg';

const Database = () => {
  return (
    <ModulePage
      moduleName="Emails"
      title="Makes sending emails and creating your own email templates an easy experience"
      docsLink="/docs/modules/database"
      img={<EmailIcon />}
      features={[
        {
          title: 'Send emails',
          description: 'As fast as possible',
          url: '123',
          icon: <DatabaseIcon />,
        },
        {
          title: 'Create your own email templates',
          description: 'Add custom variables for easier customization',
          url: '123',
          icon: <PuzzleIcon />,
        },
        {
          title: 'Upload your templates to your own provider ',
          description: 'Mailgun, sendgrid, mandril, Smtp',
          url: '123',
          icon: <PuzzleIcon />,
        },
      ]}
    />
  );
};

export default Database;
