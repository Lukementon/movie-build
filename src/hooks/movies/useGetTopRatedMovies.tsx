import {
  GetTopRatedMoviesDocument,
  GetTopRatedMoviesQuery,
  GetTopRatedMoviesQueryVariables,
  GetTopRatedMoviesResponse,
  QueryGetTopRatedMoviesArgs,
} from '@/data/graphql/resolvers/generated';
import { graphQLClient } from '@/utils/gql';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

type Output = UseQueryResult<GetTopRatedMoviesResponse>;

const useGetTopRatedMovies = ({
  language,
  page,
  region,
}: QueryGetTopRatedMoviesArgs): Output => {
  const getTopRatedMoviesQuery = useMemo<QueryGetTopRatedMoviesArgs>(
    () => ({ language, page, region }),
    [language, page, region]
  );

  return useQuery(
    [GET_TOP_RATED_MOVIES_QUERY_KEY, getTopRatedMoviesQuery],
    async () => {
      const resp = await graphQLClient.request<
        GetTopRatedMoviesQuery,
        GetTopRatedMoviesQueryVariables
      >(GetTopRatedMoviesDocument, {});
      return resp.getTopRatedMovies;
    }
  );
};

export const GET_TOP_RATED_MOVIES_QUERY_KEY = 'GET_TOP_RATED_MOVIES_QUERY';

export default useGetTopRatedMovies;
