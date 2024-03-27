import { ITranslation } from '../../types';
import Btn from '../UI/Button/Btn';
import './Home.scss';

const Home = ({ t }: ITranslation) => {
  return (
    <section className='home'>
      <div className='container'>
        <div className='section-info'>
          <h1>{t.homePage?.hero?.h1_1}</h1>
          <h1 className='second-heading'>{t.homePage?.hero?.h1_2}</h1>
          <p>{t.homePage?.hero?.p}</p>
          <Btn size='lg' onClick={() => console.log('clicked')}>
            {t.homePage?.hero?.btn}
          </Btn>
        </div>
      </div>
    </section>
  );
};

export default Home;
