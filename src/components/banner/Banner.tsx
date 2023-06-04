import config from '@/config';
import { Movie } from '@/derivedTypes';
import Image from 'next/image';
import { useMemo } from 'react';

type BannerProps = {
  movies: Movie | undefined;
};

const Banner = ({ movies }: BannerProps) => {
  const randomMovie = useMemo(
    () =>
      movies?.results[
        Math.abs(Math.floor(Math.random() * movies?.results.length))
      ],
    [movies?.results]
  );

  return (
    <div className='min-h-[800px] rounded-2xl w-full relative'>
      <div className='absolute w-full h-full bg-gradient-to-t from-gray-950 to-transparent z-20 bottom-0'>
        <div className='absolute top-[40%] md:top-[50%] ml-4 md:ml-16'>
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
            <button
              className='
            bg-white
            text-black
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-60
              transition
            '
            >
              Play
            </button>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default Banner;
