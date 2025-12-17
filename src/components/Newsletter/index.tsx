import React from 'react';
import Fieldset from '../Fieldset';
import InputText from '../InputText';
import Button from '../Button';
import style from './Newsletter.module.css';

const index = () => {
  return (
    <section className={style.newsletter}>
      <h2 className={style.titulo}>Inscreva-se</h2>
      <form className={style.form}>
        <Fieldset>
          <InputText placeholder='Digite o seu email aqui' />
        </Fieldset>
        <Button type='submit' variant='default'>
          Inscrever-se
        </Button>
      </form>
    </section>
  );
};

export default index;
