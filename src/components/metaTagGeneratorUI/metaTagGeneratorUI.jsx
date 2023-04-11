import React from 'react'
import styles from './metaTagGeneratorUI.module.css';
// import styles from './styles.css'
import classNames from 'classnames';
// import cards from './data';

export default () => {
    return (
        <div className="container">
            <div className="row">
                <div className={`col-md-8 border-start border-end border-top ${styles.main_area}`}>
                    <h1 className={`col-12 mt-2 ${styles.main_heading}`}>Meta Tag Generator</h1>
                    <hr className="hr" />
                </div>
            </div>

            <div className="row">
                <div className={`col-md-8 border-start border-end ${styles.main_area}`}>

                    <div className={`row mt-3 ${styles.icons}`}>

                        <div className={`col border p-2 ${styles.UI}`}>
                            <div className="row m-0 input_section mt-3 px-2 mps text-left">
                                <div className="col-12 px-2 mb-3">
                                    <div className={`tool_heading text-left mb-2`} style={{textAlign:'left'}}>Site Title (Characters left: <span id="titleCount">60</span>)</div>
                                    <input className="mt-2 form-control tool_inp_sty rounded-0" placeholder="Title must be within 60 Characters" id="title" name="title" type="text" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-2">
                                    <div className={`tool_heading mb-2`} style={{textAlign:'left'}}>Site Description (Characters left: <span id="descCount">150</span>)</div>
                                    <input className="mt-2 mb-2 form-control tool_inp_sty rounded-0" placeholder="Description must be within 150 Characters" id="description" name="description" type="text" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-2">
                                    <div className={`tool_heading mb-2`} style={{textAlign:'left'}}>Site Keywords (Separate with commas)</div>
                                    <input className="mt-2 mb-2 form-control tool_inp_sty rounded-0" placeholder="Keywords 1, Keywords 2, Keywords 3" id="keywords" name="keywords" type="text" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-2">
                                    <div className={`tool_heading mb-2`} style={{textAlign:'left'}}>Allow robots to index your website?</div>
                                    <select className="mt-2 mb-2 tool_inp_sty w-100 px-2" id="robotsIndex" name="robotsIndex"><option value="index" selected="selected">Yes</option><option value="noindex">No</option></select>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-2">
                                    <div className={`tool_heading mb-2`} style={{textAlign:'left'}}>Allow robots to follow all links?</div>
                                    <select className="mt-2 mb-2 tool_inp_sty w-100 px-2" id="robotsLinks" name="robotsLinks"><option value="follow" selected="selected">Yes</option><option value="nofollow">No</option></select>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-2">
                                    <div className={`tool_heading mb-2`} style={{textAlign:'left'}}>What type of content will your site display?</div>
                                    <select className="mt-2 mb-2 tool_inp_sty w-100 px-2" id="contentType" name="contentType"><option value="text/html; charset=utf-8" selected="selected">UTF-8</option><option value="text/html; charset=utf-16">UTF-16</option><option value="text/html; charset=iso-8859-1">ISO-8859-1</option><option value="text/html; charset=windows-1252">WINDOWS-1252</option></select>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-2">
                                    <div className={`tool_heading mb-2`} style={{textAlign:'left'}}>What is your site primary language?</div>
                                    <select className="mt-2 mb-2 tool_inp_sty w-100 px-2" id="language" name="language"><option value="English" selected="selected">English</option><option value="French">French</option><option value="Spanish">Spanish</option><option value="Russian">Russian</option><option value="Arabic">Arabic</option><option value="Japanese">Japanese</option><option value="Korean">Korean</option><option value="Hindi">Hindi</option><option value="Portuguese">Portuguese</option><option value="N/A">No Language Tag</option></select>
                                </div>

                                <div className="col-12 optional_meta mt-3 text-left px-2">
                                    <div className={` ${styles.icons}`}>
                                        <button className={`mb-5 p-3 text-white ${styles.btn}`} type='submit'>Optional Meta Tags</button>
                                    </div>
                                </div>
                                <div className="w-100 row m-0" id="show_ext_opt">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-2">
                                        <div className={`tool_heading mb-2`} style={{textAlign:'left'}}>Search engines should revisit this page after</div>
                                        <select className="mt-2 mb-2 tool_inp_sty w-100 px-2" id="revisitdays" name="revisitdays"><option value="0" selected="selected">Select Days</option><option value="1 day">1 day</option><option value="2 days">2 days</option><option value="3 days">3 days</option><option value="4 days">4 days</option><option value="5 days">5 days</option><option value="6 days">6 days</option><option value="7 days">7 days</option><option value="8 days">8 days</option></select>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-2">
                                        <div className={`tool_heading mb-2`} style={{textAlign:'left'}}>Author:</div>
                                        <input className="mt-2 mb-2 form-control tool_inp_sty rounded-0" id="authorname" name="authorname" type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className={`col-md-8 d-flex border-start border-end border-bottom ${styles.main_area}`}>
                    <div className={`mt-5 ${styles.icons}`}>
                        <button className='mb-5 p-3 text-white' type='submit'>Generate Mata Tags</button>
                    </div>
                    <div className={`mt-5 ${styles.icons}`}>
                        <button className='mb-5 p-3 text-white' type='submit'>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

