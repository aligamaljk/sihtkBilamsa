import { Button, Drawer, Dropdown, message, Popconfirm } from 'antd';
import React, { useState } from 'react';
import { ITranslation } from '../../../types';
import './HeaderRes.scss';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';
import { GoSignOut } from 'react-icons/go';
import { IoIosArrowDown } from 'react-icons/io';
import { UserOutlined } from '@ant-design/icons';
import { HiOutlineLogin } from 'react-icons/hi';
import {
  getStoredUser
} from '../../../services/user-storage';
import { useAppSelector } from '../../../Hooks/Hooks';
import { itemsLink, logOut } from '../GlobalHome';

const HeaderRes: React.FC<ITranslation> = ({ t }) => {
  const { currentLang } = useAppSelector(
    (state) => state?.user
  );
  const [open, setOpen] = useState(false);
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
          <NavLink
            to='/'
            onClick={() => {
              setOpen(false);
            }}
            className={({ isActive }) =>
              isActive ? 'active-link' : ''
            }
          >
            {t.homeTab}
          </NavLink>
          <NavLink
            to='/about'
            onClick={() => {
              setOpen(false);
            }}
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
            onClick={() => {
              setOpen(false);
            }}
            className={({ isActive }) =>
              isActive ? 'active-link' : ''
            }
          >
            {t.contactUs}
          </NavLink>
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
                    logOut({ t });
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
                onClick={() => {
                  setOpen(false);
                }}
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
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              marginRight: '5px'
            }}
            className={({ isActive }) =>
              isActive ? 'active-link-header' : 'link-res'
            }
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
          </NavLink>
        </div>
      </Drawer>
    </>
  );
};

export default HeaderRes;
