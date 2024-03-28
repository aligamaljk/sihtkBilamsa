import { ITranslation } from '../../types';
import AboutSection from './AboutSection/AboutSection';
import HeroSection from './HeroSection/HeroSection';
import './Home.scss';
import ServicesSection from './ServicesSection/ServicesSection';

const Home = ({ t }: ITranslation) => {
  return (
    <section className='home'>
      <HeroSection t={t} />
      <AboutSection t={t} />
      <ServicesSection t={t} />
    </section>
  );
};

export default Home;
