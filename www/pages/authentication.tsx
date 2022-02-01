import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import Google from '../public/icons/google.svg';
import Security from '../public/icons/security.svg';
import LockIcon from '../public/icons/lock.svg';
import TwoFA from '../public/icons/2fa.svg';

const Authentication = () => {
  return (
    <ModulePage
      moduleName="Authentication"
      title="User authentication."
      docsLink="/docs/modules/storage"
      img={<Security />}
      features={[
        {
          title: 'Local authentication ',
          description: '',
          url: '123',
          icon: <LockIcon />,
        },
        {
          title: 'Popular identity providers',
          description: '',
          url: '123',
          icon: <Google />,
        },
        {
          title: 'TwoFactor authentication ',
          description: '',
          url: '123',
          icon: <TwoFA />,
        },
      ]}
    />
  );
};

export default Authentication;
