import React from 'react'
import styles from './passwordGeneratorUI.module.css';
// import styles from './styles.css'
import classNames from 'classnames';
// import cards from './data';

export default () => {
    return (
        <div className="container">
            <div className="row">
                <div className={`col-md-8 border-start border-end border-top ${styles.main_area}`}>
                    <h1 className={`col-12 mt-2 ${styles.main_heading}`}>Password Generator</h1>
                    <hr className="hr" />
                </div>
            </div>

            <div className="row">
                <div className={`col-md-8 border-start border-end ${styles.main_area}`}>

                    <div className={`row mt-3 ${styles.icons}`}>

                        <div className={`col border ${styles.UI}`}>
                            <div className={`w-100`}>
                                <div className={`mx-auto ${styles.password_area}`}>
                                    <div className={`mb-2 text-start fw-bold fs-6 ${styles.tool_heading}`}>
                                        Generate a Secure Password
                                    </div>
                                    <div className={`input-group ${styles.input_group}`}>

                                        <div className={`input-group-prepend ${styles.img_span}`}>
                                            <span>
                                                <img src="lock.png" alt="" height="25px" width="25px" />
                                            </span>
                                        </div>
                                        <input
                                            className={`px-2 py-1 w-50 ${styles.pInput}`}
                                            placeholder='Enter Password'
                                            id="password"
                                            name="password"
                                            type="text"
                                        />
                                        <div className={`input-group-prepend ${styles.img_span}`}>
                                            <img src="copy.png" alt="" height="25px" width="25px" />
                                        </div>
                                    </div>

                                    <div className={`password_progress d-flex align-items-center justify-content-between mx-auto mt-4 mb-4 ${styles.bars}`}>
                                        <div className={styles.bar1} id="pro_bg1" data-score="0"></div>
                                        <div className={styles.bar2} id="pro_bg2" data-score="0"></div>
                                        <div className={styles.bar3} id="pro_bg3" data-score="0"></div>
                                        <div className={styles.bar4} id="pro_bg4" data-score="0"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className={`mb-2 mx-4 fw-bold text-start fs-6`}>Length of Password</div>
                            <div className={`d-flex`}>
                                <input type="number" className={`d-flex mx-4 ${styles.inputNumber}`} />
                                <div><input className={`${styles.inputRange}`} type="range" min="1" max="50" /></div>
                            </div>

                            <div className={`mb-2 mx-4 my-4 fw-bold text-start fs-6`}>Select one of the radio boxes:</div>

                            <div className={`${styles.radio}`}>

                                <label for="radio1" className={`fw-bold fs-6`}>Easy to say
                                    <input className={`${styles.radioBtn}`} id="radio1" name="radio1" type="radio" />
                                </label>

                                <label for="radio2" className={`fw-bold fs-6 ${styles.radioText}`}>Easy to read
                                    <input className={`${styles.radioBtn}`} id="radio2" name="radio1" type="radio" />
                                </label>

                                <label for="radio3" className={`fw-bold fs-6 ${styles.radioText}`}>All characters
                                    <input className={`${styles.radioBtn}`} id="radio3" name="radio1" type="radio" />
                                </label>

                            </div>

                            <div className={`mb-2 mx-4 my-4 fw-bold text-start fs-6`}>Select one of the Check Boxes:</div>

                            {/* <label for="check1" class="check_area mr-5 pl-4 my-1">
                                <input id="check1" checked="checked" name="check1" type="checkbox" value="check1" />Uppercase
                            </label> */}
                            <div className={`${styles.radio}`}>
                                <label for="radio1" className={`fw-bold fs-6`}>Easy to say
                                    <input className={`${styles.radioBtn}`} id="radio1" name="radio1" type="checkbox" />
                                </label>

                                <label for="radio2" className={`fw-bold fs-6 ${styles.radioText}`}>Easy to read
                                    <input className={`${styles.radioBtn}`} id="radio2" name="radio1" type="checkbox" />
                                </label>

                                <label for="radio3" className={`fw-bold fs-6 ${styles.radioText}`}>All characters
                                    <input className={`${styles.radioBtn}`} id="radio3" name="radio1" type="checkbox" />
                                </label>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="row">
                <div className={`col-md-8 border-start border-end border-bottom ${styles.main_area}`}>
                    {/* <div className={`mt-5 ${styles.icons}`}>
                        <button className='mb-5 p-3 text-white' type='submit'>Encrypt Password</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

