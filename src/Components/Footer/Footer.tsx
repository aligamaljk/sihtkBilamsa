import { ITranslation } from '../../types';
import logo from '../../assets/logo.svg';
import { Dropdown, Image } from 'antd';
import './Footer.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import { itemsLink } from '../Header/GlobalHome';

const FooterApp = ({ t }: ITranslation) => {
  return (
    <div className='footer'>
      <div className='container-footer'>
        <div className='log-footer'>
          <Image src={logo} alt='logo' preview={false} />
        </div>
        <div className='links-footer'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'active-link' : ''
            }
          >
            {t.homeTab}
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive ? 'active-link' : ''
            }
          >
            {t.aboutUs}
          </NavLink>
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
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive ? 'active-link' : ''
            }
          >
            {t.contactUs}
          </NavLink>
          <NavLink
            to='/profile'
            className={({ isActive }) =>
              isActive ? 'active-link' : ''
            }
          >
            {t.profileTab}
          </NavLink>
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
