import type { Categoria, Censura } from '../types';

export interface Movie {
  id: number;
  src: string;
  alt: string;
  titulo: string;
  genero: string;
  duracao: number;
  categoria: Categoria;
  censura: Censura;
}
