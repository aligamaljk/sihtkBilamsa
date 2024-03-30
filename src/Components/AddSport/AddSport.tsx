import { Button, Form, Input, message, Modal } from 'antd';
import React, { useState } from 'react'
import { getStoredAddSport, setStoredAddSport } from '../../services/user-storage';

const AddSport = ({setSports,sports,t} : any) => {
    const [ form ] = Form.useForm()
    const countSports = getStoredAddSport();
      const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
    const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields()
  };
  const onFinish = (values : any)=>{
        console.log(values,"values");
        setSports([...sports || [],{value:(countSports?.length || 0) + 1,label:values.sport}])
        // setStoredAddSport([...sports,{value:countSports.length + 1,label:values.sport}])
        // setStoredAddSport([...sports,{value:countSports.length + 1,label:values.sport}])
       
        setIsModalOpen(false);
        message.success(t.addSuccess)
        form.resetFields()
  }
  return (
    <>
      <Button type="primary" onClick={showModal}>
        {t.AddSport}
      </Button>
        <Modal title={t.AddSport}
        open={isModalOpen ? true : false}
        footer={false} onCancel={handleCancel}>
          <Form layout="vertical" name='add-sport' form={form}
            onFinish={onFinish}
          >
            <Form.Item
                name="sport"
                label="Sports"
                rules={[{ required: true, message: t.requiredAddSport }]}
            >
                <Input type='text' placeholder={t.requiredAddSport} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" >
                    {t.AddSport}
                </Button>
            </Form.Item>
          </Form>
        </Modal>
    </>
  )
}

export default AddSport