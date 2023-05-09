import config from '@/config';
import { GraphQLClient } from 'graphql-request';

export const graphQLClient = new GraphQLClient(config.REACT_QUERY_BASE_URL);
