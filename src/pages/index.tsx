import Header from '@/components/Header';
import {
  GetPopularMoviesDocument,
  GetPopularMoviesQuery,
  GetPopularMoviesQueryVariables,
} from '@/data/graphql/resolvers/generated';
import useGetPopularMovies from '@/hooks/movies/useGetPopularMovies';
import { graphQLClient, queryClient } from '@/utils/gql';
import { dehydrate } from '@tanstack/react-query';

export default function Home() {
  const { data: popularMovies, isLoading } = useGetPopularMovies({});

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className='min-h-screen'>
      <Header />
    </div>
  );
}

export const getServerSideProps = async () => {
  await queryClient.prefetchQuery(
    ['GET_POPULAR_MOVIES_PREFETCH_QUERY_KEY'],
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
