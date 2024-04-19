import { ITranslation } from '../../../types';
import TwoLineShape from '../../UI/TwoLineShape/TwoLineShape';
import img1 from '../../../assets/home-img1.jpg';
import img2 from '../../../assets/home-img2.jpg';
import './AboutSection.scss';
import { getLang } from '../../../services/user-storage';
import { Link } from 'react-router-dom';

function AboutSection({ t }: ITranslation) {
  const lang = getLang();
  console.log(lang);

  return (
    <section className='about-section'>
      <div className='container'>
        {/* 
            ==============
            Photos Section
            ==============
      */}
        <div className='images' data-aos='fade-down'>
          <div>
            <img
              className='img one'
              src={img1}
              alt='person-running-in-the-road'
            />
          </div>
          <div>
            <img
              className='img two'
              src={img2}
              alt='fruit on a plate with some oats'
            />
          </div>
        </div>

        {/* 
          ===================
          Section Description 
          ===================
      */}
        <div className='info' data-aos='fade-up'>
          {/* 
            =====
            Title 
            =====
      */}
          <div className='heading'>
            {lang === 'en' ?
              <TwoLineShape
                translateX='-35%'
                translateY='-60%'
                color='#ff7d7d'
              />
            : <TwoLineShape
                translateX='-35%'
                translateY='-180%'
                color='#ff7d7d'
              />
            }
            <h2>{t.aboutUs}</h2>
          </div>
          <h3>{t.homePage?.about?.advice}</h3>

          {/* 
            =====
            Text 
            =====
        */}
          <div className='text'>
            <p>{t.homePage?.about?.p1}</p>

            <p>{t.homePage?.about?.p2}</p>
          </div>
          <Link to='/about' className='hero-btn'>
            {t.homePage?.hero?.btn}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
