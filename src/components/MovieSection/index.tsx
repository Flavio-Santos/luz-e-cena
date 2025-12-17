import styles from './MovieSection.module.css';
import Fieldset from '../Fieldset';
import InputText from '../InputText';
import Button from '../Button';
import { FaSearch } from 'react-icons/fa';
import MoviesList from '../MovieList';
import userFetchMovies from '../../hooks/userFetchMovies';

const MovieSection = () => {
  const { movies, isLoading, error } = userFetchMovies();

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
