import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import Providers from '../public/icons/providers.svg';
import Security from '../public/icons/security.svg';
import Fast from '../public/icons/fast.svg';

const Authentication = () => {
  return (
    <ModulePage
      moduleName="Authentication"
      title="User authentication."
      docsLink="/docs/modules/storage"
      img={<Security />}
      features={[
        {
          title:
            'Local authentication with username/password or email/password (requires Email module)',
          description: 'The best dasd asd',
          url: '123',
          icon: <Fast />,
        },
        {
          title: 'Login with popular identity providers',
          description: 'The best ds sd',
          url: '123',
          icon: <Providers />,
        },
        {
          title: 'TwoFactor authentication ',
          description: 'The best ds we r',
          url: '123',
          icon: <Fast />,
        },
        { title: 'The best', description: 'The best ds we r', url: '123', icon: <Fast /> },
      ]}
    />
  );
};

export default Authentication;
