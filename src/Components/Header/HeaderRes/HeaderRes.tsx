import { Button, Drawer, Dropdown, message, Popconfirm } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ITranslation, StoreType } from '../../../types';
import ActiveLinkTab from '../../UI/ActiveLinkTab';
import './HeaderRes.scss';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { GoSignOut } from 'react-icons/go';
import { IoIosArrowDown } from 'react-icons/io';
import { UserOutlined } from '@ant-design/icons';
import { HiOutlineLogin } from 'react-icons/hi';
import {
  clearStoredUser,
  clearStoredUserProfile,
  getStoredUser
} from '../../../services/user-storage';
import { setCurrentUser } from '../../../services/store/reducers/user';

const HeaderRes: React.FC<ITranslation> = ({ t }) => {
  const { currentLang } = useSelector(
    (state: StoreType) => state?.user
  );
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
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
          onClick={() => {
            setActiveTab('calories');
            setOpen(false);
          }}
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
          onClick={() => {
            setActiveTab('articles');
            setOpen(false);
          }}
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
          onClick={() => {
            setActiveTab('activities');
            setOpen(false);
          }}
          classNameTab='activities'
          state={activeTab}
          linkText={t.activities}
          className='servicesItem'
        />
      )
    }
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <span onClick={showDrawer} className='menu'>
        <RiMenuUnfoldFill className='menu-icon' />
      </span>
      <Drawer
        placement={currentLang === 'en' ? 'left' : 'right'}
        onClose={onClose}
        open={open}
        className='drawer-header'
      >
        <div className='links-res'>
          <ActiveLinkTab
            to='/'
            onClick={() => {
              setActiveTab('home');
              setOpen(false);
            }}
            classNameTab='home'
            state={activeTab}
            linkText={t.homeTab}
          />
          <ActiveLinkTab
            to='/about'
            onClick={() => {
              setActiveTab('About Us');
              setOpen(false);
            }}
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
            onClick={() => {
              setActiveTab('Contact Us');
              setOpen(false);
            }}
            classNameTab='Contact Us'
            state={activeTab}
            linkText={t.contactUs}
          />
        </div>
        <div className='login-res'>
          {
            getStoredUser() ?
              // Log Out Tab
              <div className='login link-res'>
                <Popconfirm
                  title={t.LogOut}
                  description={t.LogOutMessageModal}
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
                    setOpen(false);
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
                    {/* <Image src={img} preview={false} width={18} /> */}
                  </Button>
                </Popconfirm>
              </div>
              // Log In Tab
            : <Link
                className='link-res'
                to='/login'
                onClick={() => {
                  setOpen(false);
                }}
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
            onClick={() => {
              setOpen(false);
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
        </div>
      </Drawer>
    </>
  );
};

export default HeaderRes;
