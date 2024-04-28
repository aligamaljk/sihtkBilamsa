import {
  Button,
  Card,
  Form,
  Input,
  Select,
  SelectProps,
  Typography
} from 'antd';
import React, { useState } from 'react';
import { Calories, ITranslation } from '../../types';
const CalorieFood: React.FC<ITranslation> = ({ t }) => {
  const [category, setCategory] = useState<any | undefined>(
    undefined
  );
  const [form] = Form.useForm();
  const optionsProtein: SelectProps['options'] = [
    {
      value: 1,
      label: 'chicken'
    },
    {
      value: 2,
      label: 'Salmon'
    },
    {
      value: 3,
      label: 'Eggs'
    },
    {
      value: 4,
      label: 'Meat'
    },
    {
      value: 5,
      label: 'Oatmeal'
    },
    {
      value: 6,
      label: ' Rice'
    },
    {
      value: 7,
      label: 'Peanuts'
    },
    {
      value: 8,
      label: 'Cashew'
    }
  ];
  const onFinishProtein = (values: any) => {
    console.log('Success:', values);
    setCategory(values);
  };

  console.log( category);

  const calories = (category : number ) : Calories => {
    console.log(category, 'category switch');
    let pro : number= 0;
    let carbs : number = 0;
    let fat : number = 0;
    let nameSelect : string = '';
    switch (category) {
      case 1:
        pro = 0.27;
        carbs = 0;
        fat = 0.05;
        nameSelect = 'chicken';
        break;
      case 2:
        pro = 0.22;
        carbs = 0;
        fat = 0.09;
        nameSelect = 'Salmon';
        break;
      case 3:
        pro = 0.13;
        carbs = 0.0078;
        fat = 0.1;
        nameSelect = 'Eggs';
        break;
      case 4:
        pro = 0.24;
        carbs = 0;
        fat = 0.15;
        nameSelect = 'Meat';
        break;
      case 5:
        pro = 0.17;
        carbs = 0.6627;
        fat = 0.07;
        nameSelect = 'Oatmeal';
        break;
      case 6:
        pro = 0.0202;
        carbs = 0.211;
        fat = 0.0019;
        nameSelect = ' Rice';
        break;
      case 7:
        pro = 0.258;
        carbs = 0.211;
        fat = 0.0429;
        nameSelect = 'Peanuts';
        break;
      case 8:
        pro = 0.1822;
        carbs = 0.309;
        fat = 0.4385;
        nameSelect = 'Cashew';
        break;
      default:
        break;
    }
    return { pro, carbs, fat, nameSelect };
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
            form={form}
          >
            <Form.Item
              name='food'
              label={t.selectFood}
              rules={[{ required: true, message: t.requiredProtein }]}
            >
              <Select
                placeholder='ex:Chicken'
                showSearch
                allowClear
                style={{ width: '100%' }}
              >
                {optionsProtein.map((item) => (
                  <Select.Option key={item.value} value={item.value}>
                    {item.label}
                  </Select.Option>
                ))}
              </Select>
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
                    {calories(category?.food)?.nameSelect} (
                    {category?.quantity}g){' '}
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
                      marginTop: '20px',
                      flexWrap: 'wrap'
                    }}
                  >
                    <div>
                      {t.protein}:{' '}
                      <span style={{ fontWeight: '700' }}>
                        {(
                          calories(category?.food)?.pro *
                          Number(category?.quantity)
                        ).toFixed(2)}
                        g
                      </span>
                    </div>
                    <div>
                      {t.carbs}:{' '}
                      <span style={{ fontWeight: '700' }}>
                        {(
                          calories(category?.food)?.carbs *
                          Number(category?.quantity)
                        ).toFixed(2)}
                        g
                      </span>
                    </div>
                    <div>
                      {t.fat}:
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
              <Button
                type='primary'
                htmlType='submit'
                shape='round'
                size='large'
                block
              >
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
