import React from 'react'
import { Form, Button,  Input, Card } from 'antd';
import { Link } from 'react-router-dom';
import '../LogIn/Login.scss';
import { ITranslation } from '../../../types';
import { IoIosArrowForward } from 'react-icons/io';

const SignUp : React.FC <ITranslation> = ({t}) => {
    const onAuthLogUp = (values: unknown) => {
      console.log('Success:', values);
    }
  return (
    <>
      <div className="logUp">
        <div className="login-form-container">
          <div className="section-header">
            <h1 className="title">{t.sinUp}</h1>
            <div className="link">
              <Link to="/">{t.home}</Link> <IoIosArrowForward />
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
                name="username"
                label={t.username}
                rules={[{ required: true, message: t.requiredName }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                label={t.password}
                rules={[{ required: true, message: t.requiredPassword }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  className="login-form-button"
                  htmlType="submit"
                  loading={false}
                >
                  {t.LogIn}
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