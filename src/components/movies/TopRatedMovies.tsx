import {
  GetTopRatedMoviesDocument,
  GetTopRatedMoviesQuery,
  GetTopRatedMoviesQueryVariables,
} from '@/data/graphql/resolvers/generated';
import useGetTopRatedMovies, {
  GET_TOP_RATED_MOVIES_QUERY_KEY,
} from '@/hooks/movies/useGetTopRatedMovies';
import { Movie } from '@/derivedTypes';
import { graphQLClient, queryClient } from '@/utils/gql';
import { dehydrate } from '@tanstack/react-query';
import React from 'react';
import { RowProps } from '../row/Row';

interface TopRatedMoviesProps {
  component: React.ComponentType<RowProps>;
}

const TopRatedMovies = ({ component: Component }: TopRatedMoviesProps) => {
  const { data: topRatedMovies } = useGetTopRatedMovies({});

  return (
    <Component movies={topRatedMovies as Movie} title='Top rated movies' />
  );
};

export default TopRatedMovies;

export const getServerSideProps = async () => {
  await queryClient.prefetchQuery(
    [GET_TOP_RATED_MOVIES_QUERY_KEY],
    async () =>
      await graphQLClient.request<
        GetTopRatedMoviesQuery,
        GetTopRatedMoviesQueryVariables
      >(GetTopRatedMoviesDocument, {})
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
