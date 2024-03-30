import React, { useEffect, useState } from 'react'
import { AddSportType, ITranslation } from '../../types'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io';
import "./Activities.scss"
import { Button, Card, Checkbox, Form, Input, message, Popconfirm } from 'antd';
import { IoClose } from "react-icons/io5";
import { clearStoredUserProfileGoal, getStoredAddSport, getStoredUserProfile, getStoredUserProfileGoal, setStoredUserProfileGoal } from '../../services/user-storage';
const Activities : React.FC <ITranslation> = ({t}) => {
  const [form] = Form.useForm();
  const [sports, setSports] = useState<AddSportType[] | undefined >(getStoredAddSport())
  const check = (sports || [])?.map((item : any)=> item )

  const valeGoel = getStoredUserProfileGoal()
  const prof = getStoredUserProfile()
  const onFinish = (values: any) => {
    console.log("Success:", values);
    setStoredUserProfileGoal(values)
  }
  return (
    <>
       <div className="activities">
        <div className="section-header">
          <h1 className="title">{t.activities}</h1>
          <div className="link">
            <Link to="/">{t.homeTab}</Link> <IoIosArrowForward />
            {t.activities}
          </div>
        </div>
            <div className="content">
              <Card className="card-activities"
               bordered={false}
              >
              <Form
                layout="vertical"
                name="activities"
                className="form-activities"
                onFinish={onFinish}
                form={form}
                initialValues={valeGoel}
              >
                <Form.Item 
                name="goal" 
                label={t.goal} 
                rules={[{ required: true, message: t.requiredGoal }]}
                >
                  <Input type="text" placeholder={t.goal} />
                </Form.Item>
                <Form.Item name="weight"
                label={t.weight}
                >
                  <Input type="number" placeholder={t.weight} />
                </Form.Item>
                <Form.Item name="weightTarget"
                label={t.weightTarget}
                >
                  <Input type="number" placeholder={t.weightTarget} />
                </Form.Item>
                <Form.Item
                  style={{
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  <Button type="primary" htmlType="submit" style={{marginLeft:"20px"}}>{t.save}</Button>
                  <Button type="primary" danger style={{marginLeft:"20px"}}
                    onClick={() => {
                      form.resetFields();
                      clearStoredUserProfileGoal();
                    }}
                  >delete</Button>
                  
                </Form.Item>
              </Form>
              </Card>
              <div className="activities">
                <Card bordered={false} className="card-sport" >
                  <h3 className="title">sports Activities</h3>
                  
                    <div className="sport">
                      <Checkbox.Group>
                    {check?.map((item : any) => (
                      <div className="checkbox">
                      <Checkbox
                        key={item.value}
                        value={item.value}
                        className="checkbox-sport"
                      >
                        {item.label}
                      </Checkbox>
                        <Popconfirm
                          title={t.LogOut}
                          description={t.LogOutMessageModal}
                          icon={<></>}
                          placement='topLeft'
                          okType='danger'
                          okText={t.okText}
                          cancelText={t.cancelText}
                          onConfirm={() => {
                            message.success(t.LogOutMessage);
                          }}
                          onCancel={() => {
                            message.info(t.popupCanceledMessage);
                          }}
                        >
                          <IoClose className="close" />
                        </Popconfirm>
                      </div>
                    ))}
                  </Checkbox.Group>
                    </div>
                </Card>
              </div>
            </div>
       </div>
    </>
  )
}

export default Activities