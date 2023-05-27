import Header from '@/components/header/Header';
import PopularMovies from '@/components/movies/PopularMovies';
import Row from '@/components/row/Row';

const Home = () => {
  return (
    <div>
      <Header />

      <div className='mx-24 mt-4'>
        <PopularMovies component={Row} />
      </div>
    </div>
  );
};

export default Home;
