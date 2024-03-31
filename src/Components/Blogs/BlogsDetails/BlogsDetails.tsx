import React, { useState } from 'react';
import { Image, Pagination } from 'antd';
import { ArticleType, ITranslation, StoreType } from '../../../types';
import './BlogsDetails.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { articlesAr, articlesEn } from '../../../Data/Data';
const BlogsDetails: React.FC<ITranslation> = ({ t }) => {
  const { currentLang } = useSelector(
    (state: StoreType) => state?.user
  );
  const { id } = useParams();
  const [idPage, setIdPage] = useState<number | undefined>(
    Number(id)
  );
  console.log(idPage);
  const data = currentLang === 'en' ? articlesEn : articlesAr;
  const foundArticle = data?.find(
    (article: ArticleType) => article.id == idPage
  );
  const htmlString = foundArticle?.content.join('') || '';

  return (
      <div className='blogs-details'>
        <Image preview={false} src={foundArticle?.image} />
        <h1>{foundArticle?.title}</h1>
        <div className='des'>
          <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
        </div>
        <div className='auth'>
          <h3>
            {t.author}:<span> {foundArticle?.author}</span>
          </h3>
          <h3>
            {t.date}: <span>{foundArticle?.date}</span>
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
