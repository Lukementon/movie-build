import {
  GetMovieVideoDocument,
  GetMovieVideoQuery,
  GetMovieVideoQueryVariables,
  GetMovieVideoResponse,
  QueryGetMovieVideoArgs,
} from '@/data/graphql/resolvers/generated';
import { graphQLClient } from '@/utils/gql';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

type Output = UseQueryResult<GetMovieVideoResponse>;

const useGetMovieVideo = ({ id, language }: QueryGetMovieVideoArgs): Output => {
  const getMovieVideoQuery = useMemo<QueryGetMovieVideoArgs>(
    () => ({ id }),
    [id]
  );

  return useQuery([GET_MOVIE_VIDEO_QUERY_KEY, getMovieVideoQuery], async () => {
    const resp = await graphQLClient.request<
      GetMovieVideoQuery,
      GetMovieVideoQueryVariables
    >(GetMovieVideoDocument, { id, language });
    return resp.getMovieVideo;
  });
};

export const GET_MOVIE_VIDEO_QUERY_KEY = 'GET_MOVIE_VIDEO_QUERY';

export default useGetMovieVideo;
