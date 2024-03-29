import { ITranslation } from '../../../types';
import Btn from '../../UI/Button/Btn';
import TwoLineShape from '../../UI/TwoLineShape/TwoLineShape';
import img1 from '../../../assets/home-img1.jpg';
import img2 from '../../../assets/home-img2.jpg';
import './AboutSection.scss';

function AboutSection({ t }: ITranslation) {
  return (
    <section className='about-section'>
      <div className='container'>
        {/* 
            ==============
            Photos Section
            ==============
      */}
        <div className='images'>
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
        <div className='info'>
          {/* 
            =====
            Title 
            =====
      */}
          <div className='heading'>
            <TwoLineShape
              translateX='-35%'
              translateY='-60%'
              color='#ff7d7d'
            />
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

          <Btn
            to='/about'
            styles={{
              border: '2px solid #ff7d7d',
              width: 'fit-content',
              color: 'black',
              margin: '10px 0px'
            }}
          >
            {t.homePage?.about?.btn}
          </Btn>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
