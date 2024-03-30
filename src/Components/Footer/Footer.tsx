import { ITranslation } from '../../types';
import logo from '../../assets/logo.svg';
import { Dropdown, Image } from 'antd';
import './Footer.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

const FooterApp = ({ t }: ITranslation) => {
  const itemsLink = [
    {
      key: '1',
      label: <Link to='/bmi'>Bmi</Link>
    },
    {
      key: '2',
      label: <Link to='/calories'>{t.calories}</Link>
    },
    {
      key: '3',
      label: <Link to='/articles'>{t.articles}</Link>
    }
  ];

  return (
    <div className='footer'>
      <div className='container-footer'>
        <div className='log-footer'>
          <Image src={logo} alt='logo' preview={false} />
        </div>
        <div className='links-footer'>
          <Link to='/'>{t.homeTab}</Link>
          <Link to='/about'>{t.aboutUs}</Link>
          <Dropdown
            arrow={{ pointAtCenter: true }}
            trigger={['hover']}
            menu={{ items: itemsLink }}
            overlayClassName='overlay-services-dropdown'
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
                fontSize: '18px',
                fontWeight: '400',
                color: 'white',
                textTransform: 'capitalize',
                letterSpacing: '0.14px'
              }}
            >
              {t.services} <IoIosArrowDown />
            </span>
          </Dropdown>
          <Link to='/contact'>{t.contactUs}</Link>
          <Link to='/profile'>{t.profileTab}</Link>
        </div>
        <div className='footer-copyright'>
          <p
            style={{
              color: '#737681',
              fontSize: '1.7rem',
              lineHeight: '1.9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px'
            }}
          >
            &copy;{t.CopyrightsReservedFor}
            <Link
              to={'/'}
              style={{
                color: '#ff7d7d'
              }}
            >
              {t.titleLogo}
            </Link>
            2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterApp;
