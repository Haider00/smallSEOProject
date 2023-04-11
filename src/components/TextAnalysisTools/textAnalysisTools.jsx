import React from 'react'
import styles from './textAnalysisTools.module.css'
// import styles from './styles.css'
import classNames from 'classnames';
import cards from './data';

export default () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className={`col-md-8 ${styles.main_area}`}>
          <h1 className={`col-12 pt-2 mt-2 ${styles.main_heading}`}>Text Analysis Tool</h1>
          <div className={`col-12 ${styles.heading_paragraph}`}>
            <p>A complete set of text tools is now at your fingertips. Check plagiarism, rewrite an article, run a spell checker, count words or change text case.</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className={`col-md-8 ${styles.main_area}`}>

          <div className={`row mt-3 ${styles.icons}`}>
            {
              cards.map(card => {
                return <div className={`col-md-1  ${styles.iconDiv}`}>
                  <div className="icon">
                    {card.icon}
                  </div>
                  <div className={`${styles.text}`}>{card.name}</div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
