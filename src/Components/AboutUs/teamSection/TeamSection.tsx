import { ITranslation } from '../../../types';
import './TeamSection.scss';

function TeamSection({ t }: ITranslation) {
  return (
    <div className='team-section'>
      <h2>
        <span>{t.aboutPage?.teamSectionTitlePart1}</span>
        <span>{t.aboutPage?.teamSectionTitlePart2}</span>
      </h2>
      <div className='team-images'>
        <img src='team/ali.jpg' alt='ali' />
        <img src='team/mahmoud.jpg' alt='mahmoud' />
        <img src='team/ahmed.jpg' alt='ahmed' />
      </div>
    </div>
  );
}

export default TeamSection;
