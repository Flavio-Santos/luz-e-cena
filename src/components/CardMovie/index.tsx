import React from 'react';
import styles from './CardMovie.module.css';
import Tag from '../Tag';

type Categoria = '2D' | '3D';
type Censura = 'Livre' | '10 anos' | '12 anos' | '14 anos' | '16 anos';

interface CardMovieProps {
  src: string;
  alt: string;
  title: string;
  genero: string;
  duracao: string;
  categoria: Categoria;
  censura: Censura;
}

const CardMovie = (props: CardMovieProps) => {
  const { src, alt, title, genero, duracao, categoria, censura } = props;
  return (
    <li className={styles.card}>
      <img src={src} alt={alt} />
      <div children={styles.container}>
        <h3>{title}</h3>
        <div className={styles.informacoes}>
          <div className={styles.linha1}>
            <p>{genero}</p>
            <Tag value={categoria} />
          </div>
          <div className={styles.linha2}>
            <p>{duracao}</p>
            <Tag value={censura} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardMovie;
