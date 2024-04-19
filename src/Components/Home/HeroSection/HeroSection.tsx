
import { Link } from 'react-router-dom';
import { ITranslation } from '../../../types';
import TwoLineShape from '../../UI/TwoLineShape/TwoLineShape';
import './HeroSection.scss';
function HeroSection({ t }: ITranslation) {
  return (
    <section className='hero-section'>
      <div className='container'>
        <div className='description' data-aos='fade-right'>
          <div className='info'>
            <TwoLineShape
              className='hero-shape'
              translateX=''
              translateY=''
            />
            <h1>{t.homePage?.hero?.h1_1}</h1>
          </div>
          <h1 className='second-heading'>{t.homePage?.hero?.h1_2}</h1>
          <p>{t.homePage?.hero?.p}</p>
          <Link to='/contact' className='hero-btn'>
            {t.homePage?.hero?.btn}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
