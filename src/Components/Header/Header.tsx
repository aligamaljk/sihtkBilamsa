import { Button, Dropdown, Image, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentLang, setCurrentUser } from '../../services/store/reducers/user';
import { clearStoredUser, getStoredUser, setLang } from '../../services/user-storage';
import { ITranslation } from '../../types';
import img from '../../assets/download.png';
import img2 from '../../assets/translating.0144a3cdb7995b9cf71d492fe721e60b.svg';

const HeaderApp: React.FC<ITranslation> = ({ t }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const chanageLang = ({ key }: {key: string }) => {
    dispatch(setCurrentLang(key));
    setLang(key);
    document.getElementsByTagName('html')[0].setAttribute('lang', key);
  };
  const items = [
    {
      key: 'en',
      label: 'English',
    },
    {
      key: 'ar',
      label: 'العربية',
    },
  ];
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">{t.logo}</Link>
      </div>
      <div className="links">
        <Link to="/">{t.home}</Link>
        <Link to="/about">{t.aboutUs}</Link>
        <Link to="/blogs">{t.blogs}</Link>
        <Link to="/contact">{t.contactUs}</Link>
      </div>
      <div className="login">
        {getStoredUser() ? (
          <Button
            onClick={() => {
              clearStoredUser();
              dispatch(setCurrentUser(null));
              navigate('/login');
              message.success(t.LogOutMessage);
            }}
            type="text"
            danger
            size="small"
            style={{ fontSize: '16px', fontWeight: '600' }}
          >
            {t.LogOut}
          </Button>
        ) : (
          <Link
            to="/login"
            style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
          >
            <Image src={img} preview={false} width={18} />
            {t.LogIn}
          </Link>
        )}
        <Dropdown
          arrow={{ pointAtCenter: true }}
          // trigger={['click']}
          trigger={['hover']}
          menu={{ items: items, onClick: chanageLang }}
        >
          <span
            style={{ cursor: 'pointer', fontSize: '16px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}
          >
            <Image src={img2} preview={false} width={18} />
          {t.Language}
          </span>
        </Dropdown>
      </div>
    </div>
  );
};

export default HeaderApp;