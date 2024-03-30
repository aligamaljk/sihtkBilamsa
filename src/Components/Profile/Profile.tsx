import React, { useEffect, useState } from 'react';
import { ITranslation } from '../../types';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import './Profile.scss';
import {
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  message,
  Select,
  Upload
} from 'antd';
import { TbUpload } from 'react-icons/tb';
import {
  getStoredAddSport,
  getStoredUserProfile,
  setStoredAddSport,
  setStoredUserProfile
} from '../../services/user-storage';
import AddSport from '../AddSport/AddSport';

const Profile: React.FC<ITranslation> = ({ t }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const getLocalProfile = getStoredUserProfile();
  const [fileList, setFileList] = useState([]);
  const [sports, setSports] = useState(getStoredAddSport());
  // const [sports, setSports] = useState<any[]>([])

  console.log(fileList, 'fileList');
  // const imageList = Form.useWatch('ProductImages', form);
  useEffect(() => {
    if (getLocalProfile) {
      setFileList(
        getLocalProfile?.ProductImages?.fileList?.map((item: any) => {
          return {
            uid: item?.id,
            name: item?.name,
            status: 'done',
            thumbUrl: item?.imageURL || item?.thumbUrl,
            originFileObj: item?.originFileObj,
            id: item?.id,
            key: item?.key
          };
        })
      );
    }
    // setStoredAddSport()
  }, []);
  useEffect(() => {
    setStoredAddSport(sports);
  }, [sports]);

  const beforeUpload = (file: any) => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('حجم الصورة يجب ان يكون اقل من 2 ميجا بايت');
      return false;
    }
    return isLt2M;
  };
  const handleUpload = async ({ file, onSuccess }: any) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };
  const handleChange = ({ fileList: newFileList }: any) =>
    setFileList(newFileList);
  const check2 = [
    {
      label: t.swimming,
      value: 1
    },
    {
      label: t.running,
      value: 2
    },
    {
      label: t.football,
      value: 3
    },
    {
      label: t.basketball,
      value: 4
    },
    {
      label: t.gym,
      value: 5
    },
    {
      label: t.tennis,
      value: 6
    }
  ];

  const check = (sports || [])?.map((item: any) => item);
  const onFinish = (values: any) => {
    console.log(values, 'values-profile');
    setStoredUserProfile({
      ProductImages: values.ProductImages,
      name: values.name,
      age: values.age,
      categoryProduct: values.categoryProduct,
      gender: values.gender,
      height: values.height,
      weight: values.weight,
      description: values.description
    });
    message.success(t.profileRegistered);
    navigate('/');
  };
  return (
    <>
      <div className='profile'>
        <div className='section-header'>
          <h1 className='title'>{t.profile}</h1>
          <div className='link'>
            <Link to='/'>{t.homeTab}</Link> <IoIosArrowForward />
            {t.profile}
          </div>
        </div>
        <div className='container'>
          <Card className='card-profile'>
            <h3 className='title-card'>{t.profileTitle}</h3>
            <Form
              name='profile'
              layout='vertical'
              className='form-profile'
              onFinish={onFinish}
              form={form}
              initialValues={{
                ProductImages: getLocalProfile?.ProductImages || null,
                age: getLocalProfile?.age || null,
                categoryProduct:
                  getLocalProfile?.categoryProduct || null,
                description: getLocalProfile?.description || null,
                gender: getLocalProfile?.gender || null,
                height: getLocalProfile?.height || null,
                name: getLocalProfile?.name || null,
                weight: getLocalProfile?.weight || null
              }}
            >
              <Col className='upload'>
                <Form.Item
                  name='ProductImages'
                  label=''
                  rules={[
                    {
                      required: true,
                      message: 'يجب اضافة صور'
                    }
                  ]}
                >
                  <Upload
                    // listType="picture"
                    listType='picture-card'
                    fileList={fileList}
                    // onPreview={() => setIsImageClicked(true)}
                    onChange={handleChange}
                    multiple
                    accept='image/*'
                    beforeUpload={beforeUpload}
                    customRequest={handleUpload}
                    maxCount={1}
                    // onDownload={false}
                    // onRemove={false}
                    // onDrop={false}
                  >
                    <Button icon={<TbUpload />} type='text'>
                      {t.uploadImage}
                    </Button>
                  </Upload>
                </Form.Item>
              </Col>
              <Col className='form-item'>
                <Form.Item
                  name='name'
                  label={t.name}
                  rules={[
                    { required: true, message: t.requiredName }
                  ]}
                >
                  <Input placeholder={t.name} />
                </Form.Item>
                <Form.Item
                  name='age'
                  label={t.age}
                  rules={[{ required: true, message: t.requiredAge }]}
                >
                  <Input type='number' placeholder={t.age} />
                </Form.Item>
                <Form.Item
                  name='gender'
                  label={t.gender}
                  rules={[
                    { required: true, message: t.requiredGender }
                  ]}
                >
                  <Select
                    placeholder={t.gender}
                    options={[
                      { value: 1, label: t.male },
                      { value: 2, label: t.female }
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  name='weight'
                  label={t.weight}
                  rules={[
                    { required: true, message: t.requiredWeight }
                  ]}
                >
                  <Input placeholder={t.weight} />
                </Form.Item>
                <Form.Item
                  name='height'
                  label={t.height}
                  rules={[
                    { required: true, message: t.requiredHeight }
                  ]}
                >
                  <Input placeholder='C/M' />
                </Form.Item>
                <Form.Item name='description' label={'description'}>
                  <Input.TextArea
                    rows={4}
                    autoSize={{ minRows: 3, maxRows: 7 }}
                    placeholder={'description'}
                  />
                </Form.Item>
                <Form.Item
                  name='categoryProduct'
                  label={t.sports}
                  className='checkbox-list-wrapper'
                  rules={[
                    { required: true, message: t.requiredCategory }
                  ]}
                >
                  {sports && sports?.length > 0 ?
                    <Checkbox.Group>
                      {check.map((item) => (
                        <Checkbox
                          key={item.value}
                          value={item.value}
                          className='checkbox'
                        >
                          {item.label}
                        </Checkbox>
                      ))}
                    </Checkbox.Group>
                  : <div
                      className='empty'
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '20px'
                      }}
                    >
                      <h1
                        style={{
                          fontSize: '20px',
                          fontWeight: 'bold',
                          textAlign: 'center',
                          color: '#999'
                        }}
                      >
                        add your sports
                      </h1>
                    </div>
                  }
                </Form.Item>
                <AddSport
                  setSports={setSports}
                  sports={sports}
                  t={t}
                />
                <Form.Item
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Button
                    type='primary'
                    htmlType='submit'
                    className='btn-submit'
                  >
                    {getLocalProfile ? t.update : t.save}
                    {/* {t.save} */}
                  </Button>
                </Form.Item>
              </Col>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Profile;
