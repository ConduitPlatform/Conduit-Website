import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Ready-Made Modules',
    icon: '🧩',
    description: (
      <>
        Authentication, Database, Storage, Email, SMS, Push Notifications, and more.
        All the backend functionality you need, ready to deploy in minutes.
      </>
    ),
  },
  {
    title: 'Fully Extensible',
    icon: '🔧',
    description: (
      <>
        Build custom modules in any language that supports gRPC. TypeScript SDK available
        for rapid development. Replace or extend any module to fit your needs.
      </>
    ),
  },
  {
    title: 'Self-Hosted Freedom',
    icon: '🏠',
    description: (
      <>
        Full control over your data and infrastructure. No vendor lock-in.
        Deploy on your own servers, Kubernetes, or any cloud provider.
      </>
    ),
  },
  {
    title: 'Auto-Generated APIs',
    icon: '⚡',
    description: (
      <>
        REST, GraphQL, and WebSocket endpoints generated automatically.
        Swagger documentation included. Build schemas, get APIs instantly.
      </>
    ),
  },
  {
    title: 'Microservice Architecture',
    icon: '🔀',
    description: (
      <>
        Scale each module independently. Deploy only what you need.
        High-performance gRPC communication between services.
      </>
    ),
  },
  {
    title: 'Admin Panel Included',
    icon: '🎛️',
    description: (
      <>
        Beautiful admin dashboard for managing your backend. Configure modules,
        manage users, create schemas, and monitor your application.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className={styles.featureIcon}>{icon}</div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
