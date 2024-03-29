import { Button, Card, Form, Image, Input } from 'antd';
import React, { useState } from 'react';
import { getStoredUserProfile } from '../../services/user-storage';
import { ITranslation } from '../../types';
import img from '../../assets/hand-drawn-bmi-infographic_23-2150074508.jpg';
import './Bmi.scss';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
const Bmi: React.FC<ITranslation> = ({ t }) => {
  const getLocalProfile = getStoredUserProfile();
  const [form] = Form.useForm();
  const [bmi, setBmi] = useState<number>(0);
  const onFinish = (values: any) => {
    const { weight, height } = values;
    const bmi = weight / ((height / 100) * (height / 100));
    setBmi(bmi);
  };
  const Bodyshape = () => {
    let valueShape;
    let des;
    switch (true) {
      case bmi < 18:
        valueShape = t.skinny;
        des = t.des1;
        break;
      case bmi >= 18 && bmi < 25:
        valueShape = t.normal;
        des = t.des2;
        break;
      case bmi >= 25 && bmi < 30:
        valueShape = t.overweight;
        des = t.des3;
        break;
      case bmi >= 30 && bmi < 35:
        valueShape = t.firstDegree;
        des = t.des4;
        break;
      case bmi >= 35 && bmi < 40:
        valueShape = t.secondDegree;
        des = t.des5;
        break;
      case bmi >= 40:
        valueShape = t.dangerousObesity;
        des = t.des6;
        break;
      default:
        valueShape = t.dangerousObesity;
        break;
    }
    return { valueShape, des };
  };
  return (
    <div className='bmi'>
      <div className='section-header'>
        <h1 className='title'>{t.calories}</h1>
        <div className='link'>
          <Link to='/'>{t.homeTab}</Link> <IoIosArrowForward />
          Bmi
        </div>
      </div>
      <div className='container-bmr'>
        <div className='image-bmi'>
          <Image src={img} preview={false} alt='image bmi' />
        </div>
        <Card className='card-bmi'>
          <Form
            layout='vertical'
            name='bmi'
            className='form-bmi'
            form={form}
            onFinish={onFinish}
            initialValues={{
              height: getLocalProfile?.height,
              weight: getLocalProfile?.weight
            }}
          >
            <Form.Item
              name='weight'
              label={t.weight}
              rules={[{ required: true, message: t.requiredWeight }]}
            >
              <Input type='number' placeholder='K/G' />
            </Form.Item>
            <Form.Item
              name='height'
              label={t.height}
              rules={[{ required: true, message: t.requiredHeight }]}
            >
              <Input type='number' placeholder='C/M' />
            </Form.Item>
            <Form.Item
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Button
                type='primary'
                htmlType='submit'
                className='bmr-form-button'
              >
                {t.calculate}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
      <div className='shape'>
        {bmi > 0 && (
          <div className='body-shape'>
            <h1>
              {t.bodyShape}: <span>{Bodyshape().valueShape}</span>{' '}
            </h1>
            <p>{Bodyshape().des}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bmi;
