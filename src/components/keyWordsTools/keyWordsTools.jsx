import React from 'react'
import styles from './keyWordsTools.module.css'
// import styles from './styles.css'
import classNames from 'classnames';
import cards from './data'

export default () => {
    return (
        <div className="container">
            <div className="row">
                <div className={`col-md-8 ${styles.main_area}`}>
                    <h1 className={`col-12 mt-2 ${styles.main_heading}`}>Keywords Tools</h1>
                    <div className={`col-12 ${styles.heading_paragraph}`}>
                        <p>For webmasters and SEO professionals, free, powerful and efficient keyword tools that provide you with thorough keyword research and analysis.</p>
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

