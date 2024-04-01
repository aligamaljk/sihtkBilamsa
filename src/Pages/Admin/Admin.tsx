import { Button, Col, Form, Input, message, Upload } from "antd"
import { ITranslation } from "../../types";
import "./Admin.scss"
import { useState } from "react";
const Admin = ({ t }: ITranslation) => {
    const [fileList, setFileList] = useState<any[]>([]);
          const beforeUpload = (file: any) => {
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
              message.error(
                'حجم الصورة يجب ان يكون اقل من 2 ميجا بايت'
              );
              return false;
            }
            return isLt2M;
          };
          const handleUpload = async ({ file, onSuccess }: any) => {
            setTimeout(() => {
              onSuccess('ok');
            }, 0);
          };
    const handleChange = ({
      fileList: newFileList
    }: {
      fileList: any;
    }) => setFileList(newFileList);
  return (
    <>
      <div className='admin'>
        <Form
          name='admin-form'
          layout='vertical'
          className='admin-form'
        >
          <Col className='upload'>
            <Form.Item
              name='image'
              label='Image'
              rules={[
                {
                  required: true,
                  message: 'Please input your image!'
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
                upload
              </Upload>
            </Form.Item>
          </Col>
          <Col className='form-item'>
            <Col className='form-item-info'>
              <Form.Item
                name='titleEn'
                label='TitleEn'
                rules={[
                  {
                    required: true,
                    message: 'Please input your title English!'
                  }
                ]}
              >
                <Input placeholder='titleEn' type='text' />
              </Form.Item>
              <Form.Item
                name='titleAr'
                label='TitleAr'
                rules={[
                  {
                    required: true,
                    message: 'Please input your title Arabic!'
                  }
                ]}
              >
                <Input placeholder='titleAr' type='text' />
              </Form.Item>
            </Col>
            <Col className='form-item-info'>
              <Form.Item
                name='authorEn'
                label='AuthorEn'
                rules={[
                  {
                    required: true,
                    message: 'Please input your author English!'
                  }
                ]}
              >
                <Input placeholder='author English' type='text' />
              </Form.Item>
              <Form.Item
                name='authorAr'
                label='AuthorAr'
                rules={[
                  {
                    required: true,
                    message: 'Please input your author Arabic!'
                  }
                ]}
              >
                <Input placeholder='author Arabic' type='text' />
              </Form.Item>
            </Col>
            <Form.Item
              name='descriptionEn'
              label='DescriptionEn'
              rules={[
                {
                  required: true,
                  message: 'Please input your description English!'
                }
              ]}
            >
              <Input.TextArea
                rows={4}
                autoSize={{ minRows: 3, maxRows: 7 }}
                placeholder={'description English'}
              />
            </Form.Item>
            <Form.Item
              name='descriptionAr'
              label='DescriptionAr'
              rules={[
                {
                  required: true,
                  message: 'Please input your description Arabic!'
                }
              ]}
            >
              <Input.TextArea
                rows={4}
                autoSize={{ minRows: 3, maxRows: 7 }}
                placeholder={'description Arabic'}
              />
            </Form.Item>
            <Form.Item className='btn-wrapper-admin'>
              <Button
                type='primary'
                htmlType='submit'
                className='add-btn'
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Form>
      </div>
    </>
  );
};

export default Admin