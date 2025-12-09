import React from 'react';
import Link from '@docusaurus/Link';

interface Provider {
  name: string;
  slug: string;
  icon?: string;
}

const OAUTH_PROVIDERS: Provider[] = [
  { name: 'Apple', slug: 'apple', icon: '🍎' },
  { name: 'Bitbucket', slug: 'bitbucket', icon: '🪣' },
  { name: 'Facebook', slug: 'facebook', icon: '📘' },
  { name: 'Figma', slug: 'figma', icon: '🎨' },
  { name: 'GitHub', slug: 'github', icon: '🐙' },
  { name: 'GitLab', slug: 'gitlab', icon: '🦊' },
  { name: 'Google', slug: 'google', icon: '🔍' },
  { name: 'LinkedIn', slug: 'linkedin', icon: '💼' },
  { name: 'Microsoft', slug: 'microsoft', icon: '🪟' },
  { name: 'Reddit', slug: 'reddit', icon: '🤖' },
  { name: 'Slack', slug: 'slack', icon: '💬' },
  { name: 'Twitch', slug: 'twitch', icon: '🎮' },
  { name: 'Twitter', slug: 'twitter', icon: '🐦' },
];

interface ProviderGridProps {
  basePath?: string;
  currentProvider?: string;
  title?: string;
}

export default function ProviderGrid({
  basePath = '/modules/authentication/oauth',
  currentProvider,
  title = 'OAuth Providers',
}: ProviderGridProps): JSX.Element {
  return (
    <div className="provider-grid-container">
      {title && <h4 className="provider-grid-title">{title}</h4>}
      <div className="provider-grid">
        {OAUTH_PROVIDERS.map((provider) => (
          <Link
            key={provider.slug}
            to={`${basePath}/${provider.slug}`}
            className={`provider-card ${
              currentProvider === provider.slug ? 'provider-card--current' : ''
            }`}
          >
            {provider.icon && <span>{provider.icon}</span>}
            <span>{provider.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Simplified provider list for use at bottom of OAuth pages
interface OtherProvidersProps {
  currentProvider: string;
}

export function OtherProviders({ currentProvider }: OtherProvidersProps): JSX.Element {
  const otherProviders = OAUTH_PROVIDERS.filter(p => p.slug !== currentProvider);
  
  return (
    <div className="provider-grid-container" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--ifm-toc-border-color)' }}>
      <h4 className="provider-grid-title">Other OAuth Providers</h4>
      <div className="provider-grid">
        {otherProviders.map((provider) => (
          <Link
            key={provider.slug}
            to={`/modules/authentication/oauth/${provider.slug}`}
            className="provider-card"
          >
            {provider.icon && <span>{provider.icon}</span>}
            <span>{provider.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

