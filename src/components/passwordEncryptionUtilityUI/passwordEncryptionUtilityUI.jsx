import React from 'react'
import styles from './passwordEncryptionUtilityUI.module.css';
// import styles from './styles.css'
import classNames from 'classnames';
// import cards from './data';

export default () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className={`col-md-8 border-start border-end border-top ${styles.main_area}`}>
                        <h1 className={`col-12 mt-2 ${styles.main_heading}`}>Password Encryption Utility</h1>
                        <hr className="hr" />
                    </div>
                </div>

                <div className="row">
                    <div className={`col-md-8 border-start border-end ${styles.main_area}`}>

                        <div className={`row mt-3 ${styles.icons}`}>

                            <div className={`col border ${styles.UI}`}>
                                <div className=''>
                                    <div>Enter Password</div>
                                </div>
                                <div>
                                    <input placeholder='ENTER PASSWORD' type="url" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className={`col-md-8 border-start border-end border-bottom ${styles.main_area}`}>
                        <div className={`mt-5 ${styles.icons}`}>
                            <button className='mb-5 p-3 text-white' type='submit'>Encrypt Password</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`container mt-3 ${styles.resultContainer}`}>
                <div className="row">
                    <div className={`col-md-8 border-start border-end border-top ${styles.main_area}`}>
                        <h3 className={`text-center mb-3 mt-3 ${styles.result}`}>Result</h3>
                        <h5 className={`text-center mb-3 mt-3 ${styles.result}`}>Encrypted Password</h5>

                        {/* 1st Table */}
                        <table className={`text-start mb-4 ${styles.table}`}>
                            <tr>
                                <td width="20%" className={`fw-bold ${styles.tableHeader}`}>Given Password:</td>
                                <td className={`fst-normal ${styles.tableHeader}`}>qwerty786</td>
                                <td width="10%" className={`text-center ${styles.tableHeader}`}><img src="https://smallseotools.com/webimages/md5_copy.svg" alt="" /></td>
                            </tr>
                            <tr>
                                <td width="20%" className={`fw-bold`}>Standered Des:</td>
                                <td className={`fst-normal`}>$1$xwkj7lQZ$u0iVfc5Wp/dM7745TjQBw0</td>
                                <td width="10%" className={`text-center`}><img src="https://smallseotools.com/webimages/md5_copy.svg" alt="" /></td>
                            </tr>
                            <tr>
                                <td width="20%" className={`fw-bold ${styles.tableHeader}`}>MD5:</td>
                                <td className={`${styles.tableHeader}`}>9e4b7046fc622ae9c56f9dd3c2209989</td>
                                <td width="10%" className={`text-center ${styles.tableHeader}`}><img src="https://smallseotools.com/webimages/md5_copy.svg" alt="" /></td>
                            </tr>
                            <tr>
                                <td width="20%" className={`fw-bold`}>Sha1:</td>
                                <td className={``}>856f0a0e691911ca0a325945c45a234e3fc6ceac</td>
                                <td width="10%" className={`text-center`}><img src="https://smallseotools.com/webimages/md5_copy.svg" alt="" /></td>
                            </tr>
                            <tr>
                                <td width="20%" className={`fw-bold ${styles.tableHeader}`}>Uuencode:</td>
                                <td className={`${styles.tableHeader}`}>'7=EG1Y-SV `'</td>
                                <td width="10%" className={`text-center ${styles.tableHeader}`}><img src="https://smallseotools.com/webimages/md5_copy.svg" alt="" /></td>
                            </tr>
                            <tr>
                                <td width="20%" className={`fw-bold`}>Base 64:</td>
                                <td className={``}>cXdlcnR5Nzg2</td>
                                <td width="10%" className={`text-center`}><img src="https://smallseotools.com/webimages/md5_copy.svg" alt="" /></td>
                            </tr>
                        </table>


                            <button className="btn btn-primary fw-bold mb-4 mt-5">Generate More</button>
                    </div>
                </div>
            </div>

        </>
    )
}

