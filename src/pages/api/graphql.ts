import { readFileSync } from 'fs';
import { createSchema, createYoga } from 'graphql-yoga';
import { join } from 'path';
import {
  GetNowPlayingMoviesResponse,
  GetPopularMoviesResponse,
  GetTopRatedMoviesResponse,
  GetUpcomingMoviesResponse,
  Resolvers,
} from '../../../types';
import axios from '../../instances/axios';

const typeDefs = readFileSync(join(process.cwd(), 'schema.graphql'), {
  encoding: 'utf-8',
});

const resolvers: Resolvers = {
  Query: {
    getPopularMovies: async (_, { page, language }) => {
      const { data } = await axios.get<GetPopularMoviesResponse>(
        `/movie/popular?language=${language}&page=${page}`
      );
      return data;
    },
    getTopRatedMovies: async (_, { page, language }) => {
      const { data } = await axios.get<GetTopRatedMoviesResponse>(
        `/movie/top_rated?language=${language}&page=${page}`
      );
      return data;
    },
    getUpcomingMovies: async (_, { page, language }) => {
      const { data } = await axios.get<GetUpcomingMoviesResponse>(
        `/movie/upcoming?language=${language}&page=${page}`
      );
      return data;
    },
    getNowPlayingMovies: async (_, { page, language }) => {
      const { data } = await axios.get<GetNowPlayingMoviesResponse>(
        `/movie/now_playing?language=${language}&page=${page}`
      );
      return data;
    },
  },
};

const schema = createSchema({ typeDefs, resolvers });

export default createYoga({
  graphqlEndpoint: '/api/graphql',
  schema,
});

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};
