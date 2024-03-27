import React, { useState } from 'react'
import { ITranslation } from '../../types'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import "./Profile.scss"
import { Button, Card, Checkbox, Col, Form, Input, message, Select, Upload } from 'antd';
import { TbUpload } from "react-icons/tb";

const Profile : React.FC <ITranslation> = ({t}) => {
    const [ form ] = Form.useForm();
    const [fileList, setFileList] = useState<any[]>([]);
    const [values,setValues] = useState<any[]>([]) 
      const beforeUpload = (file : any) => {
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('حجم الصورة يجب ان يكون اقل من 2 ميجا بايت');
          return false;
        }
        return isLt2M;
      };
      const handleUpload = async ({ file, onSuccess } : any) => {
        setTimeout(() => {
          onSuccess('ok');
        }, 0);
      };
      const handleChange = ({ fileList: newFileList } : any) => setFileList(newFileList);
      const check = [
        {
          label: t.swimming,
          value: 1,
        },
        {
          label: t.running,
          value: 2,
        },
        {
          label: t.football,
          value: 3,
        },
        {
          label: t.basketball,
          value: 4,
        },
        {
          label: t.gym,
          value: 5,
        },
        {
          label: t.tennis,
          value: 6,
        },
      ];
  return (
    <>
      <div className="profile">
        <div className="section-header">
          <h1 className="title">{t.profile}</h1>
          <div className="link">
            <Link to="/">{t.homeTab}</Link> <IoIosArrowForward />
            {t.profile}
          </div>
        </div>
        <div className="container">
          <Card className="card-profile">
            <h3 className="title-card">{t.profileTitle}</h3>
            <Form
              name="profile"
              layout="vertical"
              className="form-profile"
              onFinish={(values) => console.log(values)}
            >
              <Col className="upload">
                <Form.Item
                  name="ProductImages"
                  label=""
                  rules={[
                    {
                      required: true,
                      message: 'يجب اضافة صور',
                    },
                  ]}
                >
                  <Upload
                    // listType="picture"
                    listType="picture-card"
                    fileList={fileList}
                    // onPreview={() => setIsImageClicked(true)}
                    onChange={handleChange}
                    multiple
                    accept="image/*"
                    beforeUpload={beforeUpload}
                    customRequest={handleUpload}
                    maxCount={1}
                    // onDownload={false}
                    // onRemove={false}
                    // onDrop={false}
                  >
                    <Button icon={<TbUpload />} type="text">
                      {t.uploadImage}
                    </Button>
                  </Upload>
                </Form.Item>
              </Col>
              <Col className="form-item">
                <Form.Item
                  name="name"
                  label={t.name}
                  rules={[{ required: true, message: t.requiredName }]}
                >
                  <Input placeholder={t.name} />
                </Form.Item>
                <Form.Item
                  name="age"
                  label={t.age}
                  rules={[{ required: true, message: t.requiredAge }]}
                >
                  <Input type="number" placeholder={t.age} />
                </Form.Item>
                <Form.Item
                  name="gender"
                  label={t.gender}
                  rules={[{ required: true, message: t.requiredGender }]}
                >
                  <Select
                    placeholder={t.gender}
                    options={[
                      { value: 'male', label: t.male },
                      { value: 'female', label: t.female },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  name="weight"
                  label={t.weight}
                  rules={[{ required: true, message: t.requiredWeight }]}
                >
                  <Input placeholder={t.weight} />
                </Form.Item>
                <Form.Item
                  name="height"
                  label={t.height}
                  rules={[{ required: true, message: t.requiredHeight }]}
                >
                  <Input placeholder={t.height} />
                </Form.Item>
                <Form.Item name="description" label={"description"}>
                  <Input.TextArea rows={4}  autoSize={{ minRows: 3, maxRows: 7 }}   placeholder={"description"} />
                </Form.Item>
                <Form.Item
                  name="categoryProduct"
                  label={t.sports}
                  className="checkbox-list-wrapper"
                  rules={[{ required: true, message: t.requiredCategory }]}
                >
                  <Checkbox.Group
                    onChange={(value) => {
                      // console.log(value);
                      setValues(value);
                    }}
                    // defaultValue={checked}
                  >
                    {check.map((item) => (
                      <Checkbox
                        key={item.value}
                        value={item.value}
                        className="checkbox"
                      >
                        {item.label}
                      </Checkbox>
                    ))}
                  </Checkbox.Group>
                </Form.Item>
                <Form.Item
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-submit"
                  >
                    {t.save}
                  </Button>
                </Form.Item>
              </Col>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Profile