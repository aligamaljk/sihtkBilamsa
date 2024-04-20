import {  Button, Card, Col, Form, Input, message, Popconfirm, Table, TableColumnsType } from "antd"
import { DataType, ITranslation } from "../../../types"
import { useEffect, useState } from "react";
import { addDoc, collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../../Firebase/Firebase";
import { getStoredToken } from "../../../services/user-storage";
import {v4} from "uuid";


const Sports : React.FC<ITranslation> = ({t}) => {
  const [form] = Form.useForm();
  const [dataForm, setDataForm] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [idDelete, setIdDelete] = useState<string>('');
    const filter = dataForm?.filter(
      (item: any) => item?.token === getStoredToken()
    );
    const findToken = filter?.find(
      (item: any) => item?.token === getStoredToken()
    );
    // console.log(findToken, 'findToken');
    const handelDelete = (idSport: string) => {
      // console.log(idSport, 'idSport');
      const filterDelete = findToken?.sports?.filter(
        (item: any) => item?.idSport !== idSport
      );
      // console.log(filterDelete, 'filterDelete');
      updateDoc(
        doc(db, 'sports', findToken?.id as unknown as string),
        {
          sports: filterDelete
        }
      )
        .then(() => {
          message.success('تم حذف البيانات بنجاح');
        })
        .catch((error) => {
          console.log(error);
          message.error(error.message);
        });
    };
      const columns: TableColumnsType<DataType> = [
        {
          title: t.day,
          dataIndex: 'day'
        },
        {
          title: t.firstSport,
          dataIndex: 'firstSport'
        },
        {
          title: t.secondSport,
          dataIndex: 'secondSport'
        },
        {
          title: t.exerciseTime,
          dataIndex: 'exerciseTime'
        },
        {
          title: t?.actions,
          dataIndex: 'action',
          render: () => (
            // console.log(record, 'record'),
            <Popconfirm
              title={t?.deleteMessage}
              description={t?.deleteMessageConfirm}
              onConfirm={() => {
                handelDelete(idDelete);
              }}
              okText={t.okText}
              cancelText={t.cancelText}
            >
              <Button type='text' danger size='small'>
                {t?.delete}{' '}
              </Button>
            </Popconfirm>
          )
        }
      ];
  const dataCustomers: DataType[] = findToken?.sports?.map(
    (item: any) => {
      // console.log(item, 'item');
      
      return {
        ...item,
        key: item?.idSport
      };
    }
  );
  const colSport = collection(db, 'sports');
  
  const onFinish = (values: any) => {
    if (findToken?.token === getStoredToken()) {
      const docRef = doc(db, "sports", findToken?.id as unknown as string);
      // console.log('updata');
      setLoading(true);
      updateDoc(docRef,{
        sports: [...findToken?.sports,{...values,idSport : v4()}],
      }).then(() => {
        form.resetFields();
        // console.log('Document successfully written!');
        message.success('تمت العملية بنجاح');
        setLoading(false);
      }).catch((error) => {
        console.log(error);
        setLoading(false);
      })
    } else {
      setLoading(true);
      // console.log('add');
      addDoc(colSport, {
        sports: [{...values ,idSport : v4()}],
        token: getStoredToken()
      }
      
      )
        .then(() => {
          form.resetFields();
          // console.log('Document successfully written!');
          message.success('تمت العملية بنجاح');
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }
  const getData = async () => {
    onSnapshot(colSport, (querySnapshot) => {
      const data  = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id ,
      }));
      setDataForm(data as unknown as DataType[]);
    });
  }
  
  useEffect(() => {
    getData();
  },[]);
  return (
    <>
      <div className='sports'>
        <h1 className='title'> add sports here </h1>
        <Card bordered={false} className='card-sport'>
          <Form
            layout='vertical'
            className='form-sport'
            name='add-sport'
            onFinish={onFinish}
            form={form}
          >
            <Col className='form-item'>
              <Form.Item
                name='day'
                label={t.day}
                rules={[
                  {
                    required: true,
                    message: t.pleaseEnterDay
                  }
                ]}
              >
                <Input type='text' />
              </Form.Item>
              <Form.Item
                name='firstSport'
                label={t.firstSport}
                rules={[
                  {
                    required: true,
                    message: t.requireSport
                  }
                ]}
              >
                <Input type='text' />
              </Form.Item>
            </Col>
            <Col className='form-item'>
              <Form.Item
                name='secondSport'
                label={t.secondSport}
                rules={[
                  {
                    required: true,
                    message: t.requireSport
                  }
                ]}
              >
                <Input type='text' />
              </Form.Item>
              <Form.Item
                name='exerciseTime'
                label={t.exerciseTime}
                rules={[
                  {
                    required: true,
                    message: t.requireTime
                  }
                ]}
              >
                <Input type='text' />
              </Form.Item>
            </Col>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                loading={loading}
              >
                {t.addSports}
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <div className='content'>
          <Table
            columns={columns}
            dataSource={dataCustomers}
            loading={loading as unknown as boolean}
            rowSelection={{
              type: 'checkbox',
              onChange: () => {}
            }}
            className='position-relative'
            pagination={{
              current: 1,
              total: 10,
              pageSize: 10,
              responsive: true,
              showSizeChanger: false
            }}
            onRow={(record) => ({
              onClick: () => {
                // console.log(record?.key, 'record');
                setIdDelete(record?.key as unknown as string);
              }
            })}
            scroll={{ x: 'max-content' }}
          />
        </div>
      </div>
    </>
  );
}

export default Sports