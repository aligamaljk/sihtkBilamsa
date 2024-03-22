import { Button, Dropdown, Menu, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentLang, setCurrentUser } from '../../services/store/reducers/user';
import { clearStoredUser, setLang } from '../../services/user-storage';

const HeaderApp = ({t} : {t : any}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
      const chanageLang = ({ key }: any) => {
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
        <Link to="/product">{t.product}</Link>
        <Link to="/cart">{t.cart}</Link>
      </div>
      <div className="login">
        <Button
          onClick={() => {
            clearStoredUser();
            setCurrentUser(null);
            navigate('/login');
            message.success(t.LogOutMessage);
          }}
          type="primary"
          danger
          size="small"
        >
          {t.LogOut}
        </Button>
        <Dropdown
          arrow={{ pointAtCenter: true }}
          // trigger={['click']}
          trigger={['hover']}
          // overlay={<Menu onClick={chanageLang} items={items} />}
          // menu= {<Menu onClick={chanageLang} items={items} />}
          menu={{ items : items, onClick : chanageLang}}
        >
          <Button type="link">{t.Language}</Button>
        </Dropdown>
      </div>
    </div>
  );
}

export default HeaderApp;