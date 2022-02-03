import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import Push from '../public/moduleIcons/push-notifications.svg';
import Firebase from '../public/moduleIcons/firebase.svg';
import Check from '../public/moduleIcons/checkAll.svg';

const Notifications = () => {
  return (
    <ModulePage
      moduleName="Notifications"
      title="This module handles sending push notifications to users."
      docsLink="/docs/modules/push-notifications/"
      img={<Push />}
      features={[
        {
          title: 'Firebase Push Notification Service',
          description:
            'Local authentication with username/password or email/password, optional email verification, Forgot/Reset password and more!',
          url: '/docs/modules/push-notifications/config#firebase-project-secrets',
          icon: <Firebase />,
        },
        {
          title: 'Easily configurable',
          description:
            'Login with client credentials from Facebook, Google, Kakao, Twitch. There are more to come!',
          url: '/docs/modules/push-notifications/config#updating-the-modules-config',
          icon: <Check />,
        },
      ]}
    />
  );
};

export default Notifications;
