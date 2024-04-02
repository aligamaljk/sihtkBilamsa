import { useState } from 'react';
import { ITranslation } from '../../../types';
import Btn from '../../UI/Button/Btn';
import { FaPlay } from 'react-icons/fa';
import { Button, Modal } from 'antd';
import './VideoSection.scss';

function VideoSection({ t }: ITranslation) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className='video-section'>
      <div className='video-overlay'>
        <Button
          className='play-btn'
          type='primary'
          style={{ backgroundColor: '#fd7304' }}
          onClick={() => setModalOpen(true)}
        >
          <FaPlay />
        </Button>
        <h2>{t.homePage?.videoSection?.h2}</h2>
        <Btn
          size='lg'
          styles={{ border: '2px solid #fd7304' }}
          onClick={() => setModalOpen(true)}
        >
          {t.homePage?.videoSection?.btn}
        </Btn>
      </div>

      {/* 
        =====
        Modal
        =====
      */}

      <Modal
        title={t.homePage?.videoSection?.h2}
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        width={'fit-content'}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <div className='iframe-container'>
          <iframe
            src='https://www.youtube.com/embed/s0m2t4efQms'
            title='موقع صحتك بِلَمسة'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
}

export default VideoSection;
