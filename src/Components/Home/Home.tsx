import { ITranslation } from '../../types';
import './Home.scss';

const Home = ({ t }: ITranslation) => {
  return (
    <div className='home'>
      <h1>{t.home}</h1>
    </div>
  );
};

export default Home;
