import React from 'react';
import { ITranslation, StoreType } from '../../types';
import { Card, Image, Pagination } from 'antd';
import './Articles.scss';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { articlesAr, articlesEn } from '../../Data/Data';
const Articles: React.FC<ITranslation> = ({ t }) => {
  const navget = useNavigate();
  const { currentLang } = useSelector(
    (state: StoreType) => state?.user
  );

  return (
    <>
      <div className='articles'>
        <div className='section-header'>
          <h1 className='title'>{t.articles}</h1>
          <div className='link'>
            <Link to='/'>{t.homeTab}</Link> <IoIosArrowForward />
            {t.articles}
          </div>
        </div>
        <div className='container'>
          <div className='cards'>
            {/* {[1, 2, 3, 4, 5, 6]?.map((product) => (
                    <div className="card" key={product}>
                      <Card
                        hoverable
                        loading
                        cover={
                          <Skeleton.Image
                            active
                            style={{ width: "100% !important" }}
                          />
                        }
                      />
                    </div>
                  ))} */}
            {(currentLang === 'en' ? articlesEn : articlesAr)?.map(
              (item) => (
                <Card
                  key={item?.id}
                  className='card'
                  onClick={() => navget(`/articles/${item?.id}`)}
                  hoverable
                >
                  <div className='img'>
                    <Image preview={false} src={item?.image} />
                  </div>
                  <div className='title-card'>
                    <h1>{item?.title}</h1>
                  </div>

                  <div className='desc'>
                    {item?.desShow
                      .split(' ')
                      .reduce((acc, cur, i) => {
                        // Enter the length of words to display like here    : 9
                        if (cur !== ' ' && i < 9) {
                          return (acc = acc + ' ' + cur);
                        }
                        return acc;
                      }, '')}
                    ...
                    {/* {item?.content?.map((item : any)=>(
                  <div key={item} dangerouslySetInnerHTML={{__html: item.slice(0,20)}} ></div>
                ))} */}
                  </div>
                </Card>
              )
            )}
          </div>
          <Pagination
            responsive={true}
            defaultCurrent={1}
            total={10}
            //  onChange={(page)=>setIdPage(page)}
            style={{
              justifyContent: 'center',
              margin: '20px 0 50px',
              display: 'flex'
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Articles;
