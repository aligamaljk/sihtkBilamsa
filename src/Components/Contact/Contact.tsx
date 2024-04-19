import React from 'react';
import { ITranslation } from '../../types';
import { Button, Card, Form, Input } from 'antd';
import './Contact.scss';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import contactImg from '../../assets/contact-us-img1.svg';

const Contact: React.FC<ITranslation> = ({ t }) => {
  return (
    <>
      <div className='contact'>
        <div className='section-header' >
          <h1 className='title'>{t.contactUs}</h1>
          <div className='link'>
            <Link to='/'>{t.homeTab}</Link> <IoIosArrowForward />
            {t.contactUs}
          </div>
        </div>
        <div className='container'>
          <div className='content-left' data-aos='fade-right'>
            <h3 className='title-contact'>{t.contactTitle}</h3>
            <p className='desc-contact'>{t.contactDesc}</p>
            <div className='img-wrapper'>
              <img src={contactImg} alt='contact us' />
            </div>
          </div>
          <div className='content-right' data-aos='fade-left'>
            <Card className='card-contact'>
              <h3 className='title-card'>{t.contactUs}</h3>
              <Form
                name='contact'
                className='form-contact'
                layout='vertical'
                onFinish={(values) => console.log(values)}
              >
                <Form.Item
                  name='name'
                  rules={[
                    { required: true, message: t.requiredName }
                  ]}
                >
                  <Input placeholder='Name' />
                </Form.Item>

                <Form.Item
                  name='email'
                  rules={[
                    { required: true, message: t.requiredEmail }
                  ]}
                >
                  <Input placeholder='Email' />
                </Form.Item>

                {/* <Form.Item
                  name='phone'
                  rules={[
                    { required: true, message: t.requiredPhone }
                  ]}
                >
                  <Input placeholder='Phone' />
                </Form.Item> */}

                <Form.Item
                  name='message'
                  rules={[
                    { required: true, message: t.requiredMessage }
                  ]}
                >
                  <Input.TextArea
                    placeholder='Message'
                    autoSize={{ minRows: 4, maxRows: 6 }}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type='primary'
                    htmlType='submit'
                    className='btn-submit'
                  >
                    {t.contactSubmit}
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
