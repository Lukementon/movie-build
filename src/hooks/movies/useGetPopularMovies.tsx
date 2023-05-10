import {
  GetPopularMoviesDocument,
  GetPopularMoviesQuery,
  GetPopularMoviesQueryVariables,
  QueryGetPopularMoviesArgs,
} from '@/data/graphql/resolvers/generated';
import { graphQLClient } from '@/utils/gql';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

type Output = UseQueryResult<GetPopularMoviesQuery['getPopularMovies']>;

const useGetPopularMovies = ({
  language,
  page,
  region,
}: QueryGetPopularMoviesArgs): Output => {
  const getPopularMoviesQuery = useMemo<QueryGetPopularMoviesArgs>(
    () => ({ language, page, region }),
    [language, page, region]
  );

  return useQuery(
    [GET_POPULAR_MOVIES_QUERY_KEY, getPopularMoviesQuery],
    async () => {
      const resp = await graphQLClient.request<
        GetPopularMoviesQuery,
        GetPopularMoviesQueryVariables
      >(GetPopularMoviesDocument, {});
      return resp.getPopularMovies;
    }
  );
};

export const GET_POPULAR_MOVIES_QUERY_KEY = 'GET_POPULAR_MOVIES_QUERY';

export default useGetPopularMovies;
