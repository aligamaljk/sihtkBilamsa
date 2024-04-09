import React, { useEffect, useState } from 'react';
import { Button, Image, message, Pagination, Popconfirm, Skeleton } from 'antd';
import { ArticleType, ITranslation, StoreType } from '../../../types';
import './BlogsDetails.scss';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { articlesAr, articlesEn } from '../../../Data/Data';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../../../Firebase/Firebase';
import { Link } from 'react-router-dom';
import { getStoredUser } from '../../../services/user-storage';
const BlogsDetails: React.FC<ITranslation> = ({ t }) => {
  const navigator = useNavigate();
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
    setArticles(allData );
    console.log(allData);
  };
  useEffect(() => {
    getDate();
  }, []);
  const dataDetails = articlese?.find(
    (article: ArticleType) => article.id == id as unknown as string
  )
  console.log(dataDetails);
  
  const data = currentLang === 'en' ? articlesEn : articlesAr;
  const foundArticle = data?.find(
    (article: ArticleType) => article.id == idPage 
  );
  const htmlString = foundArticle?.content.join('') || '';
   const handleDeleteArticle = () => {
    console.log(dataDetails?.id, 'foundArticle?.id');
    
     deleteDoc(
       doc(db, 'articles', dataDetails?.id as unknown as string)
     )
       .then(() => {
         message.success('تم الحذف بنجاح');
         navigator('/articles');
       })
       .catch((err) => {
         message.error(err.message);
       });
   };
  if (load) {
    return (
      <div className='blogs-details'>
        <Skeleton active />
      </div>
    );
  }
 
  return (
    <div className='blogs-details'>
      {getStoredUser() === "admin" &&(
      <div
        className='header-admin'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
          width: '100%',
          marginBottom: '30px'
        }}
      >
        <Popconfirm
          title={t?.deleteMessage}
          description={t?.deleteMessageConfirm}
          onConfirm={() => {
            handleDeleteArticle();
          }}
          onCancel={() => {
            message.info(t?.cancelText);
          }}
          okText={t.okText}
          cancelText={t.cancelText}
        >
          <Button type='text' danger>
            {t.delete}
          </Button>
        </Popconfirm>
        <Link
          to='/articles'
          style={{
            // color: "#000",
            fontSize: '18px',
            fontWeight: '500'
          }}
        >
          {t.articles}
        </Link>
      </div>
      )
      }
      <Image
        preview={false}
        src={foundArticle?.image || dataDetails?.image}
      />
      <h1>
        {foundArticle?.title || currentLang === 'en' ?
          dataDetails?.titleEn
        : dataDetails?.titleAr}
      </h1>
      <div className='des'>
        <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
        <p>
          {currentLang === 'en' ?
            dataDetails?.descriptionEn
          : dataDetails?.descriptionAr}
        </p>
      </div>
      <div className='auth'>
        <h3>
          {t.author}:
          <span>
            {' '}
            {foundArticle?.author || currentLang === 'en' ?
              dataDetails?.authorEn
            : dataDetails?.authorAr}
          </span>
        </h3>
        <h3>
          {t.date}: <span>{foundArticle?.date || '22/10/2022'}</span>
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
