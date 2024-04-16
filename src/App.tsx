import { useEffect } from 'react';
import './App.scss';
import en from './localization/en';
import ar from './localization/ar';
import { ConfigProvider, App as AntApp } from 'antd';
import RoutesWrapper from './Route';
import { useSelector } from 'react-redux';
import './styles/ant.scss';
import { StoreType } from './types';
const tokenAnt = {
  token: {
    fontFamily: 'Cairo, sans-serif',
    // colorPrimary: '#8c4191',
    colorPrimary: '#0d6064b1',
    contentFontSize: 20,
    fontWeight: 600,
    borderRadius: 8,
    colorText: '#294151',
    fontSize: 16,
    controlHeight: 40,
    colorBtnColor: '#fff',
    secBtnBg: '#F8F5FF',
    secColor: '#8A4CF5',
    defaultBg: '#EEF0FF',
    defaultColor: '#4F5062',
    defaultBorderColor: '#B0B0C0',
    thirdColor: '#59A6ED',
    Accent: '#EBF2FA',
    line: '#CFD8E3',
    fontSizeXL: 18,
    fontSizeHeading5: 16,
    fontSizeHeading4: 18,
    fontSizeHeading3: 22,
    fontSizeHeading2: 25,
    fontSizeHeading1: 32,
    marginMD: 24,
    wireframe: false,
    marginLG: 32,
    marginXL: 40,
    paddingMD: 24,
    paddingLG: 32,
    paddingXL: 40,
    borderRadiusSM: 4,
    borderRadiusLG: 12,
    borderRadiusXS: 4
  }
};

function App() {
  const { currentLang } = useSelector(
    (state: StoreType) => state?.user
  );
  // console.log(currentLang);
  const t = currentLang === 'en' ? en : ar;
  useEffect(() => {
    if (currentLang) {
      document
        .getElementsByTagName('html')[0]
        .setAttribute('lang', currentLang);
    }
  }, [currentLang]);
  return (
    <ConfigProvider
      direction={currentLang === 'en' ? 'ltr' : 'rtl'}
      theme={tokenAnt}
      virtual
    >
      <AntApp>
        <RoutesWrapper t={t} />
      </AntApp>
    </ConfigProvider>
  );
}

export default App;
