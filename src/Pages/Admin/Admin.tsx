import { Button, Col, Form, Input, message, Upload, UploadFile, UploadProps } from "antd"
import { fileType, fileUploadType, ITranslation, TypesArticle } from "../../types";
import "./Admin.scss"
import { useState } from "react";
import {db, imgDB} from "../../Firebase/Firebase";
import {v4} from "uuid";
import { getDownloadURL, ref, uploadBytes} from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router";
const Admin = ({ t }: ITranslation) => {
    const navigate = useNavigate();
  const [fileList, setFileList] = useState<UploadFile<unknown>[]>([]);
  console.log(fileList, "fileList");
  
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();
  const beforeUpload = (file: fileUploadType) => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error(
        'حجم الصورة يجب ان يكون اقل من 2 ميجا بايت'
      );
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
   setFileList(newFileList as UploadFile<unknown>[]);
 };
 const onFinish = async (values: TypesArticle) => {
   setLoading(true);
      console.log(values);
   const {
     image,
     titleEn,
     titleAr,
     descriptionEn,
     descriptionAr,
     authorAr,
     authorEn
   } = values;
   const imgs = ref(imgDB, `images/${v4()}`);
   uploadBytes(imgs, image?.fileList[0]?.originFileObj)
     .then((snapshot) => {
       console.log(snapshot);
       getDownloadURL(snapshot.ref).then((url) => {
        //  console.log(url);
        const colle = collection(db, 'articles');
         addDoc(colle, {
          image: url,
          titleEn: titleEn,
          titleAr: titleAr,
          descriptionEn: descriptionEn,
          descriptionAr: descriptionAr,
          authorEn: authorEn,
          authorAr: authorAr
        });
        message.success(t.addArticleSuccess);
        form.resetFields();
        setFileList([]);
        navigate('/articles');
       });
       setLoading(false);
     })
     .catch((error) => {
       console.log(error);
       setLoading(false);
       message.error(error.message);
    });
 };
 const props: UploadProps = {
   name: 'file',
   //  beforeUpload,
  //  onUpload: handleUpload,
   onChange: handleChange as any,
   accept: 'image/*',
   fileList: fileList,
   maxCount: 1,
   listType: 'picture-card',
  //  customRequest: handleUpload
 };
  return (
    <>
      <div className='admin'>
        <h1 className='title'> {t.addArticles} </h1>
        <Form
          name='admin-form'
          layout='vertical'
          className='admin-form'
          onFinish={onFinish}
          form={form}
        >
          <Col className='upload'>
            <Form.Item
              name='image'
              label={t.image}
              rules={[
                {
                  required: true,
                  message: t.pleaseUpload
                }
              ]}
            >
              <Upload
                {...props}
              >
                {t.uploadImage}
              </Upload>
            </Form.Item>
          </Col>
          <Col className='form-item'>
            <Col className='form-item-info'>
              <Form.Item
                name='titleEn'
                label={t.titleEn}
                rules={[
                  {
                    required: true,
                    message: t.titleEnRequired
                  }
                ]}
              >
                <Input placeholder={t.titleEn} type='text' />
              </Form.Item>
              <Form.Item
                name='titleAr'
                label={t.titleAr}
                rules={[
                  {
                    required: true,
                    message: t.titleArRequired
                  }
                ]}
              >
                <Input placeholder={t.titleAr} type='text' />
              </Form.Item>
            </Col>
            <Col className='form-item-info'>
              <Form.Item
                name='authorEn'
                label={t.authorEn}
                rules={[
                  {
                    required: true,
                    message: t.authorEnRequired
                  }
                ]}
              >
                <Input placeholder={t.authorEn} type='text' />
              </Form.Item>
              <Form.Item
                name='authorAr'
                label={t.authorAr}
                rules={[
                  {
                    required: true,
                    message: t.authorArRequired
                  }
                ]}
              >
                <Input placeholder={t.authorAr} type='text' />
              </Form.Item>
            </Col>
            <Form.Item
              name='descriptionEn'
              label={t.addArticleEn}
              rules={[
                {
                  required: true,
                  message: t.addArticleEnRequired
                }
              ]}
            >
              <Input.TextArea
                rows={4}
                autoSize={{ minRows: 6, maxRows: 8 }}
                placeholder={t.addArticleEn}
              />
            </Form.Item>
            <Form.Item
              name='descriptionAr'
              label={t.addArticleAr}
              rules={[
                {
                  required: true,
                  message: t.addArticleArRequired
                }
              ]}
            >
              <Input.TextArea
                rows={4}
                autoSize={{ minRows: 6, maxRows: 8 }}
                placeholder={t.addArticleAr}
              />
            </Form.Item>
            <Form.Item className='btn-wrapper-admin'>
              <Button
                type='primary'
                htmlType='submit'
                className='add-btn'
                loading={loading}
              >
                {t.addArticle}
              </Button>
            </Form.Item>
          </Col>
        </Form>
      </div>
    </>
  );
};

export default Admin