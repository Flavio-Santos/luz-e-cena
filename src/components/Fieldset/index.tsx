import React from 'react';
import style from './Fieldset.module.css';

type FieldsetProps = {
  variant?: 'primary' | 'secondary';
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

const Fieldset = ({ children, variant = 'primary' }: FieldsetProps) => {
  return (
    <fieldset
      className={`${style.inputWrapper} ${
        variant === 'primary' ? style.primary : style.secondary
      }`}
    >
      {children}
    </fieldset>
  );
};

export default Fieldset;
