import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

// Import custom components
import Card, { ModuleCard, ModuleGrid } from '@site/src/components/CustomCard/Card';
import ProviderGrid, { OtherProviders } from '@site/src/components/ProviderGrid';
import NextSteps, { AuthNextSteps, DatabaseNextSteps, QuickStartNextSteps } from '@site/src/components/NextSteps';
import APIExample, { Endpoint } from '@site/src/components/APIExample';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  
  // Add custom components - these will be available in all MDX files without imports
  Card,
  ModuleCard,
  ModuleGrid,
  ProviderGrid,
  OtherProviders,
  NextSteps,
  AuthNextSteps,
  DatabaseNextSteps,
  QuickStartNextSteps,
  APIExample,
  Endpoint,
};

