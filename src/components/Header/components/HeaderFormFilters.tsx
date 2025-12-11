import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import SelectorGroup from '../../Selector/SelectorGroup';
import SelectorOption from '../../Selector/SelectorOption';

const cidades = [
  { id: 1, nome: 'São Paulo' },
  { id: 2, nome: 'Rio de Janeiro' },
  { id: 3, nome: 'Belo Horizonte' },
  { id: 4, nome: 'Curitiba' },
  { id: 5, nome: 'Porto Alegre' },
];

const HeaderFormFilters = () => {
  return (
    <form>
      <SelectorGroup id='cidade' icon={<FaLocationDot />}>
        <SelectorOption label='escolha sua cidade' value=''></SelectorOption>
        <SelectorOption label='São Paulo' value='sp'></SelectorOption>
        {cidades.map(cidade => {
          return (
            <SelectorOption
              key={cidade.id}
              label={cidade.nome}
              value={cidade.nome.toLowerCase().replace(/\s/g, '')}
            />
          );
        })}
      </SelectorGroup>
    </form>
  );
};

export default HeaderFormFilters;
