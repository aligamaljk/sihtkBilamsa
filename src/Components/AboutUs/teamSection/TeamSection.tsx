import { ITranslation } from '../../../types';
import './TeamSection.scss';

function TeamSection({ t }: ITranslation) {
  return (
    <div className='team-section'>
      <h2 data-aos='flip-down'>
        <span>{t.aboutPage?.teamSectionTitlePart1}</span>
        <span>{t.aboutPage?.teamSectionTitlePart2}</span>
      </h2>
      <div className='team-images'>
        <div className='box' data-aos='fade-right'>
          <img src='team/ali.jpg' alt='ali' />
          <h2>Ali Gamal</h2>
          <p>Frontend Developer</p>
        </div>
        <div className='box' data-aos='fade-left'>
          <img src='team/mahmoud.jpg' alt='mahmoud' />
          <h2>Mahmoud Mohsen</h2>
          <p>Frontend Developer</p>
        </div>
        {/* <div className='box'>
          <img src='team/ahmed.jpg' alt='ahmed' />
          <h2>Ahmed Abd Alrhman</h2>
          <p>Backend Developer</p>
        </div> */}
      </div>
    </div>
  );
}

export default TeamSection;
