import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import Storage from '../public/icons/storageModule.svg';

const StoragePage = () => {
  return (
    <ModulePage
      moduleName="Storage"
      title="Store your files with an easy to navigate UI"
      docsLink="/docs/modules/storage"
      img={<Storage />}
      features={[
        { name: 'The best', description: 'The best', caption: 'the best' },
        { name: 'The best', description: 'The best', caption: 'the best' },
        { name: 'The best', description: 'The best', caption: 'the best' },
      ]}
    />
  );
};

export default StoragePage;
