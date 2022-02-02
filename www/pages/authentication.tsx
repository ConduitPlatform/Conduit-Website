import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import Security from '../public/icons/security.svg';
import KeyIcon from '../public/moduleIcons/key.svg';
import SignIcon from '../public/moduleIcons/signIn.svg';

import TwoFA from '../public/moduleIcons/2fa.svg';

const Authentication = () => {
  return (
    <ModulePage
      moduleName="Authentication"
      title="This module offers user authentication.
It supports logins with local credentials as well as popular identity providers.
TwoFactor authentication is also provided."
      docsLink="/docs/modules/authentication/"
      img={<Security />}
      features={[
        {
          title: 'Local authentication',
          description:
            'Local authentication with username/password or email/password, optional email verification, Forgot/Reset password and more!',
          url: '/docs/modules/authentication/',
          icon: <KeyIcon />,
        },
        {
          title: 'Sign in methods',
          description:
            'Login with client credentials from Facebook, Google, Kakao, Twitch. There are more to come!',
          url: '/docs/modules/authentication/',
          icon: <SignIcon />,
        },
        {
          title: '2FA',
          description:
            'Optional two factor authentication supported on all strategies (requires SMS module)',
          url: '/docs/modules/authentication/',
          icon: <TwoFA />,
        },
      ]}
    />
  );
};

export default Authentication;
