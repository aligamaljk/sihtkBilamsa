import { Layout } from 'antd';
import { Outlet } from 'react-router';
import './OwnLayout.scss';
import HeaderApp from '../../Components/Header/Header';
import FooterApp from '../../Components/Footer/Footer';
import { ITranslation } from '../../types';
const { Content, Header, Footer } = Layout;

const OwnLayout = ({ t }: ITranslation) => {
  return (
    <Layout className='layout'>
      <Header className='main-header'>
        <HeaderApp t={t} />
      </Header>
      <Content
        style={{
          marginTop: '80px'
        }}
      >
        <Outlet />
      </Content>
      <Footer>
        <FooterApp t={t} />
      </Footer>
    </Layout>
  );
};

export default OwnLayout;
