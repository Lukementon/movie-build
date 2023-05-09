import Header from '@/components/Header';
import {
  GetPopularMoviesDocument,
  GetPopularMoviesQuery,
  GetPopularMoviesQueryVariables,
} from '@/data/graphql/resolvers/generated';
import { graphQLClient } from '@/utils/gql';
import { useQuery } from 'react-query';

const getMovies = async () => {
  return await graphQLClient.request<
    GetPopularMoviesQuery,
    GetPopularMoviesQueryVariables
  >(GetPopularMoviesDocument, {});
};

export default function Home() {
  const { isLoading, data } = useQuery(['get-user'], getMovies);
  console.log('isLoading', isLoading);
  console.log('data', data);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className='min-h-screen'>
      <Header />
    </div>
  );
}
