import React from 'react'
import styles from './passwordStrengthCheckerDescription.module.css';
// import styles from './styles.css'
import classNames from 'classnames';
// import cards from './data';

export default () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className={`col-md-8 border mb-3 ${styles.main_area}`}>
                    <h2 className='text-start px-3 pt-3 pb-2'>Password Strength Checker by SmallSEOTools</h2>
                    <p className='px-3 pb-3 text-start'>Check your password’s strength easily using this Password Strength Checker by Small SEO Tools</p>
                    <p className='px-3 py-2 text-start'>Password strength is important because it measures the effectiveness of a password against possible guessing or brute-force attacks. Primarily, it gives you an estimate on how many tries an attacker who does not have any idea to the password would need, to guess your password correctly. The strength of a password is normally based on its length, varying characters used, and unpredictability.</p>
                    <p className='px-3 py-2 text-start'>Having strong passwords can help lower your risk of a security crack or breach. The speed at which an attacker can submit the guessed passwords to the system is also an important factor in determining system security. Some of which would inflict a time-out of several seconds after a few failed password entry attempts. In the absence of other possible attacks, systems can be secured with fairly simple passwords. However, the system must keep information about the user passwords in some form, and if that information is stolen by breaching, then the user passwords can be at risk.</p>
                    <h3 className='text-start px-3 pt-3 pb-2'>How to use this Password Strength Checker</h3>
                    <p className='px-3 pb-3 text-start'>To use this Password Strength Checker by Small SEO Tools, simply write the password that you want to check in the text box.</p>
                    <p className='px-3 pb-3 text-start'>The password is being analyzed by this Password Strength Checker as you are typing it. This way you get to see the results of the syntax analysis immediately.</p>
                    <h3 className='text-start px-3 pt-3 pb-2'>Why Use a Password Strength Checker?</h3>
                    <p className=' text-justify px-3 pb-3 text-start'>Your internet security is something that you should take seriously. It is equally important as protecting your own home. We are pretty sure that you are not maintaining just one account – be it an email, social media, cloud, online shopping, membership, and online banking to name a few. You will need a strong password if you want to protect any of these.</p>
                    <p className=' text-justify px-3 pb-3 text-start'>Hackers are everywhere, and they have right tools to get access to any account to steal your identity or worse use your bank and credit card details to get all your money. This is the reason why you need to be cautious and make necessary measures to protect yourself from possible Phishing and other hacking activities.</p>
                    <p className=' text-justify px-3 pb-3 text-start'>This Password Strength Checker tool can help strengthen your passwords because we believe that the best way to protect it is by having a password that is unpredictable and extremely difficult to guess.</p>
                    <p className=' text-justify px-3 pb-3 text-start'>Password Strength Checker by Small SEO Tools can help you assess the strength of your password more accurately. This password strength meter checks the password strength against two common types of password cracking techniques – the brute-force and the dictionary attack. In addition, it can also analyze the syntax of your password and tells you about its weaknesses. This password security checker also allows you to make a stronger password from a weak one.</p>
                    <p className=' text-justify px-3 pb-3 text-start'>Using this Password Strength Checker by Small SEO Tools is safe in both the syntax evaluating mode and the dictionary attack mode. As you type your password to the text box its syntax is analyzed and showed on the client side, by JavaScript in your browser; this means that the password is not being moved over the net and into our server.</p>
                    <p className=' text-justify px-3 pb-3 text-start'>The score estimate calculation is usually based on the period that a middle size botnet would probably need in to be able to crack your password if the attacker uses the brute-force attack. The regular attacker would normally try several times using the most common passwords. Therefore, if your password is included in the list of most common passwords then your password will probably get a score of 0 because such passwords are very weak.</p>
                    <p className=' text-justify px-3 pb-3 text-start'>There are significant attributes of your password that an automatic tool such as this Password Strength Checker cannot evaluate. When creating your password, you should keep in your mind that it should not have any important information that could be associated with you or the system in which the password is used. Also, avoid the use of the same passwords in different systems like in your email or social media accounts.</p>
                    <h3 className='text-start px-3 pt-3 pb-2'>Qualities of a Good Password</h3>
                    <p className='px-3 py-2 text-start'>Many people wonder if their password is already good enough. There are two different types of people. The first one would likely pick any word that he can think of, which is not a good practice when creating passwords. The second type will just add a few numbers to be able to make the password a bit difficult to guess. But, how do you know if it is really good enough?</p>
                    <p className='px-3 py-2 text-start'>A good password is important in securing the online accounts that you often visit. But, if you are wondering about the qualities of a good password, here are some points to consider when creating one:</p>
                    <ul>
                        <li className='px-3 py-2 text-start'>Must contain enough number of characters</li>
                        <li className='px-3 py-2 text-start'>Must have a combination of symbols, an uppercase or lower case, and numbers</li>
                        <li className='px-3 py-2 text-start'>Must not use a common word</li>
                        <li className='px-3 py-2 text-start'>Must not contain a name, date, or other things that are related to you</li>
                        <li className='px-3 py-2 text-start'>Must be created randomly</li>
                        <li className='px-3 py-2 text-start'>Must not be found when you type first few characters in Google</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

