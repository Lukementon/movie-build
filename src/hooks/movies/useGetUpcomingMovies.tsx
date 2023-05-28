import {
  GetUpcomingMoviesDocument,
  GetUpcomingMoviesQuery,
  GetUpcomingMoviesQueryVariables,
  GetUpcomingMoviesResponse,
  QueryGetUpcomingMoviesArgs,
} from '@/data/graphql/resolvers/generated';
import { graphQLClient } from '@/utils/gql';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

type Output = UseQueryResult<GetUpcomingMoviesResponse>;

const useGetUpcomingMovies = ({
  language,
  page,
  region,
}: QueryGetUpcomingMoviesArgs): Output => {
  const getUpcomingMoviesQuery = useMemo<QueryGetUpcomingMoviesArgs>(
    () => ({ language, page, region }),
    [language, page, region]
  );

  return useQuery(
    [GET_UPCOMING_MOVIES_QUERY_KEY, getUpcomingMoviesQuery],
    async () => {
      const resp = await graphQLClient.request<
        GetUpcomingMoviesQuery,
        GetUpcomingMoviesQueryVariables
      >(GetUpcomingMoviesDocument, {});
      return resp.getUpcomingMovies;
    }
  );
};

export const GET_UPCOMING_MOVIES_QUERY_KEY = 'GET_UPCOMING_MOVIES_QUERY';

export default useGetUpcomingMovies;
