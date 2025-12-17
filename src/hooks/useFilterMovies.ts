import { useEffect, useState } from 'react';
import type { Movie } from '../interfaces';

const useFilterMovies = (movies: Movie[]) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  // TODO
  // Atualizar a lista exibida de acordo com o que o usuario vai clicando e ver se da para adicionar um intervalo entre as requisições
  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const handleSearch = () => {
    const filtered = movies.filter(movie =>
      movie.titulo.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredMovies(filtered);
  };

  return { searchTerm, setSearchTerm, filteredMovies, handleSearch };
};

export default useFilterMovies;
