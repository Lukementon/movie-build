import Banner from '@/components/banner/Banner';
import Header from '@/components/header/Header';
import NowPlayingMovies from '@/components/movies/NowPlayingMovies';
import PopularMovies from '@/components/movies/PopularMovies';
import TopRatedMovies from '@/components/movies/TopRatedMovies';
import UpcomingMovies from '@/components/movies/UpcomingMovies';
import Row from '@/components/row/Row';
import {
  GetPopularMoviesDocument,
  GetPopularMoviesQuery,
  GetPopularMoviesQueryVariables,
} from '@/data/graphql/resolvers/generated';
import { Movie } from '@/derivedTypes';
import useGetPopularMovies, {
  GET_POPULAR_MOVIES_QUERY_KEY,
} from '@/hooks/movies/useGetPopularMovies';
import { graphQLClient, queryClient } from '@/utils/gql';
import { dehydrate } from '@tanstack/react-query';

const Home = () => {
  const { data: popularMovies } = useGetPopularMovies({});
  return (
    <div>
      <Header />

      <div className='mx-64 mt-4'>
        <Banner movies={popularMovies as Movie} />
      </div>
      <div className='ml-32 mt-16'>
        <PopularMovies component={Row} />
        <TopRatedMovies component={Row} />
        <UpcomingMovies component={Row} />
        <NowPlayingMovies component={Row} />
      </div>
    </div>
  );
};

export default Home;

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
