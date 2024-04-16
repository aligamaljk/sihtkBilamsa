import React, { useState } from 'react';
import { Form, Button, App, Input, Card } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setStoredToken, setStoredUser } from '../../../services/user-storage';
import './Login.scss';
import { setCurrentUser } from '../../../services/store/reducers/user';
import { ITranslation, UserInput } from '../../../types';
import { IoIosArrowForward } from 'react-icons/io';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../Firebase/auth';
import { User } from 'firebase/auth';

const LogIn: React.FC<ITranslation> = ({ t }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { message } = App.useApp();
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const onAuthLogin = (values: UserInput) => {
    setLoading(true);
    doSignInWithEmailAndPassword(values.email as string , values.password as unknown as string ).then((userCredential) => {
      const user : User = userCredential.user as User | any;
      setLoading(false);
      console.log(user);
      setStoredToken(user?.uid as string);
      setStoredUser(values.name as string);
      dispatch(setCurrentUser(values));
      message.success(t.successLog + ' ' + values.name);
      navigate('/profile');
    }).catch((error) => {
      setLoading(false);
      message.error(error.message);
      console.log(error);
    })
  };
  const authLoginWithGoogle = () => {
    setLoadingGoogle(true);
    doSignInWithGoogle().then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      setStoredToken(user?.uid);
      // setStoredUser(user?.displayName || undefined);
      setStoredUser(user?.displayName || "");
      dispatch(setCurrentUser(user?.displayName));
      setLoadingGoogle(false);
      message.success(t.successLog + ' ' + user?.displayName);
      navigate('/profile');
    }).catch((error) => {
      console.log(error);
      message.error(error.message)
      setLoadingGoogle(false);
    })
  };

  return (
    <div className='login'>
      <div className='login-form-container'>
        <div className='section-header'>
          <h1 className='title'>{t.LogIn}</h1>
          <div className='link'>
            <Link to='/'>{t.homeTab}</Link> <IoIosArrowForward />
            {t.LogIn}
          </div>
        </div>
        <Card className='login-form' loading={false}>
          <h3 className='title-form'>
            {t.logInTitle} <span>{t.logo}</span>
          </h3>
          <Form
            layout='vertical'
            name='login'
            onFinish={onAuthLogin}
            className='login-form-body'
          >
            <Form.Item
              name='name'
              label={t.name}
              rules={[{ required: true, message: t.requiredName }]}
            >
              <Input
                placeholder={t.name}
                type='text'
                min={3}
                max={10}
              />
            </Form.Item>
            <Form.Item
              name='email'
              label={t.email}
              rules={[{ required: true, message: t.requiredEmail }]}
            >
              <Input placeholder={t.email} type='email' />
            </Form.Item>
            <Form.Item
              name='password'
              label={t.password}
              rules={[
                { required: true, message: t.requiredPassword }
              ]}
            >
              <Input.Password
                min={3}
                max={15}
                placeholder={t.password}
              />
            </Form.Item>
            <p className='account-register-row'>
              <Link
                to='/forgot-password'
                style={{
                  color: '#294151',
                  fontSize: '16px',
                  fontWeight: 500,
                  letterSpacing: '.16px'
                }}
              >
                {t.forget}
              </Link>
            </p>
            <Form.Item>
              <Button
                type='primary'
                className='login-form-button'
                htmlType='submit'
                loading={loading}
              >
                {t.LogIn}
              </Button>
              <Button type="primary" className="login-form-button-google" 
                onClick={() => authLoginWithGoogle()}
                loading={loadingGoogle}
              >
                log in with google
              </Button>
            </Form.Item>
            <p
              className='account-register-row'
              style={{
                textAlign: 'center',
                letterSpacing: '1px',
                fontSize: '16px'
              }}
            >
              {t.sinUpTitle}{' '}
              <Link
                to='/register'
                style={{
                  color: '#612166',
                  cursor: 'pointer',
                  fontWeight: 600,
                  margin: '0 4px'
                }}
              >
                {t.sinUp}
              </Link>
            </p>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LogIn;
