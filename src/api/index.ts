import axios from 'axios';
import type { Movie } from '../interfaces';

export const api = axios.create({
  baseURL: 'http://localhost:4000',
});

export const getMovies = async (): Promise<Movie[]> => {
  const response = await api.get('/movies');
  return response.data;
};
