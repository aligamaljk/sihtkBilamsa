import React from 'react'
import { ITranslation } from '../../types'

const Blogs : React.FC <ITranslation> = ({t}) => {
  return (
    <>
      <div className="blogs">
        <h1>{t.blogs}</h1>
      </div>
    </>
  )
}

export default Blogs