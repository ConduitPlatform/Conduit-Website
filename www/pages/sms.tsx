import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';

import SmsPage from '../public/moduleIcons/smsPage.svg';
import MessageIcon from '@mui/icons-material/Message';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { NextSeo } from 'next-seo';
const SMS = () => {
  const SEO = {
    title: 'SMS',
    description: 'SMS Module',
    openGraph: {
      title: 'SMS',
      description: 'SMS Module',
      article: {
        tags: ['SMS', 'twilio'],
      },
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <ModulePage
        moduleName="SMS"
        title="This module provides support for SMS messages.
Messages are delivered using third party providers."
        docsLink="/docs/modules/sms/"
        img={<SmsPage width={'100%'} height={'auto'} />}
        features={[
          {
            title: 'Sending SMS',
            description:
              'Conduit allows you to send SMS by specifying your recievers phone number and sms body!',
            url: '/docs/modules/sms/get-started#send-sms',
            icon: <MarkEmailReadIcon sx={{ width: 48, height: 48 }} color={'success'} />,
          },
          {
            title: 'Twilio support',
            description: 'Conduit offers twilio as the primary SMS service provider!',
            url: '/docs/modules/sms/config#twilio',
            icon: <MessageIcon sx={{ width: 48, height: 48 }} color={'info'} />,
          },
        ]}
      />
    </>
  );
};

export default SMS;
