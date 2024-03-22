import { Form, Button, App, Input } from "antd"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
// import { setCurrentUser } from "../../../services/store/reducers/usercers/user";
import { setStoredUser } from "../../../services/user-storage";
import "./Login.scss"
import { setCurrentUser } from "../../../services/store/reducers/user";


const LogIn = ({t} : {t : any}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { message } = App.useApp();
    const onFinish = (values: any) => {
        console.log('Success:', values);
        dispatch(setCurrentUser(values));
        setStoredUser(values.username);
        message.success(t.successLog); 
        navigate("/");
    } 
  return (
    <div className="login">
        <div className="login-form-container">
      <div className="title-log">
        <h1>{t.LogIn}</h1>
      </div>
      <Form
        layout="vertical"
        name="login"
        onFinish={onFinish}
        className="login-form"
      >
        <Form.Item
          name="username"
          label="username"
          rules={[{ required: true, message: t.requiredName }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          name="password"
          label="password"
          rules={[{ required: true, message: t.requiredPassword }]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {t.LogIn}
          </Button>
        </Form.Item>
      </Form>
        </div>
    </div>
  );
}

export default LogIn