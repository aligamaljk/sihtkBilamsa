import React, { useEffect, useState } from 'react';
import {
  AddSportType,
  ITranslation,
  fileType,
  fileUploadType,
  userProfileType
} from '../../types';
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
  Spin,
  Upload
} from 'antd';
import { TbUpload } from 'react-icons/tb';
import {
  clearStoredUserProfile,
  // getStoredAddSport,
  getStoredToken,
  getStoredUserProfile,
  setStoredAddSport,
  setStoredUserProfile
} from '../../services/user-storage';
import AddSport from '../AddSport/AddSport';
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
const Profile: React.FC<ITranslation> = ({ t }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const getLocalProfile = getStoredUserProfile() || {};
  const [fileList, setFileList] = useState<fileType[] | []>([]);
  // console.log(fileList, "fileList");
  
  // const [sports, setSports] = useState(getStoredAddSport());
  const [sports, setSports] = useState<AddSportType[]>();
  const [load, setLoad] = useState<boolean>(false);
  const [loadGet, setLoadGet] = useState<boolean>(false);
  const [profile, setProfile] = useState<userProfileType>();
  console.log(profile, 'profile');  
  useEffect(() => {
    if (getLocalProfile && getLocalProfile.image) {
      setFileList(
        getLocalProfile.image.fileList.map((item: fileType) => {
          return item;
        })
      );
    }
  }, []);

  useEffect(() => {
    if (sports) {
      setStoredAddSport(sports);
    }
  }, [sports]);

  const beforeUpload = (file: fileUploadType) => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('حجم الصورة يجب ان يكون اقل من 2 ميجا بايت');
      return false;
    }
    return isLt2M;
  };
  const handleUpload = async ({
    // file,
    onSuccess
  }: {
    // file: fileUploadType;
    onSuccess: (ret: string) => void;
  }) => {
    // console.log(file);
    // console.log(onSuccess);
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };
  const handleChange = ({
    fileList: newFileList
  }: {
    fileList: fileType[] | [];
  }) => {
    setFileList(newFileList);
  };
;
    const colleUser = collection(db, 'user');
  const onFinish = (values: userProfileType) => {
    setLoad(true);
    console.log(values, 'values-profile');
    if (!profile) {
      addDoc(colleUser, {
        token: getStoredToken(),
        // image: values?.userImages?.fileList[0],
        name: values.name ,
        age: values.age,
        categoryProduct: values.categoryProduct,
        gender: values.gender,
        height: values.height,
        weight: values.weight,
        description: values.description || '',
        activity: sports || [],
      }).then(() => {
          setStoredUserProfile({
            image: values?.userImages,
            id: '',
            name: values.name,
            age: values.age,
            categoryProduct: values.categoryProduct,
            gender: values.gender,
            height: values.height,
            weight: values.weight,
            description: values.description,
          });
          message.success(t.profileRegistered);
          setLoad(false);
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
          message.error(error.message);
          setLoad(false);
        });
    } else {
      setLoad(true);
      const docRef = doc(db, 'user', profile?.id as string);
      updateDoc(docRef, {
        name: values.name,
        age: values.age,
        categoryProduct: values.categoryProduct,
        gender: values.gender,
        height: values.height,
        weight: values.weight,
        description: values.description,
        activity: sports || [],
      }).then(() => {
           setStoredUserProfile({
             image: values?.userImages,
             id: '',
             name: values.name,
             age: values.age,
             categoryProduct: values.categoryProduct,
             gender: values.gender,
             height: values.height,
             weight: values.weight,
             description: values.description
           });
          message.success('تم التعديل بنجاح');
          setLoad(false);
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
          message.error(error.message);
          setLoad(false);
        });
    }
  };
  const getUserProfile = () => {
    setLoadGet(true);
    onSnapshot(colleUser, (querySnapshot) => {
      const data = querySnapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        ?.find((item) => item?.token === getStoredToken());
      setProfile(data);
    });
    setTimeout(() => {
      setLoadGet(false);
    }, 1000);
    // setLoadGet(false);
  }
  // console.log(profile, 'filterUser');
  useEffect(() => {
    getUserProfile();
  }, []);

  const handleDelete = () => {
    const docRef = doc(db, 'user', profile?.id as string);
    deleteDoc(docRef)
      .then(() => {
        message.success('تم الحذف بنجاح');
        clearStoredUserProfile();
        setProfile(undefined);
        form.resetFields();
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        message.error(error.message);
      });
  };
    const check = (sports || profile?.activity)?.map(
      (item: AddSportType) => item
    );
    // console.log(check, 'check');
    
  if(loadGet){
    return (
      <div className='loader'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh'
        }}
      >
        <Spin tip='Loading' size='large'>
          <div className='content' />
        </Spin>
      </div>
    );
  }
  return (
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
              userImages: getLocalProfile?.image || null
            }}
          >
            <Col className='upload'>
              <Form.Item
                name='userImages'
                label={t.uploadImage}
                rules={[
                  {
                    required: true,
                    message: t.requiredImage
                  }
                ]}
              >
                <Upload
                  listType='picture-card'
                  fileList={fileList}
                  onChange={handleChange}
                  multiple
                  accept='image/*'
                  beforeUpload={beforeUpload}
                  customRequest={handleUpload}
                  maxCount={1}
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
                rules={[{ required: true, message: t.requiredName }]}
                initialValue={profile?.name}
              >
                <Input placeholder={t.name} />
              </Form.Item>
              <Form.Item
                name='age'
                label={t.age}
                rules={[{ required: true, message: t.requiredAge }]}
                initialValue={profile?.age}
              >
                <Input type='number' placeholder={t.age} />
              </Form.Item>
              <Form.Item
                name='gender'
                label={t.gender}
                rules={[
                  { required: true, message: t.requiredGender }
                ]}
                initialValue={profile?.gender}
              >
                <Select
                  placeholder={t.gender}
                  options={[
                    { value: 'male', label: t.male },
                    { value: 'female', label: t.female }
                  ]}
                />
              </Form.Item>
              <Form.Item
                name='weight'
                label={t.weight}
                rules={[
                  { required: true, message: t.requiredWeight }
                ]}
                initialValue={profile?.weight}
              >
                <Input placeholder={t.weight} />
              </Form.Item>
              <Form.Item
                name='height'
                label={t.height}
                rules={[
                  { required: true, message: t.requiredHeight }
                ]}
                initialValue={profile?.height}
              >
                <Input placeholder='C/M' />
              </Form.Item>
              <Form.Item
                name='description'
                label={'description'}
                initialValue={profile?.description}
              >
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
                initialValue={profile?.categoryProduct}
              >
                {check && check?.length > 0 ?
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
              <AddSport setSports={setSports} sports={sports} t={t} />
              <Form.Item
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '20px'
                }}
              >
                <Button
                  type='primary'
                  htmlType='submit'
                  className='btn-submit'
                  loading={load}
                >
                  {profile ? t.update : t.save}
                  {/* {t.save} */}
                </Button>
                <Button
                  type='primary'
                  danger
                  className='btn-submit'
                  onClick={() => handleDelete()}
                >
                  Delete
                </Button>
              </Form.Item>
            </Col>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
