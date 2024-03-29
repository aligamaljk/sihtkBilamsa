import { ITranslation } from '../../types';
import AboutSection from './AboutSection/AboutSection';
import Articles from './Articles/Articles';
import HeroSection from './HeroSection/HeroSection';
import './Home.scss';
import JoinUs from './JoinUs/JoinUs';
import ServicesSection from './ServicesSection/ServicesSection';
import VideoSection from './VideoSection/VideoSection';

const Home = ({ t }: ITranslation) => {
  return (
    <section className='home'>
      <HeroSection t={t} />
      <AboutSection t={t} />
      <ServicesSection t={t} />
      <Articles t={t} />
      <VideoSection t={t} />
      <JoinUs t={t} />
    </section>
  );
};

export default Home;
