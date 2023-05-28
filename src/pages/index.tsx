import Header from '@/components/header/Header';
import NowPlayingMovies from '@/components/movies/NowPlayingMovies';
import PopularMovies from '@/components/movies/PopularMovies';
import TopRatedMovies from '@/components/movies/TopRatedMovies';
import UpcomingMovies from '@/components/movies/UpcomingMovies';
import Row from '@/components/row/Row';

const Home = () => {
  return (
    <div>
      <Header />

      <div className='mx-24 mt-4'>
        <PopularMovies component={Row} />
        <TopRatedMovies component={Row} />
        <UpcomingMovies component={Row} />
        <NowPlayingMovies component={Row} />
      </div>
    </div>
  );
};

export default Home;
