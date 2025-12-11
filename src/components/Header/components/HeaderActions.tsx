import Button from '../../Button';
import { HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi';

const HeaderActions = () => {
  return (
    <div>
      <Button variant='icon'>
        <HiOutlineShoppingCart size={24} />
      </Button>
      <Button variant='icon'>
        <HiOutlineUser size={24} />
      </Button>
    </div>
  );
};

export default HeaderActions;
