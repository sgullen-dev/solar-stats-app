import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

// Testing option configs for react-query
// - Prevent retries on errors
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

// Provides a clean react-query provider for testing components
export const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  const testQueryClient = createTestQueryClient();
  return (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
};

// Stores the headers used by nock
export const nockDefaultReplyHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-credentials': 'true',
};
