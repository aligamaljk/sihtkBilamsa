import React, { useState } from 'react';
import {  ITranslation } from '../../types';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import './Activities.scss';
import {
  Layout,
  Menu,
  MenuProps,
} from 'antd';
const { Content,Sider } = Layout;
import { CgGym } from 'react-icons/cg';
import { AiOutlineForm } from 'react-icons/ai';
import { MdOutlineSportsSoccer } from 'react-icons/md';

const Activities: React.FC<ITranslation> = ({ t }) => {
  const navigate = useNavigate();
const [collapsed, setCollapsed] = useState(false);
const [linkLocation, setLinkLocation] = useState<string>("activities");
  type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  key: React.Key,
  label: React.ReactNode,
  children?: MenuItem[],
  icon?: React.ReactNode,
): MenuItem {
  return {
    key,
    label,
    children,
    icon,
  } as MenuItem;
}
  const items = [
    getItem('activities', t.goal, undefined, <AiOutlineForm />),
    getItem(
      'activities/sports',
      t.sportsSid,
      undefined,
      <MdOutlineSportsSoccer />
    ),
    getItem('activities/exercises', t.exercises, undefined, <CgGym />)
  ];
  return (
    <>
      <div className='activities'>
        <div className='section-header'>
          <h1 className='title'>{t.activities}</h1>
          <div className='link'>
            <Link to='/'>{t.homeTab}</Link> <IoIosArrowForward />
            {t.activities}
          </div>
        </div>
        <Layout>
          <Sider
            style={{
              minHeight: '50vh'
            }}
            className='sider'
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            theme='dark'
          >
            <Menu
              theme='dark'
              mode='inline'
              items={items}
              defaultSelectedKeys={[
                window.location.pathname === '/' ?
                  ''
                : window.location.pathname.split('/')[1]
              ]}
              defaultOpenKeys={['sub2']}
              onClick={({ key }) => {
                console.log('getItem  key:', key);
                navigate('/' + key);
                setLinkLocation(key);
              }}
              className={
                location.pathname === linkLocation ?
                  'sidebar-menu-active'
                : 'sidebar-menu'
              }
            />
          </Sider>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </div>
    </>
  );
};

export default Activities;
