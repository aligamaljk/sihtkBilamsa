
import { Button, Dropdown, message, Popconfirm } from 'antd';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  setCurrentLang,
  setCurrentUser
} from '../../services/store/reducers/user';
import {
  clearStoredToken,
  clearStoredUser,
  clearStoredUserProfile,
  getStoredUser,
  setLang
} from '../../services/user-storage';
import { ITranslation } from '../../types';
import { IoIosArrowDown } from 'react-icons/io';
import { MdLanguage } from 'react-icons/md';
import { UserOutlined } from '@ant-design/icons';
import { HiOutlineLogin } from 'react-icons/hi';
import Logo from '../UI/Logo';
import './Header.scss';
import { GoSignOut } from 'react-icons/go';
import HeaderRes from './HeaderRes/HeaderRes';
import logoAr from '../../assets/logo-ar.svg';
import logoEn from '../../assets/logo.svg';
import { items, itemsLink } from './GlobalHome';
import { useAppDispatch, useAppSelector } from '../../Hooks/Hooks';
import { doSignOut } from '../../Firebase/auth';
// clearStoredUserProfile()
const HeaderApp: React.FC<ITranslation> = ({ t }) => {
  const { currentLang } = useAppSelector(
    (state) => state?.user
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const chanageLang = ({ key }: { key: string }) => {
    dispatch(setCurrentLang(key));
    setLang(key);
    document
      .getElementsByTagName('html')[0]
      .setAttribute('lang', key);
  };

  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>
          {currentLang === 'en' ?
            <Logo
              src={logoEn}
              alt='logo'
              height={45}
              style={{ maxWidth: 'unset' }}
            />
          : <Logo
              src={logoAr}
              alt='logo'
              height={45}
              style={{ maxWidth: 'unset' }}
            />
          }
        </Link>
      </div>

      <div className='links'>
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
              color: '#fff',
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
      </div>
      <div className='login'>
        {
          getStoredUser() ?
            // Log Out Tab
            <div className='login link-res'>
              <Popconfirm
                title={t.LogOut}
                description={t.LogOutMessageModal}
                icon={<></>}
                placement='topLeft'
                okType='danger'
                okText={t.okText}
                cancelText={t.cancelText}
                onConfirm={() => {
                  doSignOut()
                    .then(() => {
                      clearStoredToken();
                      clearStoredUserProfile();
                      clearStoredUser();
                      dispatch(setCurrentUser(null));
                      navigate('/login');
                      message.success(t.LogOutMessage);
                    })
                    .catch((error) => {
                      console.log(error);
                      message.error(error.message);
                    });
                }}
                onCancel={() => {
                  message.info(t.popupCanceledMessage);
                }}
              >
                <Button
                  type='text'
                  danger
                  size='small'
                  className='btn-ant-custom-hover-styles-logOut link-res'
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#ff7d7d',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <span className='text-header'>{t.LogOut}</span>
                  <GoSignOut />
                </Button>
              </Popconfirm>
            </div>
            // Log In Tab
          : <Link
              className='link-res'
              to='/login'
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                paddingRight: '10px',
                color: '#37ebc7'
              }}
            >
              {t.LogIn}
              <HiOutlineLogin
                style={{
                  transform: 'rotate(180deg)'
                }}
              />
            </Link>

        }
        {/* Profile Tab*/}
        <NavLink
          to='/profile'
          title='Profile'
          className={({ isActive }) =>
            isActive ? 'active-link-header' : 'link-res'
          }
        >
          <Button
            type='text'
            danger
            size='small'
            className='btn-ant-custom-hover-styles link-res'
            style={{
              fontSize: '16px',
              fontWeight: '600',
              color: 'white'
            }}
          >
            {t.profileTab}
            <UserOutlined />
          </Button>
        </NavLink>
        {/* admin */}
        {getStoredUser() === 'admin' && (
          <NavLink
            to='/admin'
            title='Admin'
            className={({ isActive }) =>
              isActive ? 'active-link admin-link' : 'admin-link'
            }
          >
            Admin
          </NavLink>
        )}
        {/* admin */}
        {/* Language Tab */}
        <Dropdown
          arrow={{ pointAtCenter: true }}
          // trigger={['click']}
          trigger={['hover']}
          menu={{ items: items, onClick: chanageLang }}
        >
          <Button
            type='text'
            danger
            size='small'
            className='btn-ant-custom-hover-styles'
            style={{
              fontSize: '16px',
              fontWeight: '600',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <span className='text-header'>{t.Language}</span>
            <MdLanguage />
          </Button>
        </Dropdown>
        <div className='mobile'>
          <HeaderRes t={t} />
        </div>
      </div>
    </div>
  );
};

export default HeaderApp;
