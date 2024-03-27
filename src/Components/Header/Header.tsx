// import { Button, Dropdown, Image, message, Popconfirm } from 'antd';
import { Button, Dropdown, message, Popconfirm } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  setCurrentLang,
  setCurrentUser
} from '../../services/store/reducers/user';
import {
  clearStoredUser,
  getStoredUser,
  setLang
} from '../../services/user-storage';
import { ITranslation } from '../../types';
// import img from '../../assets/download.png';
// import img2 from '../../assets/translating.0144a3cdb7995b9cf71d492fe721e60b.svg';
import { IoIosArrowDown } from 'react-icons/io';
import { MdLanguage } from 'react-icons/md';
import { UserOutlined } from '@ant-design/icons';
import { HiOutlineLogin } from 'react-icons/hi';
import Logo from '../UI/Logo';
import './Header.scss';
import { useState } from 'react';
import ActiveLinkTab from '../UI/ActiveLinkTab';

const HeaderApp: React.FC<ITranslation> = ({ t }) => {
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
          to='/bmr'
          onClick={() => setActiveTab('BMR')}
          classNameTab='BMR'
          state={activeTab}
          linkText='BMR'
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
    }
  ];
  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>
          {/* <Link to='/'>{t.logo}</Link> */}
          <Logo />
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
        {/* <Link to='/about'>{t.aboutUs}</Link> */}
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
                  activeTab === 'BMR' ||
                  activeTab === 'calories' ||
                  activeTab === 'blogs'
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
        {/* <Link to="/blogs">{t.articles}</Link> */}
        {/* <Link to='/contact'>{t.contactUs}</Link> */}
        <ActiveLinkTab
          to='/contact'
          onClick={() => setActiveTab('Contact Us')}
          classNameTab='Contact Us'
          state={activeTab}
          linkText={t.contactUs}
        />
      </div>
      <div className='login'>
        {getStoredUser() ?
          <div className='login'>
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
                  style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#ff7d7d'
                  }}
                >
                  {t.LogOut}
                  <UserOutlined />
                  {/* <Image src={img} preview={false} width={18} /> */}
                </Button>
              </Link>
            </Popconfirm>
          </div>
        : <Link
            to='/login'
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              paddingRight: '10px'
            }}
          >
            {/* <Image src={img} preview={false} width={18} /> */}
            {t.LogIn}
            <HiOutlineLogin />
          </Link>
        }
        <Dropdown
          arrow={{ pointAtCenter: true }}
          // trigger={['click']}
          trigger={['hover']}
          menu={{ items: items, onClick: chanageLang }}
        >
          <span
            style={{
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              color: 'white'
            }}
          >
            {/* <Image src={img2} preview={false} width={18} /> */}
            {t.Language}
            <MdLanguage />
          </span>
        </Dropdown>
      </div>
    </div>
  );
};

export default HeaderApp;
