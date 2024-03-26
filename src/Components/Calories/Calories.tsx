import { Link } from "react-router-dom";
import { ITranslation } from "../../types"
import { IoIosArrowForward } from 'react-icons/io';
import "./Calories.scss"
import { Button, Card, Form, Input, Select, SelectProps } from "antd";
import { useState } from "react";
import CalorieFood from "./CalorieFood";
const Calories : React.FC <ITranslation> = ({t}) => {
  const [form] = Form.useForm();
  const [bmi,setBmi] = useState<number>(0)
  const [more,setMore] = useState<string | undefined>(undefined)
  const onFinish = (values: any) => {
    console.log("Success:", values);
    const { weight, height, burn,more } = values;
    const bmi = weight / (height * height);
    setMore(more)
    setBmi(bmi)
  }
  console.log('BMI:',bmi);
  const Bodyshape  = () => {
   let valueShape ;
   let des;
  switch (true) {
    case bmi < 18:
      valueShape = t.skinny
      des = t.des1
      break;
    case bmi >= 18 && bmi < 25:
      valueShape = t.normal
      des = t.des2
      break;
    case bmi >= 25 && bmi < 30:
      valueShape = t.overweight
      des = t.des3
      break;
    case bmi >= 30 && bmi < 35:
      valueShape = t.firstDegree
      des = t.des4
      break;
    case bmi >= 35 && bmi < 40:
      valueShape = t.secondDegree
      des = t.des5
      break;
    case bmi >= 40:
      valueShape = t.dangerousObesity
      des = t.des6
      break;
    default:
      valueShape = t.dangerousObesity
      break;
  }
  return {valueShape,des}
}
  return (
    <>
      <div className="calories">
        <div className="section-header">
          <h1 className="title">{t.calories}</h1>
          <div className="link">
            <Link to="/">{t.home}</Link> <IoIosArrowForward />
            {t.calories}
          </div>
        </div>
        <div className="container">
          <div className="container-calories">
          <div className="title-calories">{t.caloriesTitle}</div>
          <div className="content">
            <Card className="content-left">
              <Form layout="vertical" name="calories" className="form-calories"
                form={form} onFinish={onFinish}
              >
                <Form.Item
                  name="weight"
                  label={t.weight}
                  rules={[{ required: true, message: t.requiredWeight }]}
                >
                  <Input type="number" placeholder="K/G" />
                </Form.Item>
                <Form.Item
                  name="height"
                  label={t.height}
                  rules={[{ required: true, message: t.requiredHeight }]}
                >
                  <Input type="number" placeholder="M" />
                </Form.Item>
                <Form.Item
                  name="burn"
                  label={t.burn}
                  rules={[{ required: true, message: t.requiredBurn }]}
                >
                  <Select placeholder={t.requiredBurn}>
                    <Select.Option value="1">{t.burn1}</Select.Option>
                    <Select.Option value="2">{t.burn2}</Select.Option>
                    <Select.Option value="3">{t.burn3}</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="exercise"
                  label={t.exercise}
                  rules={[{ required: true, message: t.requiredExercise }]}
                >
                  <Select placeholder={t.requiredExercise}>
                    <Select.Option value="1">1 {t.days} </Select.Option>
                    <Select.Option value="2">2-3 {t.days}</Select.Option>
                    <Select.Option value="3"> 4-5 {t.days}</Select.Option>
                    <Select.Option value="4"> 6-7 {t.days}</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                name="more"
                label={t.goal}
                rules={[{ required: true, message: t.requiredGoal }]}
              >
                <Select
                  placeholder={t.requiredGoal}
                  onChange={(value) => setMore(value)}
                >
                  <Select.Option value={"more"}>{t.moreCal}</Select.Option>
                  <Select.Option value={"less"}>{t.lessCal}</Select.Option>
                  <Select.Option value={"stability"}>{t.stability}</Select.Option>
                </Select> 
              </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="calories-form-button"
                  >
                    {t.calculate}
                  </Button>
                </Form.Item>
              </Form>
            </Card>
            <Card className="content-right">
              <div className="title-calories">
                {t.calories} <span>(300 cal)</span>{' '}
              </div>
              <div className="calories-container">
                {more && bmi > 0 ? (
                  more == "more" ? (
                <div className="calories-foot-wrapper-mor">
                  <div className="title-calories-mor">{t.caloriesMore}</div>
                  <div className="calories-foot-item">
                    <div className="calories-foot-item-title"> {t.carbs}:</div>
                    <div className="calories-foot-item-desc"> 50g</div>
                  </div>
                  <div className="calories-foot-item">
                    <div className="calories-foot-item-title">
                      {' '}
                      {t.protein}:
                    </div>
                    <div className="calories-foot-item-desc"> 100g</div>
                  </div>
                  <div className="calories-foot-item">
                    <div className="calories-foot-item-title"> {t.fat}:</div>
                    <div className="calories-foot-item-desc"> 20g</div>
                  </div>
                  <div className="calories-foot-item">
                    <h3 className="total-calories">{t.totalCalories}:</h3>
                    <div className="calories-foot-item-desc"> 2000</div>
                  </div>
                </div>
                    
                  ) : (
                    more == "less" ? (
                <div className="calories-foot-wrapper-less ">
                  <div className="title-calories-less">{t.caloriesLess}</div>
                  <div className="calories-foot-item">
                    <div className="calories-foot-item-title"> {t.carbs}:</div>
                    <div className="calories-foot-item-desc"> 50g</div>
                  </div>
                  <div className="calories-foot-item">
                    <div className="calories-foot-item-title">
                      {t.protein}:
                    </div>
                    <div className="calories-foot-item-desc"> 100g</div>
                  </div>
                  <div className="calories-foot-item">
                    <div className="calories-foot-item-title"> {t.fat}:</div>
                    <div className="calories-foot-item-desc"> 20g</div>
                  </div>
                  <div className="calories-foot-item">
                    <h3 className="total-calories">{t.totalCalories}:</h3>
                    <div className="calories-foot-item-desc"> 2000</div>
                  </div>
                </div>
                      
                    ) : (
                <div className="calories-foot-wrapper-less ">
                  <div className="title-calories-less">{t.caloriesStability}</div>
                  <div className="calories-foot-item">
                    <div className="calories-foot-item-title"> {t.carbs}:</div>
                    <div className="calories-foot-item-desc"> 50g</div>
                  </div>
                  <div className="calories-foot-item">
                    <div className="calories-foot-item-title">
                      {t.protein}:
                    </div>
                    <div className="calories-foot-item-desc"> 100g</div>
                  </div>
                  <div className="calories-foot-item">
                    <div className="calories-foot-item-title"> {t.fat}:</div>
                    <div className="calories-foot-item-desc"> 20g</div>
                  </div>
                  <div className="calories-foot-item">
                    <h3 className="total-calories">{t.totalCalories}:</h3>
                    <div className="calories-foot-item-desc"> 2000</div>
                  </div>
                </div>
                    )
                    
                  )
                ) : (
                  <>
                    <div className="emt">
                      not found
                    </div>
                  </>
                )}
              </div>
              {more && bmi > 0 &&(
              <div className="body-shape">
                <h1>{t.bodyShape}: <span>{Bodyshape().valueShape}</span> </h1>
                <p>{Bodyshape().des}</p>
              </div>
              ) }
            </Card>
          </div>
          </div>
          <div className="container-food">
            <CalorieFood t={t} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calories