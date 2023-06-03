import {
  Movie as MovieResolverType,
  MovieWithVideos as MovieWithVideosResolverType,
} from './data/graphql/resolvers/generated';

export interface Movie {
  page: number;
  results: MovieResolverType[];
  total_pages: number;
  total_results: number;
}

export interface MovieWithVideos extends Omit<Movie, 'results'> {
  results: MovieWithVideosResolverType[];
}
