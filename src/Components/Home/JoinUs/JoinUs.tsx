import { Link } from 'react-router-dom';
import { ITranslation } from '../../../types';
import './JoinUs.scss';

function JoinUs({ t }: ITranslation) {
  return (
    <div className='join-us'>
      <div className='overlay'>
        <div className='container'>
          <div className='content'>
            <div className='text' data-aos='fade-right'>
              <h2>{t.homePage?.joinUsSection?.h2}</h2>
              <p>{t.homePage?.joinUsSection?.p}</p>
            </div>
            <div data-aos='fade-left'>
              <Link to='/contact' className='hero-btn'>
                {t.homePage?.hero?.btn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
