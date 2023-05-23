import Header from '@/components/header/Header';
import PopularMovies from '@/components/movies/PopularMovies';
import Row from '@/components/row/Row';

const Home = () => {
  return (
    <div>
      <Header />

      <div className='max-w-screen-2xl mx-auto '>
        <PopularMovies component={Row} />
      </div>
    </div>
  );
};

export default Home;
