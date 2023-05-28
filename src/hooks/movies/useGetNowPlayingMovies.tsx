import {
  GetNowPlayingMoviesDocument,
  GetNowPlayingMoviesQuery,
  GetNowPlayingMoviesQueryVariables,
  GetNowPlayingMoviesResponse,
  QueryGetNowPlayingMoviesArgs,
} from '@/data/graphql/resolvers/generated';
import { graphQLClient } from '@/utils/gql';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

type Output = UseQueryResult<GetNowPlayingMoviesResponse>;

const useGetNowPlayingMovies = ({
  language,
  page,
  region,
}: QueryGetNowPlayingMoviesArgs): Output => {
  const getNowPlayingMoviesQuery = useMemo<QueryGetNowPlayingMoviesArgs>(
    () => ({ language, page, region }),
    [language, page, region]
  );

  return useQuery(
    [GET_NOW_PLAYING_MOVIES_QUERY_KEY, getNowPlayingMoviesQuery],
    async () => {
      const resp = await graphQLClient.request<
        GetNowPlayingMoviesQuery,
        GetNowPlayingMoviesQueryVariables
      >(GetNowPlayingMoviesDocument, {});
      return resp.getNowPlayingMovies;
    }
  );
};

export const GET_NOW_PLAYING_MOVIES_QUERY_KEY = 'GET_NOW_PLAYING_MOVIES_QUERY';

export default useGetNowPlayingMovies;
