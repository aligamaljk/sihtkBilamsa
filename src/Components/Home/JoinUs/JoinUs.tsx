import { ITranslation } from '../../../types';
import Btn from '../../UI/Button/Btn';
import './JoinUs.scss';

function JoinUs({ t }: ITranslation) {
  return (
    <div className='join-us'>
      <div className='overlay'>
        <div className='container'>
          <div className='content'>
            <div className='text'>
              <h2>{t.homePage?.joinUsSection?.h2}</h2>
              <p>{t.homePage?.joinUsSection?.p}</p>
            </div>
            <Btn size='lg' to='/contact'>
              {t.homePage?.joinUsSection?.btn}
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
