import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import Storage from '../public/icons/storageModule.svg';
import Query from '../public/icons/query.svg';
import DatabaseIcon from '../public/icons/database.svg';

const Database = () => {
  return (
    <ModulePage
      moduleName="Database"
      title="The glue between database engine and Conduit"
      docsLink="/docs/modules/database"
      img={<Storage />}
      features={[
        {
          title: 'Supports MongoDB and PostgreSQL',
          description:
            'You can have both a document and a more traditional based database, options!',
          url: '123',
          icon: <DatabaseIcon />,
        },
        {
          title: 'Query your data without the need of writing complex SQL queries.',
          description: 'The best ds sd',
          url: '123',
          icon: <Query />,
        },
      ]}
    />
  );
};

export default Database;
