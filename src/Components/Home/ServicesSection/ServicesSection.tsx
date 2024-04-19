import { ITranslation } from '../../../types';
// import Btn from '../../UI/Button/Btn';
import TwoLineShape from '../../UI/TwoLineShape/TwoLineShape';
import article from '../../../assets/article.svg';
import bottle from '../../../assets/bottle.svg';
import calendar from '../../../assets/Calender.svg';
import scale from '../../../assets/Scale.svg';
import './ServicesSection.scss';

function ServicesSection({ t }: ITranslation) {
  return (
    <section className='services-section'>
      <div className='container'>
        {/* 
            ==============
            Section Title
            ==============
        */}
        <div className='title' data-aos='fade-down' >
          <div className='heading-wrapper'>
            <TwoLineShape color='#ff7d7d' />
            <h2>{t.homePage?.services?.titleH2}</h2>
          </div>
          <h3>{t.homePage?.services?.titleH3}</h3>
        </div>

        {/* 
          ===================
          Section Description 
          ===================
      */}
        <div className='info' data-aos='fade-up' >
          <div className='box'>
            <div>
              <img src={calendar} alt='calendar' />
            </div>
            <h4>{t.homePage?.services?.titleH4Box1}</h4>
            <p>{t.homePage?.services?.box1Text}</p>
          </div>
          <div className='box'>
            <div>
              <img src={scale} alt='scale' />
            </div>
            <h4>{t.homePage?.services?.titleH4Box2}</h4>
            <p>{t.homePage?.services?.box2Text}</p>
          </div>
          <div className='box'>
            <div>
              <img src={article} alt='article' />
            </div>
            <h4>{t.homePage?.services?.titleH4Box3}</h4>
            <p>{t.homePage?.services?.box3Text}</p>
          </div>
          <div className='box'>
            <div>
              <img src={bottle} alt='bottle' />
            </div>
            <h4>{t.homePage?.services?.titleH4Box4}</h4>
            <p>{t.homePage?.services?.box4Text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
