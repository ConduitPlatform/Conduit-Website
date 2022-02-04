import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import CMSIcon from '../public/icons/cms.svg';
import Schema from '../public/moduleIcons/Schema.svg';
import SchemaData from '../public/moduleIcons/schemaData.svg';
import CustomEndpoint from '../public/moduleIcons/customEndpoint.svg';
import { NextSeo } from 'next-seo';

const CMS = () => {
  const SEO = {
    title: 'CMS',
    description: 'CMS Module',
    openGraph: {
      title: 'CMS',
      description: 'CMS Module',
      article: {
        tags: ['CMS', 'content-management-system'],
      },
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <ModulePage
        moduleName="CMS (Content management system)"
        title="This module facilitates the management of content types through the generation of db level schemas,
      the creation and manipulation of schema document entries and the registration of fine-tuned custom endpoints.
Content is delivered through REST and GraphQL."
        docsLink="/docs/modules/cms/"
        img={<CMSIcon />}
        features={[
          {
            title: 'Schemas',
            description:
              'Create any content type (schema). Schemas can contain fields of different types.',
            url: '/docs/modules/cms/get-started#schemas-example',
            icon: <Schema />,
          },
          {
            title: 'Schema data',
            description:
              'Create custom content types based on schemas! You can register individual entries in a schema to store your data.',
            url: '/docs/modules/cms/get-started#documents-example',
            icon: <SchemaData />,
          },
          {
            title: 'Custom endpoints',
            description:
              'Create powerful custom endpoints, with pagination, sorting, population, authentication and more!',
            url: '/docs/modules/cms/get-started#custom-endpoints-example',
            icon: <CustomEndpoint />,
          },
        ]}
      />
    </>
  );
};

export default CMS;
