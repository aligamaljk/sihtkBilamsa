import React, { useEffect, useState } from 'react';
import { Image, Pagination, Skeleton } from 'antd';
import { ArticleType, ITranslation, StoreType } from '../../../types';
import './BlogsDetails.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { articlesAr, articlesEn } from '../../../Data/Data';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../Firebase/Firebase';
const BlogsDetails: React.FC<ITranslation> = ({ t }) => {
  const { currentLang } = useSelector(
    (state: StoreType) => state?.user
  );
  
  const { id } = useParams();
  // console.log(id);
  
  const [idPage, setIdPage] = useState<number | undefined>(
    Number(id)
  );
  const [load, setLoad] = useState<boolean>(true);
  const [articlese, setArticles] = useState <ArticleType[]>([]);
  console.log(idPage);
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
  const dataDetails = articlese?.find(
    (article: ArticleType) => article.id == id
  )
  console.log(dataDetails);
  
  const data = currentLang === 'en' ? articlesEn : articlesAr;
  const foundArticle = data?.find(
    (article: ArticleType) => article.id == idPage
  );
  const htmlString = foundArticle?.content.join('') || '';
  if (load) {
    return (
      <div className='blogs-details'>
        <Skeleton active />
      </div>
    );
  }
  return (
    <div className='blogs-details'>
      <Image
        preview={false}
        src={foundArticle?.image || dataDetails?.image}
      />
      <h1>{foundArticle?.title || currentLang === 'en' ? dataDetails?.titleEn : dataDetails?.titleAr}</h1>
      <div className='des'>
        <div dangerouslySetInnerHTML={{ __html: htmlString }}>

        </div>
        <p>
          {
            currentLang === 'en' ? dataDetails?.descriptionEn : dataDetails?.descriptionAr
          }
        </p>
      </div>
      <div className='auth'>
        <h3>
          {t.author}:<span> {foundArticle?.author || currentLang === 'en' ? dataDetails?.authorEn : dataDetails?.authorAr}</span>
        </h3>
        <h3>
          {t.date}: <span>{foundArticle?.date || "22/10/2022" }</span>
        </h3>
      </div>
      <div className='pag'>
        <Pagination
          responsive={true}
          defaultCurrent={idPage}
          total={50}
          onChange={(page) => setIdPage(page)}
        />
      </div>
    </div>
  );
};

export default BlogsDetails;
