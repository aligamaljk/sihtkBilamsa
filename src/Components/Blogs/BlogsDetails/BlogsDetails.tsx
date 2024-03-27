import React from 'react'
import img from "../../../assets/94f2b7445db34d4b86e9a7111ed9b4ee.jpg" 
import { Image } from 'antd'
import { ITranslation } from '../../../types'
const BlogsDetails : React.FC <ITranslation> = ({t}) => {
  return (
    <>
        <div className="blogs-details">
            <Image  preview={false} src={img} />
            <h1>Blog Details</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, fuga. Enim ut quas ipsa accusantium atque quam consectetur dolore nisi fugiat inventore minus voluptatum molestias deleniti placeat error, sed corrupti ipsum nihil! Perspiciatis, consectetur. Laudantium placeat, eveniet vitae dolorum voluptatibus porro illum ratione laborum amet modi alias, aliquam dicta voluptates.
            </p>
        </div>
    </>
  )
}

export default BlogsDetails