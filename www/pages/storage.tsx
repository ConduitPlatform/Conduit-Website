import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import Server from '../public/moduleIcons/serverLg.svg';
import Azure from '../public/moduleIcons/azure.svg';
import SignIcon from '../public/moduleIcons/localStorage.svg';
import FolderIcon from '../public/moduleIcons/folders.svg';

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
          title: 'Structured files',
          description: 'Structure your files with folders and containers.',
          url: '/docs/modules/storage/get-started#using-the-admin-panel',
          icon: <FolderIcon />,
        },
        {
          title: 'Local storage',
          description:
            'Local authentication with username/password or email/password, optional email verification, Forgot/Reset password and more!',
          url: '/docs/modules/storage/config#local-storage',
          icon: <SignIcon />,
        },
        {
          title: 'Providers',
          description: 'Providers such as Microsoft azure and Google Cloud can be used.',
          url: '/docs/modules/storage/config#azure-storage',
          icon: <Azure />,
        },
      ]}
    />
  );
};

export default Storage;
