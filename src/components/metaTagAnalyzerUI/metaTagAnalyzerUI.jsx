import React from 'react'
import styles from './metaTagAnalyzerUI.module.css';
// import styles from './styles.css'
import classNames from 'classnames';
// import cards from './data';

export default () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className={`col-md-8 border-start border-end border-top ${styles.main_area}`}>
                        <h1 className={`col-12 mt-2 ${styles.main_heading}`}>Meta Tag Analyzer</h1>
                    </div>
                </div>

                <div className="row">
                    <div className={`col-md-8 border-start border-end ${styles.main_area}`}>

                        <div className={`row mt-3 ${styles.icons}`}>

                            <div className={`col border ${styles.UI}`}>
                                <div className=''>
                                    <div>Enter URL</div>
                                </div>
                                <div>
                                    <input placeholder='ENTER URL' type="url" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className={`col-md-8 border-start border-end border-bottom ${styles.main_area}`}>
                        <div className={`mt-5 ${styles.icons}`}>
                            <button className='mb-5 p-3 text-white' type='submit'>Analyze Mata Tags</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`container mt-3 ${styles.resultContainer}`}>
                <div className="row">
                    <div className={`col-md-8 border-start border-end border-top ${styles.main_area}`}>
                        <h3 className={`text-center mb-3 mt-3 ${styles.result}`}>Result</h3>

                        {/* 1st Table */}
                        <table className={`text-start fw-bold mb-4 ${styles.table}`}>
                            <tr>
                                
                                <td className={`${styles.tableHeader}`} colSpan='2'><img className='mr-2' src="https://smallseotools.com/webimages/tag_analyzer.svg" alt="" /> Meta tags report for: <a href="">https://smallseotools.com/meta-tags-analyzer/</a></td>
                            </tr>
                            <tr>
                                <td>Meta Title</td>
                                <td>Meta Tags Analyzer | online tool to check Meta Tags of webpage</td>
                            </tr>
                            <tr>
                                <td>Meta Description</td>
                                <td>Meta Tags Analyzer - Online Tool will help you to see meta data of a webpage. Meta Analyzer is 100% free and no registration is required for this.</td>
                            </tr>
                        </table>

                        {/* 2nd Table */}
                        <table className={`text-start fw-bold mb-5 ${styles.table}`}>
                            <tr>
                                <td className={`${styles.tableHeader}`} colSpan='2'><img className='mr-2' src="https://smallseotools.com/webimages/tag_analyzer.svg" alt="" /> Meta Tags Analysis</td>
                            </tr>
                            <tr>
                                <td>Meta Title</td>
                                <td>
                                    <p className='fw-bold text-danger'>Title should be smaller than 60 characters (62) characters </p>
                                    <p className='fw-bold'>Meta Tags Analyzer | online tool to check Meta Tags of webpage</p>
                                </td>
                            </tr>
                            <tr>
                                <td>Meta Keyword</td>
                                <td>Meta Keywords not found</td>
                            </tr>
                            <tr>
                                <td>Meta Description</td>
                                <td >
                                    <p className="text-primary fw-bold">Meta Description is greater than 80 and smaller than 160 characters (146) characters.</p>
                                    <p className="fw-bold">Meta Tags Analyzer - Online Tool will help you to see meta data of a webpage. Meta Analyzer is 100% free and no registration is required for this.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>Meta Viewport</td>
                                <td>Mwidth=device-width, initial-scale=1</td>
                            </tr>
                            <tr>
                                <td>Meta robots</td>
                                <td>Webpage has no robots meta tag</td>
                            </tr>
                            <tr>
                                <td>Open Graph</td>
                                <td>Open Graph is used</td>
                            </tr>
                        </table>

                        {/* 3rd Table     */}
                        <table className={`text-start fw-bold mb-5 ${styles.table}`}>
                            <tr>
                                <td className={`${styles.tableHeader}`}><img className='mr-2' src="https://smallseotools.com/webimages/tag_analyzer.svg" alt="" /> Your site displayed on a search engine page</td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="fw-bold">Meta Tags Analyzer | online tool to check Meta Tags of webpage</p>
                                    <p className="fst-normal">Meta Tags Analyzer - Online Tool will help you to see meta data of a webpage. Meta Analyzer is 100% free and no registration is required for this.</p>
                                    <p className="fst-normal"><a href="">https://smallseotools.com/meta-tags-analyzer/</a></p>
                                </td>
                            </tr>
                        </table>

                        {/* 4th Table     */}
                        <table className={`text-start fw-bold mb-5 ${styles.table}`}>
                            <tr>
                                <td className={`${styles.tableHeader}`}><img className='mr-2' src="https://smallseotools.com/webimages/tag_analyzer.svg" alt="" /> Web page analysis</td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="fw-bold text-primary">This page contains 75 URLs.</p>
                                    <p className="fst-normal">This web page contains 75 urls. Some Search Engines have problems with more than 100 urls on a page.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="fw-bold text-primary">The size of the web page.</p>
                                    <p className="fst-normal">The size of the web page is 64066 bytes.</p>
                                </td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}

