import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import Attachments from '../public/moduleIcons/attachments.svg';
import FormsIcon from '../public/moduleIcons/formsLg.svg';
import Spam from '../public/moduleIcons/spam.svg';
import Auth from '../public/moduleIcons/localAuthentication.svg';
import { NextSeo } from 'next-seo';

const Forms = () => {
  const SEO = {
    title: 'Forms',
    description: 'Forms Module',
    openGraph: {
      title: 'Forms',
      description: 'Forms Module',
      article: {
        tags: ['forms', 'attachments'],
      },
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <ModulePage
        moduleName="Forms"
        title="Simple form submission module. Create your form and forward replies to an email"
        docsLink="/docs/modules/forms"
        img={<FormsIcon />}
        features={[
          {
            title: 'Creation/submission',
            description:
              'You may delete individual forms and view their submitted replies. You can also view a form specification and edit its fields.',
            url: '/docs/modules/forms/get-started#using-the-admin-panel',
            icon: <Auth />,
          },
          {
            title: 'File Attachments',
            description: 'Enables support for attachment fields in forms.',
            url: '/docs/modules/forms/config#use-attachments',
            icon: <Attachments />,
          },
          {
            title: 'Spam detection',
            description: 'Blacklist certain senders to avoid spam.',
            url: '/docs/modules/forms/#features',
            icon: <Spam />,
          },
        ]}
      />
    </>
  );
};

export default Forms;
