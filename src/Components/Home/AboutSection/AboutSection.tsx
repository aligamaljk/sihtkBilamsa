import { ITranslation } from '../../../types';
import Btn from '../../UI/Button/Btn';
import TwoLineShape from '../../UI/TwoLineShape/TwoLineShape';
import img1 from '../../../assets/home-img1.jpg';
import img2 from '../../../assets/home-img2.jpg';

function AboutSection({ t }: ITranslation) {
  return (
    <section>
      {/* 
            ===================
            Section for photos
            ===================
      */}
      <div className='images'>
        <div>
          <img src={img1} alt='person-running-in-the-road' />
        </div>
        <div>
          <img src={img2} alt='fruit on a plate with some oats' />
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
        <div>
          <TwoLineShape />
          <h2>{t.aboutUs}</h2>
          <h3>Do Hard things</h3>
        </div>

        {/* 
            =====
            Text 
            =====
        */}
        <div className='text'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Iure, magnam aliquid officia molestiae odit cum et eum
            placeat saepe accusamus hic, vero harum officiis, mollitia
            fugit assumenda aperiam provident cumque.
          </p>

          <p>
            lorm odit cum et eum placeat saepe accusamus hic, vero
            harum officiis, mollitia
          </p>
        </div>

        <Btn to='/about'>read more</Btn>
      </div>
    </section>
  );
}

export default AboutSection;
