import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import Storage from '../public/icons/databaseLg.svg';
import Query from '../public/icons/query.svg';
import DatabaseIcon from '../public/icons/database.svg';
import { NextSeo } from 'next-seo';

const Database = () => {
  const SEO = {
    title: 'Forms',
    description: 'Forms Module',
    openGraph: {
      title: 'Forms',
      description: 'Forms Module',
      article: {
        tags: ['database', 'mongoDB', 'PostgreSQL', 'query'],
      },
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <ModulePage
        moduleName="Database"
        title="The glue between the database engine and Conduit. It provides an Object–relational mapping (ORM)  for converting data between incompatible type systems using object-oriented programming languages."
        docsLink="/docs/modules/database"
        img={<Storage />}
        features={[
          {
            title: 'Supports MongoDB and PostgreSQL',
            description: 'You can have either a document based or a relational database, options!',
            url: '/docs/modules/database/get-started#prerequisites',
            icon: <DatabaseIcon />,
          },
          {
            title: 'Query your data ',
            description:
              'Without the need of writing complex SQL queries. Schemas can be manipulated through model controller objects automatically generated by the module itself.',
            url: '/docs/modules/database/queries',
            icon: <Query />,
          },
        ]}
      />
    </>
  );
};

export default Database;
