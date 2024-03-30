// import { Button, Dropdown, Image, message, Popconfirm } from 'antd';
import { Button, Dropdown, message, Popconfirm } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentLang,
  setCurrentUser
} from '../../services/store/reducers/user';
import {
  clearStoredUser,
  clearStoredUserProfile,
  getStoredUser,
  setLang
} from '../../services/user-storage';
import { ITranslation, StoreType } from '../../types';
import { IoIosArrowDown } from 'react-icons/io';
import { MdLanguage } from 'react-icons/md';
import { UserOutlined } from '@ant-design/icons';
import { HiOutlineLogin } from 'react-icons/hi';
import Logo from '../UI/Logo';
import './Header.scss';
import { useState } from 'react';
import ActiveLinkTab from '../UI/ActiveLinkTab';
import { GoSignOut } from 'react-icons/go';
import HeaderRes from './HeaderRes/HeaderRes';
import logoAr from '../../assets/logo-ar.svg';
import logoEn from '../../assets/logo.svg';

const HeaderApp: React.FC<ITranslation> = ({ t }) => {
  const { currentLang } = useSelector(
    (state: StoreType) => state?.user
  );
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const chanageLang = ({ key }: { key: string }) => {
    dispatch(setCurrentLang(key));
    setLang(key);
    document
      .getElementsByTagName('html')[0]
      .setAttribute('lang', key);
  };
  const items = [
    {
      key: 'en',
      label: 'English'
    },
    {
      key: 'ar',
      label: 'العربية'
    }
  ];

  const itemsLink = [
    {
      key: '1',
      label: (
        <ActiveLinkTab
          to='/bmi'
          onClick={() => setActiveTab('BMI')}
          classNameTab='BMI'
          state={activeTab}
          linkText='BMI'
          className='servicesItem'
        />
      )
    },
    {
      key: '2',
      label: (
        <ActiveLinkTab
          to='/calories'
          onClick={() => setActiveTab('calories')}
          classNameTab='calories'
          state={activeTab}
          linkText={t.calories}
          className='servicesItem'
        />
      )
    },
    {
      key: '3',
      label: (
        <ActiveLinkTab
          to='/articles'
          onClick={() => setActiveTab('articles')}
          classNameTab='articles'
          state={activeTab}
          linkText={t.articles}
          className='servicesItem'
        />
      )
    },
    {
      key: '4',
      label: (
        <ActiveLinkTab
          to='/activities'
          onClick={() => setActiveTab('activities')}
          classNameTab='activities'
          state={activeTab}
          linkText={t.activities}
          className='servicesItem'
        />
      )
    }
  ];
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
        <ActiveLinkTab
          to='/'
          onClick={() => setActiveTab('home')}
          classNameTab='home'
          state={activeTab}
          linkText={t.homeTab}
        />
        <ActiveLinkTab
          to='/about'
          onClick={() => setActiveTab('About Us')}
          classNameTab='About Us'
          state={activeTab}
          linkText={t.aboutUs}
        />
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
              color:
                (
                  activeTab === 'BMI' ||
                  activeTab === 'calories' ||
                  activeTab === 'articles' ||
                  activeTab === 'activities'
                ) ?
                  '#ff7d7d'
                : 'white',
              textTransform: 'capitalize',
              letterSpacing: '0.14px'
            }}
          >
            {t.services} <IoIosArrowDown />
          </span>
        </Dropdown>
        <ActiveLinkTab
          to='/contact'
          onClick={() => setActiveTab('Contact Us')}
          classNameTab='Contact Us'
          state={activeTab}
          linkText={t.contactUs}
        />
      </div>
      <div className='login'>
        {
          getStoredUser() ?
            // Log Out Tab
            <div className='login link-res'>
              <Popconfirm
                title={t.LogOut}
                description={t.LogOutMessageModal}
                // title="Are you sure?"
                icon={<></>}
                placement='topLeft'
                okType='danger'
                okText={t.okText}
                cancelText={t.cancelText}
                onConfirm={() => {
                  clearStoredUser();
                  clearStoredUserProfile();
                  dispatch(setCurrentUser(null));
                  navigate('/login');
                  message.success(t.LogOutMessage);
                }}
                onCancel={() => {
                  message.info(t.popupCanceledMessage);
                }}
                // okText="Yes"
                // cancelText="No"
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
                color: '#ff7d7d'
              }}
            >
              {t.LogIn}
              <HiOutlineLogin />
            </Link>

        }

        {/* Profile Tab*/}
        <Link
          to='/profile'
          title='Profile'
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            marginRight: '5px'
          }}
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
        </Link>
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
