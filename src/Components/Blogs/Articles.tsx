import React from 'react'
import { ITranslation } from '../../types'
import { Card, Image } from 'antd'
import "./Articles.scss"
import img from "../../assets/94f2b7445db34d4b86e9a7111ed9b4ee.jpg"
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io';
const Articles : React.FC <ITranslation> = ({t}) => {
  return (
    <>
      <div className="articles">
        <div className="section-header">
          <h1 className="title">{t.articles}</h1>
          <div className="link">
            <Link to="/">{t.homeTab}</Link> <IoIosArrowForward />
            {t.articles}
          </div>
        </div>
        <div className="container">
          <div className="cards">
          {[1,2,3,4,5,6,7,8,9,10]?.map((item) => (
            <Card key={item} className="card" >
              <div className="img">
                <Image  preview={false} src={img} />
              </div>
              <div className="title-card">
                <h1>
                  Health
                </h1>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum nihil officia eius quisquam? Repudiandae.
              </div>
            </Card>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
