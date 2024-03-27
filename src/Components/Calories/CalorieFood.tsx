import { Button, Card, Col, Form, Input, Select, SelectProps, Typography } from 'antd'
import React from 'react'
import { ITranslation } from '../../types';
const CalorieFood : React.FC <ITranslation> = ({t}) => {
    const optionsProtein : SelectProps['options']  = [
  {
    value: 'chicks',
    label: "Chicks",
  },
  {
    value: 'fish',
    label: "Fish",
  },
];
const optionsCarbs : SelectProps['options'] = [
  {
    value:"Raz",
    label:"Raz"
  },
  {
    value:"potato",
    label:"Potato"
  },
]
const optionsFats : SelectProps['options'] = [
  {
    value :'Peanut',
    label:"Peanut"
  },
  {
    value :'Eggs',
    label:"Eggs"
  },
]
  return (
    <>
      <Card className="card-food">
              <h3 className="title-card">{t.foodCalories}</h3>
              <div className="container-food">
              <Col 
                  className='col-form'
                >
                <Typography.Title level={4} className="title-form">{t.protein}:</Typography.Title>
                {/* <h3  className="title-form">{t.protein}</h3> */}
                <Select placeholder={t.selectFood}
                showSearch
                allowClear
                options={optionsProtein}
                />
                <Input type='number' placeholder={t.quantityMess} />
                <Input type='number'  />
                <Button type="primary">{t.calculate}</Button> 
                </Col>
                <Col 
                  className='col-form'
                >
                <Typography.Title level={4} className="title-form">{t.carbs}:</Typography.Title>
                <Select placeholder={t.selectFood}
                showSearch
                allowClear
                options={optionsCarbs}
                />
                <Input type='number' placeholder={t.quantityMess} />
                <Input type='number' />
                <Button type="primary">{t.calculate}</Button> 
                </Col>
                <Col 
                  className='col-form'
                >
                <Typography.Title level={4} className="title-form">{t.fat}:</Typography.Title>
                <Select placeholder={t.selectFood}
                showSearch
                allowClear
                options={optionsFats}
                />
                <Input type='number' placeholder={t.quantityMess} />
                <Input type='number'  />
                <Button type="primary">{t.calculate}</Button> 
                </Col>
              </div>
            </Card>
    </>
  )
}

export default CalorieFood