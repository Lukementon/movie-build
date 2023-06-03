import config from '@/config';
import { Movie } from '@/derivedTypes';
import Image from 'next/image';

type BannerProps = {
  movies: Movie | undefined;
};

const Banner = ({ movies }: BannerProps) => {
  const randomMovie =
    movies?.results[
      Math.abs(Math.floor(Math.random() * movies?.results.length))
    ];

  return (
    <div className='min-h-[800px] rounded-2xl w-full bg-gray-950 relative'>
      <Image
        loading='lazy'
        src={`${config.MOVIE_DB_IMAGE_BASE_URL}${randomMovie?.backdrop_path}`}
        alt={randomMovie?.original_title ?? ''}
        priority={false}
        fill={true}
        sizes='100%'
        style={{
          objectFit: 'cover',
        }}
      />
      <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
        <p className='text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl'>
          {randomMovie?.title}
        </p>
        <p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl'>
          {randomMovie?.overview}
        </p>
        <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
          <button
            className='
            bg-gray-950
            text-white
              bg-opacity-30 
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
            '
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
