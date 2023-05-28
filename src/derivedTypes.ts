import { Movie as MovieResolverType } from './data/graphql/resolvers/generated';

export interface Movie {
  page: number;
  results: MovieResolverType[];
  total_pages: number;
  total_results: number;
}
