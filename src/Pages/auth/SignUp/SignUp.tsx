import React, { useState } from 'react'
import { Form, Button,  Input, Card, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import '../LogIn/Login.scss';
import { ITranslation, UserInput } from '../../../types';
import { IoIosArrowForward } from 'react-icons/io';
import { setCurrentUser } from '../../../services/store/reducers/user';
import { setStoredToken, setStoredUser } from '../../../services/user-storage';
import { useDispatch } from 'react-redux';
import { doCreateUserWithEmailAndPassword} from '../../../Firebase/auth';
const SignUp : React.FC <ITranslation> = ({t}) => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
    const onAuthLogUp = (values: UserInput) => {
      setLoading(true);
      doCreateUserWithEmailAndPassword(values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(userCredential);
          setStoredToken(user?.accessToken);
          setStoredUser(values.name);
          dispatch(setCurrentUser(values));
          message.success(t.successLog + ' ' + values.name);
          navigate('/profile');
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          message.error(error.message);
          setLoading(false);
        });
    };
  return (
    <>
      <div className='logUp'>
        <div className='login-form-container'>
          <div className='section-header'>
            <h1 className='title'>{t.sinUp}</h1>
            <div className='link'>
              <Link to='/'>{t.homeTab}</Link> <IoIosArrowForward />
              {t.sinUp}
            </div>
          </div>
          <Card className='login-form' loading={false}>
            <h3 className='title-form'>
              {t.senUpMes} <span>{t.logo}</span>{' '}
            </h3>
            <Form
              layout='vertical'
              name='login'
              onFinish={onAuthLogUp}
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
                  max={15}
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
                  placeholder={t.password}
                  min={3}
                  max={15}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type='primary'
                  className='login-form-button'
                  htmlType='submit'
                  loading={loading}
                >
                  {t.sinUp}
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
                {t.sin}
                <Link
                  to='/login'
                  style={{
                    color: '#612166',
                    cursor: 'pointer',
                    fontWeight: 600,
                    margin: '0 4px'
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