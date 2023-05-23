import { Movie } from '@/types';
import React from 'react';

export interface RowProps {
  movies: Movie | undefined;
}

const Row = ({ movies }: RowProps) => {
  return (
    <div>
      {movies?.results.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default Row;
