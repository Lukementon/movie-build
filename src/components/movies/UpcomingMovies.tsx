import {
  GetUpcomingMoviesDocument,
  GetUpcomingMoviesQuery,
  GetUpcomingMoviesQueryVariables,
} from '@/data/graphql/resolvers/generated';
import useGetUpcomingMovies, {
  GET_UPCOMING_MOVIES_QUERY_KEY,
} from '@/hooks/movies/useGetUpcomingMovies';
import { graphQLClient, queryClient } from '@/utils/gql';
import { dehydrate } from '@tanstack/react-query';
import React from 'react';
import { RowProps } from '../row/Row';
import { Movie } from '@/derivedTypes';

interface UpcomingMoviesProps {
  component: React.ComponentType<RowProps>;
}

const UpcomingMovies = ({ component: Component }: UpcomingMoviesProps) => {
  const { data: upcomingMovies } = useGetUpcomingMovies({});

  return <Component movies={upcomingMovies as Movie} title='Upcoming movies' />;
};

export default UpcomingMovies;

export const getServerSideProps = async () => {
  await queryClient.prefetchQuery(
    [GET_UPCOMING_MOVIES_QUERY_KEY],
    async () =>
      await graphQLClient.request<
        GetUpcomingMoviesQuery,
        GetUpcomingMoviesQueryVariables
      >(GetUpcomingMoviesDocument, {})
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
