import { Button, Card, Col, Form, Input, Select, SelectProps, Typography } from 'antd'
import React, { useState } from 'react'
import { ITranslation } from '../../types';
const CalorieFood : React.FC <ITranslation> = ({t}) => {
  const [protein,setProtein] = useState<string | undefined>(undefined)
  const [category,setCategory] = useState<string | undefined>(undefined)
    const optionsProtein : SelectProps['options']  = [
  {
    value: 0.27,
    label: "chicken",
  },
  {
    value: 0.22,
    label: "Salmon",
  },
  {
    value: 0.13,
    label: "Eggs",
  },
  {
    value: 0.26,
    label: "Meat",
  },
  {
    value: 0.16,
    label: "Oatmeal",
  },
];
const optionsCategory : SelectProps['options'] = [
  {
    value :'Protein',
    label:"Protein"
  },
  {
    value :'Carbs',
    label:"Carbs"
  },
  {
    value :'Fats',
    label:"Fats"
  },
]
const onFinishProtein = (values: any) => {
  console.log("Success:", values);
  const result = values.protein * Number(values.quantity)  
  setProtein(result.toString())
}

console.log(protein);

  return (
    <>
      <Card className="card-food">
              <h3 className="title-card">{t.foodCalories}</h3>
              <div className="container-food">
                <Form onFinish={onFinishProtein} style={{width:'100%'}} className="col-form" layout="vertical" >
                  <Form.Item
                    name="protein"
                    label={t.selectFood}
                    rules={[{ required: true, message: t.requiredProtein }]}
                  >
                    <Select
                      // placeholder={t.selectFood}
                      placeholder="ex:Chicken"
                      showSearch
                      allowClear
                      style={{width:'100%'}}
                      options={optionsProtein}
                    />
                  </Form.Item>
                  <Form.Item
                    name="quantity"
                    label={t.quantityMess}
                    rules={[{ required: true, message: t.quantityMess }]}
                    style={{width:'100%'}}
                  >
                    <Input type='number' placeholder="ex:100g" />
                  </Form.Item>
                  <Form.Item>
                    {/* <Input type='number'  disabled  value={protein} /> */}
                    <Typography.Text strong style={{fontWeight:'700',
                   fontSize:'18px',
                   lineHeight:'32px',
                   letterSpacing:'1.5px',
                   textAlign:'center',
                   width:'100%',
                   display:'block',
                   }} >Chicken (100g) </Typography.Text>
                    <div className="total-calories"
                      style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 0',gap:'10px',
                      marginTop:'20px',
                    }}
                    >
                      <div>
                        {t.protein}:  <span style={{fontWeight:'700'}}>27g</span>
                      </div>
                      <div>
                        {t.carbs}: <span style={{fontWeight:'700'}}>2g</span>
                      </div>
                      <div>
                        {t.fat}: <span style={{fontWeight:'700'}}>13g</span>
                      </div>
                    </div>
                  </Form.Item>
                  <Form.Item
                    style={{width:'100%',textAlign:'center'}}
                  >
                    <Button type="primary" htmlType="submit"  >{t.calculate}</Button>
                  </Form.Item>
                </Form>
              </div>
            </Card>
    </>
  )
}

export default CalorieFood