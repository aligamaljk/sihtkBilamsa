import { Link } from 'react-router-dom';
import { ITranslation } from '../../types';
import { IoIosArrowForward } from 'react-icons/io';
import './Calories.scss';
import { Button, Card, Form, Input, Select } from 'antd';
import { useState } from 'react';
import CalorieFood from './CalorieFood';
import { getStoredUserProfile } from '../../services/user-storage';
const Calories: React.FC<ITranslation> = ({ t }) => {
  const getLocalProfile = getStoredUserProfile();
  const [form] = Form.useForm();
  const [bmr, setBmr] = useState<number>(0);
  const [more, setMore] = useState<string | undefined>(undefined);
  const onFinish = (values: any) => {
    console.log('Success:', values);
    const { weight, height, burn, more, age, gender, exercise } =
      values;
    setMore(more);
    setBmr((10 * weight + 6.25 * height - 5 * age) * exercise);
  };
  return (
    <>
      <div className='calories'>
        <div className='section-header'>
          <h1 className='title'>{t.calories}</h1>
          <div className='link'>
            <Link to='/'>{t.homeTab}</Link> <IoIosArrowForward />
            {t.calories}
          </div>
        </div>
        <div className='container'>
          <div className='container-calories'>
            <div className='title-calories'>{t.caloriesTitle}</div>
            <div className='content'>
              <Card className='content-left'>
                <Form
                  layout='vertical'
                  name='calories'
                  className='form-calories'
                  form={form}
                  onFinish={onFinish}
                  initialValues={{
                    age: getLocalProfile?.age,
                    gender: getLocalProfile?.gender,
                    height: getLocalProfile?.height,
                    weight: getLocalProfile?.weight
                  }}
                >
                  <div className='row'>
                    <Form.Item
                      name='age'
                      label={t.age}
                      rules={[
                        { required: true, message: t.requiredAge }
                      ]}
                    >
                      <Input type='number' placeholder={t.inputAge} />
                    </Form.Item>
                    <Form.Item
                      name='gender'
                      label={t.gender}
                      rules={[
                        { required: true, message: t.requiredGender }
                      ]}
                    >
                      <Select placeholder={t.requiredGender}>
                        <Select.Option value={1}>
                          {t.male}
                        </Select.Option>
                        <Select.Option value={2}>
                          {t.female}
                        </Select.Option>
                      </Select>
                    </Form.Item>
                  </div>

                  <div className='row'>
                    <Form.Item
                      name='weight'
                      label={t.weight}
                      rules={[
                        { required: true, message: t.requiredWeight }
                      ]}
                    >
                      <Input type='number' placeholder='kg' />
                    </Form.Item>
                    <Form.Item
                      name='height'
                      label={t.height}
                      rules={[
                        { required: true, message: t.requiredHeight }
                      ]}
                    >
                      <Input type='number' placeholder='cm' />
                    </Form.Item>
                  </div>
                  <Form.Item
                    name='burn'
                    label={t.burn}
                    rules={[
                      { required: true, message: t.requiredBurn }
                    ]}
                  >
                    <Select placeholder={t.requiredBurn}>
                      <Select.Option value='week'>
                        {t.burn1}
                      </Select.Option>
                      <Select.Option value='medium'>
                        {t.burn2}
                      </Select.Option>
                      <Select.Option value='high'>
                        {t.burn3}
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name='exercise'
                    label={t.exercise}
                    rules={[
                      { required: true, message: t.requiredExercise }
                    ]}
                  >
                    <Select placeholder={t.requiredExercise}>
                      <Select.Option value='1.2'>
                        1 {t.days}{' '}
                      </Select.Option>
                      <Select.Option value='1.3'>
                        2-3 {t.days}
                      </Select.Option>
                      <Select.Option value='1.55'>
                        {' '}
                        4-5 {t.days}
                      </Select.Option>
                      <Select.Option value='1.7'>
                        {' '}
                        6-7 {t.days}
                      </Select.Option>
                      <Select.Option value='1.9'>
                        {' '}
                        7+ {t.days}
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name='more'
                    label={t.goal}
                    rules={[
                      { required: true, message: t.requiredGoal }
                    ]}
                  >
                    <Select
                      placeholder={t.requiredGoal}
                      onChange={(value) => setMore(value)}
                    >
                      <Select.Option value='more'>
                        {t.moreCal}
                      </Select.Option>
                      <Select.Option value='less'>
                        {t.lessCal}
                      </Select.Option>
                      <Select.Option value='stability'>
                        {t.stability}
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                  >
                    <Button
                      type='primary'
                      shape='round'
                      size='large'
                      block
                      htmlType='submit'
                      className='calories-form-button'
                    >
                      {t.calculate}
                    </Button>
                    {/* <Button onClick={() => form.resetFields()}  type="primary" danger shape='round'>
                      Reset
                    </Button> */}
                  </Form.Item>
                </Form>
              </Card>
              <Card className='content-right'>
                <div className='title-calories'>
                  {t.calories} <span>( {Math.round(bmr)} cal)</span>
                </div>
                <div className='calories-container'>
                  {more && bmr > 0 ?
                    more == 'more' ?
                      <div className='calories-foot-wrapper-mor'>
                        <div className='title-calories-mor'>
                          {t.caloriesMore}
                        </div>
                        <div className='calories-foot-item'>
                          <div className='calories-foot-item-title'>
                            {' '}
                            {t.carbs}:
                          </div>
                          <div className='calories-foot-item-desc'>
                            {Math.round(((bmr + 500) * 25) / 100 / 4)}
                            cal
                          </div>
                        </div>
                        <div className='calories-foot-item'>
                          <div className='calories-foot-item-title'>
                            {' '}
                            {t.protein}:
                          </div>
                          <div className='calories-foot-item-desc'>
                            {Math.round(((bmr + 500) * 40) / 100 / 4)}
                          </div>
                        </div>
                        <div className='calories-foot-item'>
                          <div className='calories-foot-item-title'>
                            {' '}
                            {t.fat}:
                          </div>
                          <div className='calories-foot-item-desc'>
                            {Math.round(((bmr + 500) * 35) / 100 / 9)}
                            cal
                          </div>
                        </div>
                        <div className='calories-foot-item'>
                          <h3 className='total-calories'>
                            {t.totalCalories}:
                          </h3>
                          <div className='calories-foot-item-desc'>
                            {Math.round(bmr + 500)}cal
                          </div>
                        </div>
                      </div>
                    : more == 'less' ?
                      <div className='calories-foot-wrapper-less '>
                        <div className='title-calories-less'>
                          {t.caloriesLess}
                        </div>
                        <div className='calories-foot-item'>
                          <div className='calories-foot-item-title'>
                            {' '}
                            {t.carbs}:
                          </div>
                          <div className='calories-foot-item-desc'>
                            {Math.round(((bmr - 500) * 55) / 100 / 4)}
                            cal
                          </div>
                        </div>
                        <div className='calories-foot-item'>
                          <div className='calories-foot-item-title'>
                            {t.protein}:
                          </div>
                          <div className='calories-foot-item-desc'>
                            {Math.round(((bmr - 500) * 20) / 100 / 4)}
                            cal
                          </div>
                        </div>
                        <div className='calories-foot-item'>
                          <div className='calories-foot-item-title'>
                            {' '}
                            {t.fat}:
                          </div>
                          <div className='calories-foot-item-desc'>
                            {Math.round(((bmr - 500) * 25) / 100 / 9)}
                            cal
                          </div>
                        </div>
                        <div className='calories-foot-item'>
                          <h3 className='total-calories'>
                            {t.totalCalories}:
                          </h3>
                          <div className='calories-foot-item-desc'>
                            {Math.round(bmr - 500)}cal
                          </div>
                        </div>
                      </div>
                    : <div className='calories-foot-wrapper-less '>
                        <div className='title-calories-less'>
                          {t.caloriesStability}
                        </div>
                        <div className='calories-foot-item'>
                          <div className='calories-foot-item-title'>
                            {' '}
                            {t.carbs}:
                          </div>
                          <div className='calories-foot-item-desc'>
                            {Math.round((bmr * 55) / 100 / 4)}cal
                          </div>
                        </div>
                        <div className='calories-foot-item'>
                          <div className='calories-foot-item-title'>
                            {t.protein}:
                          </div>
                          <div className='calories-foot-item-desc'>
                            {' '}
                            {Math.round((bmr * 20) / 100 / 4)}cal
                          </div>
                        </div>
                        <div className='calories-foot-item'>
                          <div className='calories-foot-item-title'>
                            {' '}
                            {t.fat}:
                          </div>
                          <div className='calories-foot-item-desc'>
                            {Math.round((bmr * 25) / 100 / 4)}cal
                          </div>
                        </div>
                        <div className='calories-foot-item'>
                          <h3 className='total-calories'>
                            {t.totalCalories}:
                          </h3>
                          <div className='calories-foot-item-desc'>
                            {Math.round(bmr)}cal
                          </div>
                        </div>
                      </div>
                  : <>
                      <div className='emt'
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '2rem', padding: '1rem',marginTop:'2rem' }}
                      >
                        <h3 style={{ textAlign: 'center', fontSize: '2rem', color: '#7f8897', fontWeight: 'bold' }}>{t.emty}</h3>
                        <p
                          style={{ textAlign: 'center', fontSize: '1.5rem', color: '#7f8897' }}
                        >{t.emtDesc}</p>
                      </div>
                    </>
                  }
                </div>
              </Card>
            </div>
          </div>
          <div className='container-food'>
            <CalorieFood t={t} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Calories;
