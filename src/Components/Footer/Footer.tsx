import React from 'react'
import { ITranslation } from '../../types'

const FooterApp = ({t} : ITranslation) => {
  return (
    <div className="footer">
        <h1>{t.footer}</h1>
    </div>
  )
}

export default FooterApp