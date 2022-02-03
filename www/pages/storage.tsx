import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import Server from '../public/moduleIcons/serverLg.svg';
import Azure from '../public/moduleIcons/azure.svg';
import SignIcon from '../public/moduleIcons/localStorage.svg';

const Storage = () => {
  return (
    <ModulePage
      moduleName="Storage"
      title="This module provides persistent storage and facilitates the creation of hierarchical data structures.
      Documents may have complex structures and subcollections and can be stored locally or on a cloud provider."
      docsLink="/docs/modules/authentication"
      img={<Server />}
      features={[
        {
          title: 'Local storage',
          description:
            'Local authentication with username/password or email/password, optional email verification, Forgot/Reset password and more!',
          url: '/docs/modules/authentication/config',
          icon: <SignIcon />,
        },
        {
          title: 'Microsoft Azure',
          description:
            'Login with client credentials from Facebook, Google, Kakao, Twitch. There are more to come!',
          url: '/docs/modules/authentication/config#third-party',
          icon: <Azure />,
        },
      ]}
    />
  );
};

export default Storage;
