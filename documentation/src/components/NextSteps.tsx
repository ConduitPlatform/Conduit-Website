import React from 'react';
import Link from '@docusaurus/Link';

interface NextStepItem {
  title: string;
  description: string;
  url: string;
}

interface NextStepsProps {
  items: NextStepItem[];
  title?: string;
}

export default function NextSteps({ 
  items, 
  title = 'Next Steps' 
}: NextStepsProps): JSX.Element {
  return (
    <div className="next-steps-container">
      <h3 className="next-steps-title">{title}</h3>
      <div className="next-steps-grid">
        {items.map((item, index) => (
          <Link key={index} to={item.url} className="next-step-item">
            <div className="next-step-item-title">{item.title}</div>
            <p className="next-step-item-description">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Pre-configured next steps for common use cases
export function AuthNextSteps(): JSX.Element {
  return (
    <NextSteps
      items={[
        {
          title: 'Configuration',
          description: 'Set up authentication options and customize behavior',
          url: './configuration',
        },
        {
          title: 'API Reference',
          description: 'Explore all available authentication endpoints',
          url: './api-reference',
        },
        {
          title: 'Strategies',
          description: 'Learn about different authentication methods',
          url: './strategies/local',
        },
        {
          title: 'OAuth Setup',
          description: 'Configure social login providers',
          url: './oauth/google',
        },
      ]}
    />
  );
}

export function DatabaseNextSteps(): JSX.Element {
  return (
    <NextSteps
      items={[
        {
          title: 'Configuration',
          description: 'Database connection and settings',
          url: './configuration',
        },
        {
          title: 'Query Language',
          description: 'Learn the query syntax',
          url: './query-language',
        },
        {
          title: 'Custom Endpoints',
          description: 'Build advanced queries without code',
          url: './custom-endpoints',
        },
        {
          title: 'Introspection',
          description: 'Import existing database schemas',
          url: './introspection',
        },
      ]}
    />
  );
}

export function QuickStartNextSteps(): JSX.Element {
  return (
    <NextSteps
      items={[
        {
          title: 'Admin Panel',
          description: 'Explore the management interface',
          url: '/learn/admin-panel',
        },
        {
          title: 'Build Your First App',
          description: 'Step-by-step tutorial with React',
          url: '/guides/first-app',
        },
        {
          title: 'Core Concepts',
          description: 'Understand how Conduit works',
          url: '/learn/core-concepts',
        },
      ]}
    />
  );
}

