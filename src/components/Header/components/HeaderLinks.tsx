import MenuList from '../../Menu/MenuList';
import MenuItem from '../../Menu/MenuItem/MenuItem';

const HeaderLinks = () => {
  return (
    <MenuList>
      <MenuItem href='Eventos'>Eventos</MenuItem>
      <MenuItem href='club'>Clube Fidelidade</MenuItem>
      <MenuItem href='about'>Sobre nós</MenuItem>
    </MenuList>
  );
};

export default HeaderLinks;
