import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Select,
  SelectProps,
  Typography
} from 'antd';
import React, { useState } from 'react';
import { ITranslation } from '../../types';
const CalorieFood: React.FC<ITranslation> = ({ t }) => {
  const [protein, setProtein] = useState<string | undefined>(
    undefined
  );
  const [category, setCategory] = useState<any | undefined>(
    undefined
  );
  const [form] = Form.useForm();
  const optionsProtein: SelectProps['options'] = [
    {
      value: 'chicken',
      label: 'chicken'
    },
    {
      value: 'Salmon',
      label: 'Salmon'
    },
    {
      value: 'Eggs',
      label: 'Eggs'
    },
    {
      value: 'Meat',
      label: 'Meat'
    },
    {
      value: 'Oatmeal',
      label: 'Oatmeal'
    },
    {
      value: ' Rice',
      label: ' Rice'
    },
    {
      value: 'Peanuts',
      label: 'Peanuts'
    },
    {
      value: 'Cashew',
      label: 'Cashew'
    }
  ];
  const onFinishProtein = (values: any) => {
    console.log('Success:', values);
    setCategory(values);
  };

  console.log(protein, category);
  const calories = (category: string) => {
    let pro: number = 0;
    let carbs: number = 0;
    let fat: number = 0;
    switch (category) {
      case 'chicken':
        pro = 0.27;
        carbs = 0;
        fat = 0.05;
        break;
      case 'Salmon':
        pro = 0.22;
        carbs = 0;
        fat = 0.09;
        break;
      case 'Eggs':
        pro = 0.13;
        carbs = 0.0078;
        fat = 0.1;
        break;
      case 'Meat':
        pro = 0.24;
        carbs = 0;
        fat = 0.15;
        break;
      case 'Oatmeal':
        pro = 0.17;
        carbs = 0.6627;
        fat = 0.07;
        break;
      case ' Rice':
        pro = 0.0202;
        carbs = 0.211;
        fat = 0.0019;
        break;
      case ' Peanuts ':
        pro = 0.258;
        carbs = 0.211;
        fat = 0.0429;
        break;
      case ' Cashew ':
        pro = 0.1822;
        carbs = 0.309;
        fat = 0.4385;
        break;
      default:
        return 0;
    }
    return { pro, carbs, fat };
  };

  return (
    <>
      <Card className='card-food'>
        <h3 className='title-card'>{t.foodCalories}</h3>
        <div className='container-food'>
          <Form
            onFinish={onFinishProtein}
            style={{ width: '100%' }}
            className='col-form'
            layout='vertical'
          >
            <Form.Item
              name='food'
              label={t.selectFood}
              rules={[{ required: true, message: t.requiredProtein }]}
            >
              <Select
                // placeholder={t.selectFood}
                placeholder='ex:Chicken'
                showSearch
                allowClear
                style={{ width: '100%' }}
                options={optionsProtein}
              />
            </Form.Item>
            <Form.Item
              name='quantity'
              label={t.quantityMess}
              rules={[{ required: true, message: t.quantityMess }]}
              style={{ width: '100%' }}
            >
              <Input type='number' placeholder='ex:100g' />
            </Form.Item>
            <Form.Item>
              {category?.food && category?.quantity ?
                <>
                  <Typography.Text
                    strong
                    style={{
                      fontWeight: '700',
                      fontSize: '18px',
                      lineHeight: '32px',
                      letterSpacing: '1.5px',
                      textAlign: 'center',
                      width: '100%',
                      display: 'block'
                    }}
                  >
                    {category?.food} ({category?.quantity}g){' '}
                  </Typography.Text>
                  <div
                    className='total-calories'
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px 0',
                      gap: '10px',
                      marginTop: '20px'
                    }}
                  >
                    <div>
                      {t.protein}:{' '}
                      <span style={{ fontWeight: '700' }}>
                        {(
                          calories(category?.food).pro *
                          Number(category?.quantity)
                        ).toFixed(2)}
                        g
                      </span>
                    </div>
                    <div>
                      {t.carbs}:{' '}
                      <span style={{ fontWeight: '700' }}>
                        {(
                          calories(category?.food).carbs *
                          Number(category?.quantity)
                        ).toFixed(2)}
                        g
                      </span>
                    </div>
                    <div>
                      {t.fat}:{' '}
                      <span style={{ fontWeight: '700' }}>
                        {(
                          calories(category?.food).fat *
                          Number(category?.quantity)
                        ).toFixed(2)}
                        g
                      </span>
                    </div>
                    <div className='total'>
                      {t.calories}:{' '}
                      <span style={{ fontWeight: '700' }}>
                        {(
                          calories(category?.food).pro *
                            Number(category?.quantity) *
                            4 +
                          calories(category?.food).carbs *
                            Number(category?.quantity) *
                            4 +
                          calories(category?.food).fat *
                            Number(category?.quantity) *
                            9
                        ).toFixed(2)}
                        kcal
                      </span>
                    </div>
                  </div>
                </>
              : <>
                  <Typography.Text
                    strong
                    style={{
                      fontWeight: '700',
                      fontSize: '18px',
                      lineHeight: '32px',
                      letterSpacing: '1.5px',
                      textAlign: 'center',
                      width: '100%',
                      display: 'block'
                    }}
                  >
                    {t.selectFood}{' '}
                  </Typography.Text>
                </>
              }
            </Form.Item>
            <Form.Item style={{ width: '100%', textAlign: 'center' }}>
              <Button type='primary' htmlType='submit'>
                {t.calculate}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </>
  );
};

export default CalorieFood;
