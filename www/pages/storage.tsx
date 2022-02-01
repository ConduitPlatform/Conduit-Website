import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import Storage from '../public/icons/storageModule.svg';
import Fast from '../public/icons/fast.svg';

const StoragePage = () => {
  return (
    <ModulePage
      moduleName="Storage"
      title="Store your files with an easy to navigate UI"
      docsLink="/docs/modules/storage"
      img={<Storage />}
      features={[
        { name: 'The best', description: 'The best dasd asd', url: '124', img: <Fast /> },
        { name: 'The best', description: 'The best ds sd', url: '123', img: <Fast /> },
        { name: 'The best', description: 'The best ds we r', url: '124', img: <Fast /> },
        { name: 'The best', description: 'The best ds we r', url: '124', img: <Fast /> },
      ]}
    />
  );
};

export default StoragePage;
