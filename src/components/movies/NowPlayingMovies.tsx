import {
  GetNowPlayingMoviesDocument,
  GetNowPlayingMoviesQuery,
  GetNowPlayingMoviesQueryVariables,
} from '@/data/graphql/resolvers/generated';
import { Movie } from '@/derivedTypes';
import useGetNowPlayingMovies, {
  GET_NOW_PLAYING_MOVIES_QUERY_KEY,
} from '@/hooks/movies/useGetNowPlayingMovies';
import { graphQLClient, queryClient } from '@/utils/gql';
import { dehydrate } from '@tanstack/react-query';
import React from 'react';
import { RowProps } from '../row/Row';

interface NowPlayingMoviesProps {
  component: React.ComponentType<RowProps>;
}

const NowPlayingMovies = ({ component: Component }: NowPlayingMoviesProps) => {
  const { data: nowPlayingMovies } = useGetNowPlayingMovies({});

  return (
    <Component movies={nowPlayingMovies as Movie} title='Now playing movies' />
  );
};

export default NowPlayingMovies;

export const getServerSideProps = async () => {
  await queryClient.prefetchQuery(
    [GET_NOW_PLAYING_MOVIES_QUERY_KEY],
    async () =>
      await graphQLClient.request<
        GetNowPlayingMoviesQuery,
        GetNowPlayingMoviesQueryVariables
      >(GetNowPlayingMoviesDocument, {})
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
