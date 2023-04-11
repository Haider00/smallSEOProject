import React from 'react'
import styles from './designStudio.module.css';
// import styles from './styles.css'
import classNames from 'classnames';
import cards from './data';

export default () => {
    return (
        <div className='container'>
            <div className="row">
                <div className={`col-md-8 ${styles.main_area}`}>
                    <h1 className={`col-12 mt-2 ${styles.main_heading}`}>Design Studio</h1>
                    <div className={`col-12 ${styles.heading_paragraph}`}>
                        <p>Craft awe-inspiring logos, posters, invitations, flyers, and resume with 1000+ premade templates offered with advanced designing tools on our DesignStudio</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className={`col-md-8 ${styles.main_area}`}>

                    <div className={`row mt-3 ${styles.icons}`}>
                        {
                            cards.map(card => {
                                return <a className={`col-md-1  ${styles.iconDiv}`} href="">
                                    <div>
                                        <div className="icon pt-1">
                                            {card.icon}
                                        </div>
                                        <div className={`${styles.text}`}>{card.name}</div>
                                    </div>
                                </a>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

