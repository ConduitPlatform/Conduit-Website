import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import EmailIcon from '../public/icons/email.svg';
import Send from '../public/icons/send.svg';
import EmailTemplates from '../public/icons/emailTemplates.svg';
import Upload from '../public/icons/upload.svg';
import { NextSeo } from 'next-seo';

const Emails = () => {
  const SEO = {
    title: 'Emails',
    description: 'Emails Module',
    openGraph: {
      title: 'Emails',
      description: 'Emails Module',
      article: {
        tags: ['emails', 'communicate'],
      },
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <ModulePage
        moduleName="Emails"
        title="Most web applications typically require a way to send e-mails to users.
      The Email module serves this very purpose."
        docsLink="/docs/modules/emails"
        img={<EmailIcon />}
        features={[
          {
            title: 'Send emails',
            description: 'Lucky you! You may now start sending Emails!',
            url: '/docs/modules/email/get-started#sending-emails',
            icon: <Send />,
          },
          {
            title: 'Email templates',
            description:
              'Create and edit your own templates. Support for template variables using handlebars.',
            url: '/docs/modules/email/get-started#templates',
            icon: <EmailTemplates />,
          },
          {
            title: 'Email Providers',
            description:
              'Sync your emails with the provider of your choice. The available providers are Mailgun, Sendgrid, Mandril and Smtp.',
            url: '/docs/modules/email/get-started#import-a-template',
            icon: <Upload />,
          },
        ]}
      />
    </>
  );
};

export default Emails;
