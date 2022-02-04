import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import Security from '../public/icons/security.svg';
import KeyIcon from '../public/moduleIcons/key.svg';
import SignIcon from '../public/moduleIcons/signIn.svg';
import TwoFA from '../public/moduleIcons/2fa.svg';
import { NextSeo } from 'next-seo';

const Authentication = () => {
  const SEO = {
    title: 'Authentication',
    description: 'Authentication Module',
    openGraph: {
      title: 'Authentication',
      description: 'Authentication Module',
      article: {
        tags: ['authentication', 'local', '2fa'],
      },
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <ModulePage
        moduleName="Authentication"
        title="This module offers user authentication.
It supports logins with local credentials as well as popular identity providers.
TwoFactor authentication is also provided."
        docsLink="/docs/modules/authentication"
        img={<Security />}
        features={[
          {
            title: 'Local authentication',
            description:
              'Local authentication with username/password or email/password, optional email verification, Forgot/Reset password and more!',
            url: '/docs/modules/authentication/config',
            icon: <KeyIcon />,
          },
          {
            title: 'Sign in methods',
            description:
              'Login with client credentials from Facebook, Google, Kakao, Twitch. There are more to come!',
            url: '/docs/modules/authentication/config#third-party',
            icon: <SignIcon />,
          },
          {
            title: '2FA',
            description:
              'Optional two factor authentication supported on all strategies (requires SMS module)',
            url: '/docs/modules/authentication/config#how-to-enable-2fa',
            icon: <TwoFA />,
          },
        ]}
      />
    </>
  );
};

export default Authentication;
