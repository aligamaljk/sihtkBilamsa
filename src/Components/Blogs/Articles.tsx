import React, { useEffect, useState } from 'react';
import { ArticleTypeTwo, ITranslation, StoreType } from '../../types';
import { Card, Image, Pagination, Skeleton } from 'antd';
import './Articles.scss';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import { block, For } from 'million/react';

const Articles: React.FC<ITranslation> = ({ t }) => {
  const navget = useNavigate();
  const [load, setLoad] = useState<boolean>(true);
  const [articles, setArticles] = useState<ArticleTypeTwo[]>([]);
  const { currentLang } = useSelector(
    (state: StoreType) => state?.user
  );
  const getDate = async () => {
    setLoad(true);
    const articles = collection(db, 'articles');
    const data = await getDocs(articles)
    console.log(data, "data");
    
    const allData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setLoad(false);
    setArticles(allData);
    console.log(allData);
  };
  useEffect(() => {
    getDate();
  }, []);
  const ArticlesCards = block(({ item } : {item: ArticleTypeTwo}) => {
    return (
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
          <h1>
            {currentLang === 'en' ? item?.titleEn : item?.titleAr}
          </h1>
          <p className='desc'>
            {currentLang === 'en' ?
              item?.descriptionEn?.slice(0, 100)
            : item?.descriptionAr?.slice(0, 100)}
            ...
          </p>
        </div>
      </Card>
    );
  })
  if(load){
    return (
      <div className="articles">
        <div className='container'>
          <div className='cards'>
          {
            [1, 2, 3, 4, 5, 6]?.map((article) => (
               <Card
                 key={article}
                 hoverable
                 loading
                 cover={
                   <Skeleton.Image
                     active
                     style={{ width: "100% !important" }}
                   />
                 }
               />
           ))
          }
          </div>
        </div>
      </div>
    )
  }
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
            {
              <For each={articles} memo={true} >
                {(item) => <ArticlesCards item={item} />}
              </For>
            }
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
