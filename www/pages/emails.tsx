import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import EmailIcon from '../public/icons/email.svg';
import Send from '../public/icons/send.svg';
import EmailTemplates from '../public/icons/emailTemplates.svg';
import Upload from '../public/icons/upload.svg';

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
          icon: <Send />,
        },
        {
          title: 'Create your own email templates',
          description: 'Add custom variables for easier customization',
          url: '123',
          icon: <EmailTemplates />,
        },
        {
          title: 'Upload your templates to your own provider ',
          description: 'Mailgun, sendgrid, mandril, Smtp',
          url: '123',
          icon: <Upload />,
        },
      ]}
    />
  );
};

export default Database;
