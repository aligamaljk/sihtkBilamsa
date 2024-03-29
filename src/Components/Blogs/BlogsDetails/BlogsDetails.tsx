import React, { useState } from 'react'
import img from "../../../assets/94f2b7445db34d4b86e9a7111ed9b4ee.jpg" 
import { Image, Pagination } from 'antd'
import { ITranslation, StoreType } from '../../../types'
import "./BlogsDetails.scss"
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { articlesAr, articlesEn, dataAr, dataEn } from '../../../Data/Data'
const BlogsDetails : React.FC <ITranslation> = ({t}) => {
  const { currentLang } = useSelector(
    (state: StoreType) => state?.user
    );
    const {id} = useParams()
    const [idPage,setIdPage] = useState<any>(id)
  console.log(id);
  const data = currentLang === "en" ? articlesEn : articlesAr
  const findArticle = data?.find((article : any)=>  article.id == idPage  )
  // console.log(findArticle);
  return (
    <>
        <div className="blogs-details">
            <Image  preview={false} src={findArticle?.image} />
            <h1>{findArticle?.title}</h1>
            <div className="des">
              {
                // JSON.parse(findArticle?.content)
                findArticle?.content?.map((item : any)=>(
                  <div dangerouslySetInnerHTML={{__html: item}}></div>
                ))}
            {/* <p>
              {findArticle?.descriptionOne}
            </p>
            <p>
              {findArticle?.descriptionOne}
            </p>
            <p>
              {findArticle?.descriptionFour}
            </p>
            <p>
              {findArticle?.descriptionFive}
            </p> */}
            </div>
            <div className="auth">
              <h3>
              {t.author}:<span> {findArticle?.author}</span>
              </h3>
              <h3>
              {t.date}: <span>{findArticle?.date}</span>
              </h3>
            </div>
            <div className="pag">
              <Pagination 
              responsive={true}
              defaultCurrent={idPage}
               total={50} 
               onChange={(page)=>setIdPage(page)}
               
                />
            </div>
        </div>
    </>
  )
}

export default BlogsDetails