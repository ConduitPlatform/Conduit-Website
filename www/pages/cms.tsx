import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import CMSIcon from '../public/icons/cms.svg';
import Multiple from '../public/icons/multiple.svg';
import Gear from '../public/icons/key.svg';
import Authentication from '../public/moduleIcons/authentication.svg';

const CMS = () => {
  return (
    <ModulePage
      moduleName="CMS"
      title="Store your files with an easy to navigate UI"
      docsLink="/docs/modules/storage"
      img={<CMSIcon />}
      features={[
        {
          title: 'Built in authentication',
          description: 'The best dasd asd',
          url: '123',
          icon: <Authentication />,
        },
        {
          title: 'MongoDb and SQL support',
          description: 'The best ds sd',
          url: '123',
          icon: <Multiple />,
        },
        {
          title: 'Custom endpoint creation',
          description: 'The best ds we r',
          url: '123',
          icon: <Gear />,
        },
      ]}
    />
  );
};

export default CMS;
