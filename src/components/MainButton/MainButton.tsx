import './MainButton.scss';

interface Props {
  text: string;
}

const MainButton = ({ text }: Props) => {
  return (
    <div className='main-button'>
      <button className='main-button__button'>{text}</button>
    </div>
  );
};

export default MainButton;
