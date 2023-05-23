import {
  GetPopularMoviesDocument,
  GetPopularMoviesQuery,
  GetPopularMoviesQueryVariables,
} from '@/data/graphql/resolvers/generated';
import useGetPopularMovies, {
  GET_POPULAR_MOVIES_QUERY_KEY,
} from '@/hooks/movies/useGetPopularMovies';
import { graphQLClient, queryClient } from '@/utils/gql';
import { dehydrate } from '@tanstack/react-query';
import React from 'react';
import { RowProps } from '../row/Row';
import { Movie } from '@/types';

interface PopularMoviesProps {
  component: React.ComponentType<RowProps>;
}

const PopularMovies = ({ component: Component }: PopularMoviesProps) => {
  const { data: popularMovies } = useGetPopularMovies({});

  return <Component movies={popularMovies as Movie} />;
};

export default PopularMovies;

export const getServerSideProps = async () => {
  await queryClient.prefetchQuery(
    [GET_POPULAR_MOVIES_QUERY_KEY],
    async () =>
      await graphQLClient.request<
        GetPopularMoviesQuery,
        GetPopularMoviesQueryVariables
      >(GetPopularMoviesDocument, {})
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
