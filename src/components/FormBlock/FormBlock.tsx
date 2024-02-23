import Container from '@/components/Container';
import MainButton from '@/components/MainButton';

import './FormBlock.scss';

const FormBlock = () => {

  return (
    <div className='form-block'>
      <Container>
        <div className='form-block__container'>
          <div className='form-block__text-block'>
            <div>
              <div className='form-block__text-block__title'>
                <h4>Остались вопросы?</h4>
              </div>
              <div className='form-block__text-block__text'>
                <div className='green'>
                  Закажите обратный звонок и узнайте больше о наших услугах!
                </div>
                Оставьте заявку и наш менеджер перезвонит вам в течении 10 минут
              </div>
              <MainButton text='Заказать звонок'/>
            </div>
          </div>
          <div className='form-block__form'>
            <div className='form-block__form__container'>
              <div className='form-block__form__text-field'>
                <input
                  className='form-block__form__text-field__input'
                  type='text'
                  placeholder='Имя'
                />
              </div>
              <div className='form-block__form__text-field'>
                <input
                  className='form-block__form__text-field__input'
                  type='text'
                  placeholder='Телефон'
                />
              </div>
              <div className='form-block__form__text-field'>
                <textarea
                  className='form-block__form__text-field__input textarea'
                  placeholder='Комментарий'
                />
              </div>
              <div className='form-block__form__agreement'>
                Соглашение о персональных данных
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FormBlock;
