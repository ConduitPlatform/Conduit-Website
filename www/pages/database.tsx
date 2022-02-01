import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import Storage from '../public/icons/storageModule.svg';
import PuzzleIcon from '../public/icons/puzzle.svg';
import DatabaseIcon from '../public/moduleIcons/database.svg';

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
          description: 'The best dasd asd',
          url: '123',
          icon: <DatabaseIcon />,
        },
        {
          title: 'Conveniently query your data without the need of writing complex SQL queries.',
          description: 'The best ds sd',
          url: '123',
          icon: <PuzzleIcon />,
        },
      ]}
    />
  );
};

export default Database;
