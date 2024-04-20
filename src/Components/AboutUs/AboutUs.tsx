import { Link } from 'react-router-dom';
import { ITranslation } from '../../types';
import { IoIosArrowForward } from 'react-icons/io';
import './AboutUs.scss';
function AboutUs({ t }: ITranslation) {
  return (
    <div className='about'>
      {/* About Page Header */}
      <div className='about-us-header'>
        <div className='bg-image'></div>
        <div className='section-header'>
          <h1 className='title'>{t.aboutUs}</h1>
          <div className='link'>
            <Link to='/'>{t.homeTab}</Link>
            <IoIosArrowForward />
            {t.contactUs}
          </div>
        </div>
      </div>

      {/* About Page Body */}
      <div className='about-us-body'>
        {/* Description first content section */}
        <div className='description-section'>
          <div className='des-sec-images'>
            <div className='rectangle one'>
              <div className='overlay' data-aos='fade-right' >
                <img src='about-1.jpg' alt='athletes doing sports' />
              </div>
              <div className='overlay' data-aos='fade-left' >
                <img src='about-2.jpg' alt='fitness tools' />
              </div>
            </div>
            <div className='rectangle two' data-aos='fade-up' >
              <div className='overlay'>
                <img src='about-3.svg' alt='sports tools' />
              </div>
              <div className='overlay' data-aos='fade-down' >
                <img
                  src='about-4.svg'
                  alt='athlete running above a phone'
                />
              </div>
            </div>
          </div>

          <div className='des-sec-info' data-aos='fade-up'>
            <div className='title'>
              <h2>{t?.aboutPage?.about}</h2>
              <span className='website-name'>{t?.websiteName}</span>
            </div>
            <div className='text'>
              <p>{t?.aboutPage?.aboutDescriptionP1}</p>
              <p>{t?.aboutPage?.aboutDescriptionP2}</p>
            </div>
          </div>
        </div>

        {/* <TeamSection t={t} /> */}
      </div>
    </div>
  );
}

export default AboutUs;
