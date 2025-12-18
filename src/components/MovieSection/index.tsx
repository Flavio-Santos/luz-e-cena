import styles from './MovieSection.module.css';
import Fieldset from '../Fieldset';
import InputText from '../InputText';
import Button from '../Button';
import { FaSearch } from 'react-icons/fa';
import MoviesList from '../MovieList';
import useFetchMovies from '../../hooks/useFetchMovies';
import useFilterMovies from '../../hooks/useFilterMovies';

const MovieSection = () => {
  const { movies, isLoading, error } = useFetchMovies();

  const { searchTerm, setSearchTerm, filteredMovies, handleSearch } =
    useFilterMovies(movies);
  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant='secondary'>
          <InputText
            value={searchTerm}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(event.target.value)
            }
            placeholder='Buscar Filmes'
          />
          <Button variant='icon' onClick={handleSearch}>
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.titulo}> Em Cartaz</h1>
        {isLoading && <p>Carregando filmes...</p>}
        {error && <p>{error}</p>}
        <MoviesList movies={filteredMovies} />
      </section>
    </main>
  );
};

export default MovieSection;
