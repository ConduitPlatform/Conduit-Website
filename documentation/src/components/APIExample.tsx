import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface APIExampleProps {
  method: HttpMethod;
  endpoint: string;
  description?: string;
  request?: string;
  response?: string;
  headers?: Record<string, string>;
}

const methodColors: Record<HttpMethod, string> = {
  GET: '#61affe',
  POST: '#49cc90',
  PUT: '#fca130',
  PATCH: '#50e3c2',
  DELETE: '#f93e3e',
};

export default function APIExample({
  method,
  endpoint,
  description,
  request,
  response,
  headers,
}: APIExampleProps): JSX.Element {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'request' | 'response'>('request');

  const curlCommand = generateCurlCommand(method, endpoint, request, headers);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(curlCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="api-example">
      <div className="api-example-header">
        <div className="api-example-method">
          <span
            className="api-method"
            style={{ backgroundColor: methodColors[method] }}
          >
            {method}
          </span>
          <code className="api-example-url">{endpoint}</code>
        </div>
        <button
          className={`api-example-copy ${copied ? 'api-example-copy--copied' : ''}`}
          onClick={handleCopy}
          title="Copy as cURL"
        >
          {copied ? '✓ Copied!' : '📋 Copy cURL'}
        </button>
      </div>

      {description && (
        <div style={{ padding: '0.75rem 1rem', fontSize: '0.9rem', color: 'var(--ifm-color-content-secondary)', borderBottom: '1px solid var(--ifm-toc-border-color)' }}>
          {description}
        </div>
      )}

      {(request || response) && (
        <>
          <div className="api-example-tabs">
            {request && (
              <button
                className={`api-example-tab ${activeTab === 'request' ? 'api-example-tab--active' : ''}`}
                onClick={() => setActiveTab('request')}
              >
                Request
              </button>
            )}
            {response && (
              <button
                className={`api-example-tab ${activeTab === 'response' ? 'api-example-tab--active' : ''}`}
                onClick={() => setActiveTab('response')}
              >
                Response
              </button>
            )}
          </div>

          <div className="api-example-body">
            {activeTab === 'request' && request && (
              <CodeBlock language="json">{request}</CodeBlock>
            )}
            {activeTab === 'response' && response && (
              <CodeBlock language="json">{response}</CodeBlock>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function generateCurlCommand(
  method: HttpMethod,
  endpoint: string,
  body?: string,
  headers?: Record<string, string>
): string {
  const parts = [`curl -X ${method}`];

  // Add headers
  const allHeaders = {
    'Content-Type': 'application/json',
    ...headers,
  };

  Object.entries(allHeaders).forEach(([key, value]) => {
    parts.push(`-H '${key}: ${value}'`);
  });

  // Add URL
  parts.push(`'http://localhost:3000${endpoint}'`);

  // Add body for non-GET requests
  if (body && method !== 'GET') {
    const compactBody = JSON.stringify(JSON.parse(body));
    parts.push(`-d '${compactBody}'`);
  }

  return parts.join(' \\\n  ');
}

// Simple endpoint display without code
interface EndpointProps {
  method: HttpMethod;
  path: string;
  description?: string;
}

export function Endpoint({ method, path, description }: EndpointProps): JSX.Element {
  return (
    <div className="api-endpoint" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
      <span
        className="api-method"
        style={{ 
          backgroundColor: methodColors[method],
          padding: '0.2rem 0.5rem',
          borderRadius: '4px',
          color: 'white',
          fontWeight: 600,
          fontSize: '0.75rem',
        }}
      >
        {method}
      </span>
      <code style={{ fontSize: '0.875rem' }}>{path}</code>
      {description && (
        <span style={{ color: 'var(--ifm-color-content-secondary)', fontSize: '0.85rem' }}>
          — {description}
        </span>
      )}
    </div>
  );
}

