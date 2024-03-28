import { ITranslation } from '../../types';
import AboutSection from './AboutSection/AboutSection';
import HeroSection from './HeroSection/HeroSection';
import './Home.scss';

const Home = ({ t }: ITranslation) => {
  return (
    <section className='home'>
      <HeroSection t={t} />
      <AboutSection t={t} />
    </section>
  );
};

export default Home;
