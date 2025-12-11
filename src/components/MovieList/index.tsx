import React from 'react';
import style from './MovieList.module.css';
import CardMovie from '../CardMovie';

type Categoria = '2D' | '3D';
type Censura = 'Livre' | '10 anos' | '12 anos' | '14 anos' | '16 anos';

interface Movie {
  id: number;
  src: string;
  alt: string;
  title: string;
  genero: string;
  duracao: string;
  categoria: Categoria;
  censura: Censura;
}

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
