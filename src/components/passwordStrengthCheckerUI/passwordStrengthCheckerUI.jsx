import React from 'react'
import styles from './passwordStrengthCheckerUI.module.css';
// import styles from './styles.css'
import classNames from 'classnames';
// import cards from './data';

export default () => {
    return (
        <div className="container">
            <div className="row">
                <div className={`col-md-8 border-start border-end border-top ${styles.main_area}`}>
                    <h1 className={`col-12 mt-2 pb-3 ${styles.main_heading}`}>Password Strength Checker</h1>
                </div>
            </div>

            <div className="row">
                <div className={` col-md-8 border-start border-end ${styles.main_area}`}>

                    <div className={`row mt-5 ${styles.icons}`}>

                        <div className={`col border ${styles.UI}`}>
                            <div className='mt-5 mb-2 fw-bolder fs-5'>Enter Password</div>
                            <div className={styles.inputSet}>
                                <input type="text" placeholder='Enter Password' />
                                <button className={` ${styles.button}`}><img src="https://smallseotools.com/webimages/new_eye_open.svg" alt="" /></button>
                            </div>
                            <div className={`password_progress d-flex align-items-center justify-content-between mx-auto mt-4 mb-4 ${styles.bars}`}>
                                <div className={styles.bar} id="pro_bg1" data-score="0"></div>
                                <div className={styles.bar} id="pro_bg2" data-score="0"></div>
                                <div className={styles.bar} id="pro_bg3" data-score="0"></div>
                                <div className={styles.bar} id="pro_bg4" data-score="0"></div>
                            </div>
                        </div>
                    </div>
                    <div className={`row mt-5 mb-5 ${styles.lowerPath}`}>
                        <div className={`col-md-4`}>
                            <div className={`fw-bolder fs-5 ${styles.ch}`}>
                                <span>0</span> Character Containing:
                            </div>
                        </div>
                        <div className={`col-md-8`}>
                            <div className={`mr-5 my-1 d-inline-block ${styles.indDiv}`}>   
                                <img src="https://smallseotools.com/webimages/expd_cross.svg" alt="" className={`img-fluid mr-4 ${styles.indicators}`} id="upperCase"/>
                                    <span className={`${styles.indTxt}`}>Uppercase Letters</span> 
                            </div>
                            <div className={`mr-5 my-1 d-inline-block ${styles.indDiv}`}>   
                                <img src="https://smallseotools.com/webimages/expd_cross.svg" alt="" className={`img-fluid mr-4 ${styles.indicators}`} id="upperCase"/>
                                    <span className={`${styles.indTxt}`}>Lowercase Letters</span> 
                            </div>
                            <div className={`mr-5 my-1 d-inline-block ${styles.indDiv}`}>   
                                <img src="https://smallseotools.com/webimages/expd_cross.svg" alt="" className={`img-fluid mr-4 ${styles.indicators}`} id="upperCase"/>
                                    <span className={`${styles.indTxt}`}>Numbers</span> 
                            </div>
                            <div className={`mr-5 my-1 d-inline-block ${styles.indDiv}`}>   
                                <img src="https://smallseotools.com/webimages/expd_cross.svg" alt="" className={`img-fluid mr-4 ${styles.indicators}`} id="upperCase"/>
                                    <span className={`${styles.indTxt}`}>Space</span> 
                            </div>
                            <div className={`mr-5 my-1 d-inline-block ${styles.indDiv}`}>   
                                <img src="https://smallseotools.com/webimages/expd_cross.svg" alt="" className={`img-fluid mr-4 ${styles.indicators}`} id="upperCase"/>
                                    <span className={`${styles.indTxt}`}>Symbols</span> 
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

