import React from 'react'
import { Form, Button,  Input, Card, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import '../LogIn/Login.scss';
import { ITranslation } from '../../../types';
import { IoIosArrowForward } from 'react-icons/io';
import { setCurrentUser } from '../../../services/store/reducers/user';
import { setStoredUser } from '../../../services/user-storage';
import { useDispatch } from 'react-redux';

const SignUp : React.FC <ITranslation> = ({t}) => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
    const onAuthLogUp = (values: any) => {
    dispatch(setCurrentUser(values));
    setStoredUser(values.name);
    message.success(t.successLog + ' ' + values.name);
    navigate('/profile');
    }
  return (
    <>
      <div className="logUp">
        <div className="login-form-container">
          <div className="section-header">
            <h1 className="title">{t.sinUp}</h1>
            <div className="link">
              <Link to="/">{t.homeTab}</Link> <IoIosArrowForward />
              {t.sinUp}
            </div>
          </div>
          <Card className="login-form" loading={false}>
            <h3 className="title-form">
              {t.senUpMes} <span>{t.logo}</span>{' '}
            </h3>
            <Form
              layout="vertical"
              name="login"
              onFinish={onAuthLogUp}
              className="login-form-body"
            >
            <Form.Item
              name="name"
              label={t.name}
              rules={[{ required: true, message: t.requiredName }]}
            >
              <Input placeholder={t.name} type='text' min={3} max={15} />
            </Form.Item>
              <Form.Item
                name="password"
                label={t.password}
                rules={[{ required: true, message: t.requiredPassword }]}
                
              >
                <Input.Password placeholder={t.password} min={3} max={15} />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  className="login-form-button"
                  htmlType="submit"
                  loading={false}
                >
                  {t.sinUp}
                </Button>
              </Form.Item>
              <p
                className="account-register-row"
                style={{
                  textAlign: 'center',
                  letterSpacing: '1px',
                  fontSize: '16px',
                }}
              >
                {t.sin}
                <Link
                  to="/login"
                  style={{
                    color: '#612166',
                    cursor: 'pointer',
                    fontWeight: 600,
                    margin: '0 4px',
                  }}
                >
                  {t.LogIn}
                </Link>
              </p>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
}

export default SignUp