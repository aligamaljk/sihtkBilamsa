import { Button } from 'antd';
import { ITranslation } from '../../types';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './OwnNotFound.scss';

const OwnNotFound = ({ t }: ITranslation) => {
  return (
    <div className='page-not-found'>
      {/* <h1>{t.OwnNotFound}</h1> */}
      <img
        src='404-with-a-cat.svg'
        alt='404 error photo with a cute cat'
      />

      <Link to='/'>
        <Button type='primary' className='btn-homePage'>
          <AiFillHome />
          <span>{t?.OwnNotFound}</span>
        </Button>
      </Link>
    </div>
  );
};

export default OwnNotFound;
