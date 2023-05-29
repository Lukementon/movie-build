import config from '@/config';
import { Movie } from '@/derivedTypes';
import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type BannerProps = {
  movies: Movie;
};

const Banner = ({ movies }: BannerProps) => (
  <div className='min-h-[800px] rounded-2xl w-full bg-gray-950'>
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={3000}
    >
      {movies?.results.map(movie => (
        <div
          key={movie.id}
          className='min-h-[800px] rounded-2xl overflow-hidden w-full relative'
        >
          <Image
            loading='lazy'
            src={`${config.MOVIE_DB_IMAGE_BASE_URL}${movie.backdrop_path}`}
            alt={movie.original_title}
            priority={false}
            fill={true}
            sizes='100%'
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      ))}
    </Carousel>
  </div>
);

export default Banner;
