import {
  GetMovieDocument,
  GetMovieQuery,
  GetMovieQueryVariables,
  GetMovieResponse,
  QueryGetMovieArgs,
} from '@/data/graphql/resolvers/generated';
import { graphQLClient } from '@/utils/gql';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

type Output = UseQueryResult<GetMovieResponse>;

const useGetMovie = ({ id, language }: QueryGetMovieArgs): Output => {
  const getMovieVideoQuery = useMemo<QueryGetMovieArgs>(() => ({ id }), [id]);

  return useQuery([GET_MOVIE_QUERY_KEY, getMovieVideoQuery], async () => {
    const resp = await graphQLClient.request<
      GetMovieQuery,
      GetMovieQueryVariables
    >(GetMovieDocument, { id, language });
    return resp.getMovie;
  });
};

export const GET_MOVIE_QUERY_KEY = 'GET_MOVIE_QUERY';

export default useGetMovie;
