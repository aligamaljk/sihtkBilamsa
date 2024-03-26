import { Card, Form, Select, SelectProps } from 'antd'
import React from 'react'
import { ITranslation } from '../../types';

const CalorieFood : React.FC <ITranslation> = ({t}) => {
    const options : SelectProps['options']  = [
  {
    value: 'male',
    label: t.male,
  },
  {
    value: 'female',
    label: t.female,
  },
];
  return (
    <>
      <Card className="card-food">
              <h3 className="title-card">{t.foodCalories}</h3>
              <Form className="container-form">
                <Select placeholder={t.selectFood}
                showSearch
                allowClear
                 options={options}
                />
              </Form>
            </Card>
    </>
  )
}

export default CalorieFood