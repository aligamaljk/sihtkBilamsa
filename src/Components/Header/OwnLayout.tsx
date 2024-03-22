import { Button, Layout, message, Menu,Dropdown } from 'antd'
import React from 'react'
import { Outlet, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { clearStoredUser, setLang } from '../../services/user-storage';
// import { setCurrentLang, setCurrentUser } from '../../services/store/reducers/usercers/user';
import { setCurrentLang, setCurrentUser } from '../../services/store/reducers/user';
import { useDispatch } from 'react-redux';
import "./OwnLayout.scss"
import HeaderApp from './Header';
import FooterApp from './Footer';
const { Content, Sider, Header, Footer } = Layout;
const OwnLayout = ({t} : {t : any}) => {
  return (
      <Layout className="layout">
        <Header
          className='main-header'
        >
         <HeaderApp t={t} />
        </Header>
        <Content
          style={{
            padding: '0 50px',
            marginTop: 90,
          }}
        >
          <Outlet />
        </Content>
        <Footer>
          <FooterApp />
        </Footer>
      </Layout>
  );
}

export default OwnLayout