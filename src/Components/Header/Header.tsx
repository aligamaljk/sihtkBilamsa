import { Button, Dropdown, Image, message, Popconfirm } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentLang, setCurrentUser } from '../../services/store/reducers/user';
import { clearStoredUser, getStoredUser, setLang } from '../../services/user-storage';
import { ITranslation } from '../../types';
import img from '../../assets/download.png';
import img2 from '../../assets/translating.0144a3cdb7995b9cf71d492fe721e60b.svg';
import { IoIosArrowDown } from 'react-icons/io';

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

  const itemsLink = [
    {
      key: '1',
      label: <Link to="/bmr"> BMR</Link>,
    },
    {
      key: '2',
      label: <Link to="/calories">{t.calories}</Link>,
    },
    {
      key: '3',
      label: <Link to="/blogs">{t.articles}</Link>,
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
        <Dropdown
          arrow={{ pointAtCenter: true }}
          trigger={['hover']}
          menu={{ items: itemsLink }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: '400',
              color: 'black',
              textTransform: 'capitalize',
              letterSpacing: '0.14px',
            }}
          >
            {t.services} <IoIosArrowDown />
          </span>
        </Dropdown>
        {/* <Link to="/blogs">{t.articles}</Link> */}
        <Link to="/contact">{t.contactUs}</Link>
      </div>
      <div className="login">
        {getStoredUser() ? (
          <div className="login">
             <Popconfirm
              // title={t.LogOutMessage}
              title="Are you sure?"
              icon={<></>}
              placement="topLeft"
              okType="danger"
              okText={t.okText}
              cancelText={t.cancelText}
              onConfirm={() => {
                clearStoredUser();
                dispatch(setCurrentUser(null));
                navigate('/login');
                // message.success(t.LogOutMessage);
              }}
              onCancel={() => {
                message.error('Click on No');
              }}
              // okText="Yes"
              // cancelText="No"
              >
                <Button
                  type="text"
                  danger
                  size="small"
                  style={{ fontSize: '16px', fontWeight: '600' }}
                >
                  {t.LogOut}
                </Button>
            </Popconfirm>
          <Link to="/profile"
            title='Profile'
            style={{ display: 'flex', alignItems: 'center', gap: '5px',marginRight: '5px' }}
          >
            <Image src={img} preview={false} width={18} />
          </Link>
          </div>
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
            style={{
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
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