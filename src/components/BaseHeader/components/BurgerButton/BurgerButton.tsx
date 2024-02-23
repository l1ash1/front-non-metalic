import BurgerClosed from '@/assets/icons/burger-button-closed.svg';
import BurgerOpen from '@/assets/icons/burger-button-open.svg';
import './BurgerButton.scss';

interface Props {
  isOpen: boolean;
}

const BurgerButton = ({ isOpen }: Props) => {
  return (
    <div className='burger-button'>
      {isOpen ? <BurgerOpen /> : <BurgerClosed />}
    </div>
  );
};

export default BurgerButton;
