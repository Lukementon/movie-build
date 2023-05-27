import { Movie } from '@/types';
import Image from 'next/image';
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import config from '@/config';

export interface RowProps {
  movies: Movie | undefined;
  title?: string;
}

const Row = ({ movies, title }: RowProps) => {
  return (
    <>
      <h4 className='text-3xl text-white'>{title}</h4>
      <div className='flex items-center mt-4'>
        <ChevronLeftIcon className='h-10 w-10 text-white cursor-pointer' />
        <div className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {movies?.results.map(movie => (
            <div
              key={movie.id}
              className='h-56 w-96 relative mr-8 rounded-2xl overflow-hidden cursor-pointer inline-block'
            >
              <Image
                src={`${config.MOVIE_DB_IMAGE_BASE_URL}${movie.backdrop_path}`}
                alt={movie.original_title}
                fill={true}
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>
        <ChevronRightIcon className='h-10 w-10 text-white cursor-pointer' />
      </div>
    </>
  );
};

export default Row;
