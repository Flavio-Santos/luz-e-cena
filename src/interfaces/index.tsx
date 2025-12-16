import type { Categoria, Censura } from '../types';

export interface Movie {
  id: number;
  src: string;
  alt: string;
  title: string;
  genero: string;
  duracao: string;
  categoria: Categoria;
  censura: Censura;
}
