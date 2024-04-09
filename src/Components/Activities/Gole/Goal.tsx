import {
  Button,
  Card,
  Col,
  Form,
  Input,
  message,
  Popconfirm,
  Upload,
  UploadFile,
  UploadProps
} from 'antd';
import { clearStoredUserProfileGoal, getStoredAddSport, getStoredUserProfileGoal, setStoredUserProfileGoal } from '../../../services/user-storage';
import { useEffect, useState } from 'react';
import { AddSportType, fileType, ITranslation } from '../../../types';
const Goal: React.FC<ITranslation> = ({ t }) => {
  const [form] = Form.useForm();
  const [sports] = useState<AddSportType[] | undefined>(
    getStoredAddSport()
  );
  const check = (sports || [])?.map((item: any) => item);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [fileList2, setFileList2] = useState<UploadFile[]>([]);
  const valeGoal = getStoredUserProfileGoal();
  // const prof = getStoredUserProfile();
  useEffect(() => {
    if (valeGoal) {
      {
        setFileList(
          valeGoal.imageAfter.fileList.map((item: fileType) => {
            return item;
          })
        );
        setFileList2(
          valeGoal?.imageBefore.fileList.map((item: fileType) => {
            return item;
          })
        );
      }
    }
  }, []);
  const onFinish = (values: any) => {
    console.log('Success:', values);
    setStoredUserProfileGoal(values);
  };
  const handleChange: UploadProps['onChange'] = ({
    fileList: newFileList
  }) => setFileList(newFileList);
  const handleChange2: UploadProps['onChange'] = ({
    fileList: newFileList
  }) => setFileList2(newFileList);

  return (
    <div className='content'>
      <h1
        className='title'
      >
        {t.placeGoal}
      </h1>
      <Card className='card-activities' bordered={false}>
        <Form
          layout='vertical'
          name='activities'
          className='form-activities'
          onFinish={onFinish}
          form={form}
          initialValues={valeGoal}
        >
          <Form.Item
            name='goal'
            label={t.goal}
            rules={[{ required: true, message: t.requiredGoal }]}
          >
            <Input type='text' placeholder={t.goal} />
          </Form.Item>
          <Form.Item name='weight' label={t.weight}>
            <Input type='number' placeholder={t.weight} />
          </Form.Item>
          <Form.Item name='weightTarget' label={t.weightTarget}>
            <Input type='number' placeholder={t.weightTarget} />
          </Form.Item>
          <Col
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              gap: '20px'
            }}
          >
            <Form.Item
              name='imageAfter'
              label={t.imageAfter}
              rules={[{ required: false, message: t.requiredImage }]}
            >
              <Upload
                action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
                listType='picture-card'
                fileList={fileList}
                onChange={handleChange}
                maxCount={1}
              >
                {t.uploadImage}
              </Upload>
            </Form.Item>
            <Form.Item
              name='imageBefore'
              label={t.imageBefore}
              rules={[{ required: true, message: t.requiredImage }]}
            >
              <Upload
                action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
                listType='picture-card'
                fileList={fileList2}
                onChange={handleChange2}
                maxCount={1}
              >
                {t.uploadImage}
              </Upload>
            </Form.Item>
          </Col>
          <Form.Item
            style={{
              width: '100%',
              textAlign: 'center'
            }}
          >
            <Button
              type='primary'
              htmlType='submit'
              style={{ marginLeft: '20px' }}
            >
              {valeGoal ? t.update : t.save}
            </Button>
            <Popconfirm
              title={t.deleteConfirm}
              description={t.deleteConfirmText}
              placement='topLeft'
              okType='danger'
              okText={t.okText}
              cancelText={t.cancelText}
              onConfirm={() => {
                form.resetFields();
                clearStoredUserProfileGoal();
                message.success(t.deleteSuccess);
              }}
              onCancel={() => {
                message.info(t.cancelText);
              }}
            >
              <Button
                type='primary'
                danger
                style={{ marginLeft: '20px' }}
              >
                {t.delete}
              </Button>
            </Popconfirm>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Goal;
