import { Link } from 'react-router-dom';
import { ITranslation } from '../../../types';
import TwoLineShape from '../../UI/TwoLineShape/TwoLineShape';
import './Articles.scss';

function Articles({ t }: ITranslation) {
  return (
    <div className='home-page-articles-section'>
      <div className='container'>
        {/* 
            ===============
            Section Title
            ===============
        */}
        <div className='heading'>
          <div className='title'>
            <TwoLineShape />
            <h2>{t.homePage?.articlesSection?.h2}</h2>
          </div>
          <h3>{t.homePage?.articlesSection?.h3}</h3>
        </div>

        {/* 
            ===============
            Section Content
            ===============
        */}
        <div className='content'>
          {/* 
            =================
            Article Number #1
            =================
        */}
          <div className='box'>
            <Link to='/articles'>
              <img
                src='https://blog.bonsecours.com/wp-content/uploads/2023/02/Ben-Risks-of-Running-1200x610.jpg'
                alt='man and woman running in the street'
              />
            </Link>
            <div className='footer'>
              <h4>{t.homePage?.articlesSection?.article1.title}</h4>
              <Link to='/articles' className='articlesLink'>
                {t.homePage?.articlesSection?.link}
              </Link>
            </div>
          </div>

          {/* 
            =================
            Article Number #2
            =================
        */}
          <div className='box'>
            <Link to='/articles'>
              <img
                src='https://cdn-magazine.nutrabay.com/wp-content/uploads/2023/06/man-sleeping-comfortable-bed-scaled.jpg'
                alt='man sleeping in bed'
              />
            </Link>
            <div className='footer'>
              <h4>{t.homePage?.articlesSection?.article2.title}</h4>
              <Link to='/articles' className='articlesLink'>
                {t.homePage?.articlesSection?.link}
              </Link>
            </div>
          </div>

          {/* 
            =================
            Article Number #3
            =================
        */}
          <div className='box'>
            <Link to='/articles'>
              <img
                src='https://fairmountbenefits.com/wp-content/uploads/2020/06/brain-exercise-1024x1024.png'
                alt='brain doing sport and smiling'
              />
            </Link>
            <div className='footer'>
              <h4>{t.homePage?.articlesSection?.article3.title}</h4>
              <Link to='/articles' className='articlesLink'>
                {t.homePage?.articlesSection?.link}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
