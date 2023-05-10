import config from '@/config';
import { QueryClient } from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';

export const graphQLClient = new GraphQLClient(config.REACT_QUERY_BASE_URL);
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
