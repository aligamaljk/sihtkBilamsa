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
  const [bmrLess, setBmLess] = useState<number>(0);
  const [more, setMore] = useState<string | undefined>(undefined);
  const [caloriesMor, setCaloriesMor] = useState({
    fat: 0,
    protein: 0,
    carbs: 0
  });
  const [caloriesMed, setCaloriesMed] = useState({
    fat: 0,
    protein: 0,
    carbs: 0
  });
  const [caloriesHigh, setCaloriesHigh] = useState({
    fat: 0,
    protein: 0,
    carbs: 0
  });
  const onFinish = (values: any) => {
    console.log('Success:', values);
    const { weight, height, burn, more, age, gender, exercise } =
      values;
    const genType = gender === 1 ? 5 : -161;
    setMore(more);
    setBmr((10 * weight + 6.25 * height - 5 * age) * exercise);

    const bmrless = more === 'less' ? bmr - 500 : bmr;
    setBmLess(bmrless);
    if (burn === 'more' || burn === 'week') {
      setCaloriesMor({
        carbs: (bmrless * 25) / 100 / 4,
        protein: (bmrless * 40) / 100 / 4,
        fat: (bmrless * 35) / 100 / 9
      });
    } else if (burn === 'medium' || burn === 'less') {
      setCaloriesMed({
        carbs: (bmrless * 40) / 100 / 4,
        protein: (bmrless * 30) / 100 / 4,
        fat: (bmrless * 30) / 100 / 9
      });
    } else if (burn === 'high' || burn === 'stability') {
      setCaloriesHigh({
        carbs: (bmrless * 55) / 100 / 4,
        protein: (bmrless * 20) / 100 / 4,
        fat: (bmrless * 25) / 100 / 9
      });
    }
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
                      <Select.Option value={'more'}>
                        {t.moreCal}
                      </Select.Option>
                      <Select.Option value={'less'}>
                        {t.lessCal}
                      </Select.Option>
                      <Select.Option value={'stability'}>
                        {t.stability}
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type='primary'
                      htmlType='submit'
                      className='calories-form-button'
                    >
                      {t.calculate}
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
              <Card className='content-right'>
                <div className='title-calories'>
                  {t.calories} <span>( {bmr.toFixed(2)} cal)</span>
                </div>
                <div className='calories-container'>
                  {more ?
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
                            {' '}
                            {caloriesMor.carbs.toFixed(2)}g{' '}
                          </div>
                        </div>
                        <div className='calories-foot-item'>
                          <div className='calories-foot-item-title'>
                            {' '}
                            {t.protein}:
                          </div>
                          <div className='calories-foot-item-desc'>
                            {' '}
                            {caloriesMor.protein.toFixed(2)}g
                          </div>
                        </div>
                        <div className='calories-foot-item'>
                          <div className='calories-foot-item-title'>
                            {' '}
                            {t.fat}:
                          </div>
                          <div className='calories-foot-item-desc'>
                            {' '}
                            {caloriesMor.fat.toFixed(2)}g
                          </div>
                        </div>
                        <div className='calories-foot-item'>
                          <h3 className='total-calories'>
                            {t.totalCalories}:
                          </h3>
                          <div className='calories-foot-item-desc'>
                            {' '}
                            {bmrLess.toFixed(2)}g
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
                            {caloriesHigh.carbs.toFixed(2)}g
                          </div>
                        </div>
                        <div className='calories-foot-item'>
                          <div className='calories-foot-item-title'>
                            {t.protein}:
                          </div>
                          <div className='calories-foot-item-desc'>
                            {' '}
                            {caloriesHigh.protein.toFixed(2)}g
                          </div>
                        </div>
                        <div className='calories-foot-item'>
                          <div className='calories-foot-item-title'>
                            {' '}
                            {t.fat}:
                          </div>
                          <div className='calories-foot-item-desc'>
                            {' '}
                            {caloriesHigh.fat.toFixed(2)}g
                          </div>
                        </div>
                        <div className='calories-foot-item'>
                          <h3 className='total-calories'>
                            {t.totalCalories}:
                          </h3>
                          <div className='calories-foot-item-desc'>
                            {' '}
                            {bmrLess.toFixed(2)}{' '}
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
                            {' '}
                            {caloriesMed.carbs.toFixed(2)}g{' '}
                          </div>
                        </div>
                        <div className='calories-foot-item'>
                          <div className='calories-foot-item-title'>
                            {t.protein}:
                          </div>
                          <div className='calories-foot-item-desc'>
                            {' '}
                            {caloriesMed.protein.toFixed(2)}g{' '}
                          </div>
                        </div>
                        <div className='calories-foot-item'>
                          <div className='calories-foot-item-title'>
                            {' '}
                            {t.fat}:
                          </div>
                          <div className='calories-foot-item-desc'>
                            {' '}
                            {caloriesMed.fat.toFixed(2)}g{' '}
                          </div>
                        </div>
                        <div className='calories-foot-item'>
                          <h3 className='total-calories'>
                            {t.totalCalories}:
                          </h3>
                          <div className='calories-foot-item-desc'>
                            {' '}
                            {bmrLess.toFixed(2)}{' '}
                          </div>
                        </div>
                      </div>

                  : <>
                      <div className='emt'>not found</div>
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
