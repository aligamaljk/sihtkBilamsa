import React from 'react';
import { Form, Button, Input, Card, message } from 'antd';
import { Link } from 'react-router-dom';
import '../LogIn/Login.scss';
import { ITranslation, UserInput } from '../../../types';
import { IoIosArrowForward } from 'react-icons/io';
import { doForgetPassword } from '../../../Firebase/auth';
const ForgotPassword: React.FC<ITranslation> = ({ t }) => {

    const onAuthForgotPassword = (values: UserInput) => {
       const email = values?.email || '';
      doForgetPassword(email)
        .then(() => {
          message.success(t.checkEmail);
        })
        .catch((error) => {
          console.log(error);
        });
    };

  return (
    <>
      <div className='forgot-password'>
        <div className='login-form-container'>
          <div className='section-header'>
            <h1 className='title'>{t.for}</h1>
            <div className='link'>
              <Link to='/'>{t.homeTab}</Link> <IoIosArrowForward />
              {t.for}
            </div>
          </div>
          <Card className='login-form' loading={false}>
            <h3 className='title-form'>{t.phone}</h3>
            <p
              style={{
                color: '#7f8897',
                fontSize: '2rem',
                lineHeight: 1.5,
                marginBottom: '4rem'
              }}
            >
              {t.desForgot}
              <Link
                to='/contact'
                style={{
                  marginLeft: '10px',
                  color: '#612166',
                  fontWeight: 600
                }}
              >
                {t.contactUs}
              </Link>
            </p>
            <Form
              layout='vertical'
              name='login'
              onFinish={onAuthForgotPassword}
              className='login-form-body'
            >
              <Form.Item
                name='email'
                label={t.email}
                rules={[{ required: true, message: t.requiredEmail }]}
              >
                <Input placeholder={t.email} type='email' />
                </Form.Item>
              <Form.Item
                name='phone'
                label={t.titphone}
                rules={[{ required: true, message: t.requiredPhone }]}
              >
                <Input type='number' placeholder={t.titphone} />
              </Form.Item>
              <Form.Item>
                <Button
                  type='primary'
                  className='login-form-button'
                  htmlType='submit'
                  loading={false}
                >
                  {t.ButForget}
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
};

export default ForgotPassword;
