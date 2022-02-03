import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import Attachments from '../public/moduleIcons/attachments.svg';
import FormsIcon from '../public/moduleIcons/formsLg.svg';
import Spam from '../public/moduleIcons/spam.svg';
import Auth from '../public/moduleIcons/localAuthentication.svg';

const Forms = () => {
  return (
    <ModulePage
      moduleName="Forms"
      title="Simple form submission module. Create your form and forward replies to an email"
      docsLink="/docs/modules/forms"
      img={<FormsIcon />}
      features={[
        {
          title: 'Creation/submission',
          description: '',
          url: '/docs/modules/authentication/config',
          icon: <Auth />,
        },
        {
          title: 'File Attachments',
          description:
            'Login with client credentials from Facebook, Google, Kakao, Twitch. There are more to come!',
          url: '/docs/modules/authentication/config#third-party',
          icon: <Attachments />,
        },
        {
          title: 'Spam detection',
          description:
            'Optional two factor authentication supported on all strategies (requires SMS module)',
          url: '/docs/modules/authentication/config#how-to-enable-2fa',
          icon: <Spam />,
        },
      ]}
    />
  );
};

export default Forms;
