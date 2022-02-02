import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import CMSIcon from '../public/icons/cms.svg';
import Schema from '../public/moduleIcons/Schema.svg';
import SchemaData from '../public/moduleIcons/schemaData.svg';
import CustomEndpoint from '../public/moduleIcons/customEndpoint.svg';

const CMS = () => {
  return (
    <ModulePage
      moduleName="CMS (Content management system)"
      title="This module facilitates the management of content types through the generation of db level schemas,
      the creation and manipulation of schema document entries and the registration of fine-tuned custom endpoints.
Content is delivered through REST and GraphQL."
      docsLink="/docs/modules/storage"
      img={<CMSIcon />}
      features={[
        {
          title: 'Schemas',
          description:
            'Create any content type (schema). Schemas can contain fields of different types.',
          url: '123',
          icon: <Schema />,
        },
        {
          title: 'Schema data',
          description:
            'Create custom content types based on schemas! You can register individual entries in a schema to store your data.',
          url: '123',
          icon: <SchemaData />,
        },
        {
          title: 'Custom endpoints',
          description:
            'Create powerful custom endpoints, with pagination, sorting, population, authentication and more!',
          url: '123',
          icon: <CustomEndpoint />,
        },
      ]}
    />
  );
};

export default CMS;
