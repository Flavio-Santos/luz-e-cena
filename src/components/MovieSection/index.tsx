import { useEffect, useState } from 'react';
import styles from './MovieSection.module.css';
import Fieldset from '../Fieldset';
import InputText from '../InputText';
import Button from '../Button';
import { FaSearch } from 'react-icons/fa';
import MoviesList from '../MovieList';
import type { Movie } from '../../interfaces';
import { getMovies } from '../../api';

const MovieSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    try {
      const movies = await getMovies();
      setMovies(movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant='secondary'>
          <InputText placeholder='Buscar Filmes' />
          <Button variant='icon'>
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.titulo}> Em Cartaz</h1>
        <MoviesList movies={movies} />
      </section>
    </main>
  );
};

export default MovieSection;
