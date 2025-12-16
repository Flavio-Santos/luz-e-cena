import React from 'react';
import style from './MovieList.module.css';
import CardMovie from '../CardMovie';
import type { Movie } from '../../interfaces';

interface MovieListProps {
  //removies: Array<Movie>;
  //. ou
  movies: Movie[];
}

const MoviesList = ({ movies }: MovieListProps) => {
  return (
    <ul className={style.lista}>
      {movies.map(movie => (
        <CardMovie key={movie.id} {...movie} />
      ))}
    </ul>
  );
};

export default MoviesList;
