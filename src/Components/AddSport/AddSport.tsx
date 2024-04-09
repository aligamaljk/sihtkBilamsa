import { Button, Form, Input, message, Modal } from 'antd';
import { useState } from 'react';
import { AddSportType, ITranslation } from '../../types';

const AddSport : React.FC< ITranslation & { setSports: (sports: AddSportType[]) => void, sports: AddSportType[] | undefined } >   = ({
  t ,
  setSports,
  sports
}) => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };
  const onFinish = (values: any) => {
    console.log(values, 'values');
    setSports([
      ...((sports || []) as any[]),
      {
        value: (Array.isArray(sports) ? sports.length : 0) + 1,
        label: values.sport
      }
    ]);
    // setStoredAddSport([...sports,{value:countSports.length + 1,label:values.sport}])
    // setStoredAddSport([...sports,{value:countSports.length + 1,label:values.sport}])

    setIsModalOpen(false);
    message.success(t.addSuccess);
    form.resetFields();
  };
  return (
    <>
      <Button type='primary' onClick={showModal}>
        {t.AddSport}
      </Button>
      <Modal
        title={t.AddSport}
        open={isModalOpen ? true : false}
        footer={false}
        onCancel={handleCancel}
      >
        <Form
          layout='vertical'
          name='add-sport'
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            name='sport'
            label='Sports'
            rules={[{ required: true, message: t.requiredAddSport  }]}
          >
            <Input type='text' placeholder={t.requiredAddSport} />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              {t.AddSport}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddSport;
