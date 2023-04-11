import React from 'react'
import styles from './passwordEncryptionUtilityDescription.module.css';
// import styles from './styles.css'
import classNames from 'classnames';
// import cards from './data';

export default () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className={`col-md-8 border mb-3 ${styles.main_area}`}>
                    <h2 className='text-start px-3 pt-3 pb-2'>About Password Encryption Utility</h2>
                    <p className='px-3 pb-3 text-start'>Save your Websites from Hackers with this FREE Online Password Encryption Utility tool!</p>
                    <p className='px-3 py-2 text-start'>The Small SEO Tools bring you this free online Password Encryption Utility tool to help you in protecting your website from hackers. We know that having a password alone doesn’t guarantee security, but creating a strong password and encrypting it will help you in making your website secure.</p>
                    <p className='px-3 py-2 text-start'>At present, it is a must for modern web applications to encrypt their users’ passwords to save them from hackers that may steal all the information including sensitive personal data from their account. Website owners always want to attract more users that is the reason why we treat their passwords as are their key to their privacy, and all website owners must acknowledge and respect that to be able to gain their trust.</p>
                    <p className='px-3 py-2 text-start'>We at Small SEO Tools provide you with free online tools that can help you save your website from hackers. These are the Password Encryption Utility and Password Strength Checker. You only need to create a strong password by checking it through our Password Strength Checker and then encrypt it using our Password Encryption Tool.</p>
                    <h3 className='text-start px-3 pt-3 pb-2'>How does Password Encryption Utility tool work?</h3>
                    <p className='px-3 pb-3 text-start'>In the past, protecting a website from hackers requires a great deal of hard work to make sure that all of the users’ information is secured and won’t be compromised. But still, there are times when hackers can find a way to gather important information about its users. This is the reason why we have developed this special password encryption tool; we want to help website owners to make sure that all precious data on their websites are secured.</p>
                    <p className='px-3 pb-3 text-start'>Our Password Encryption Utility tool uses three methods also known as encryption ciphers – the standard DES, MD5, and SHA-1. The standard uses a Unix DES-based encryption type of algorithm; while MD5 uses the hash string that contains a 32 character hexadecimal number; and SHA-1 uses the US Secure Hash Algorithm 1. Both the MD5 and SHA-1 will be adequate methods for password digesting, but there are situations that applying these algorithms will not be enough.</p>
                    <h3 className='text-start px-3 pt-3 pb-2'>Can someone access my Password?</h3>
                    <p className=' text-justify px-3 pb-3 text-start'>Nobody except the user has the right to know his or her password, not even if you are a webmaster or the website owner. In case, the user forgot his or her password, he or she should request for a password reset and then provide a new temporary password through email, with a message asking to change it as soon as possible for security purposes.</p>
                    <h3 className='text-start px-3 pt-3 pb-2'>The Algorithm and Rules in Password Encryption</h3>
                    <p className='px-3 py-2 text-start'>There are certain rules that must be followed when a program is used for password encryption. First is the algorithm that encrypts passwords using a one-way process or digest; this technique does not allow the user to decrypt a password.</p>
                    <p className='px-3 py-2 text-start'>The second rule is to match input and saved passwords by comparing digests, not unencrypted strings. An example of this is – when a user entered his or her password at sign in, the system will digest their input with the same algorithm as what has been used when the user created that password. Then, the program will compare and check if they are a match, if so then the password used can be considered as valid.</p>
                    <p className='px-3 py-2 text-start'>All the digest algorithms mentioned are well-known and widely used algorithms, so to further help the website owners in securing their account there are two concepts that are commonly used, and these are the salt and the iteration count. The salt is an arrangement of bytes that is being added to the user’s password before being digested. This way it makes our digests different to what they would be if we encrypted the password alone, and as a result, it can protect us from unwanted attacks. With salt, we can implement two different strategies, these are:</p>
                    <ol className='py-2'>
                        <li className='px-3 py-2 text-start'>Fixed-Salt – a sequence of bytes that we normally use for digesting every password. There is an option to keep this salt hidden and consider it as an added protection, but it can also make our system more prone to birthday attacks and other attacks that focus on our database of passwords in general. In a fixed-salt setup, having a weak user could often lead to a weak overall password system.</li>
                        <li className='px-3 py-2 text-start'>Variable salt – this concept is considered as a safer option because you can have it in random order. This is produced or calculated separately for every password being digested, and it allows each of the saved passwords to be decoupled from the others, to build a stronger protection and highly secured passwords.</li>
                    </ol>
                    <p className='px-3 py-2 text-start'>In most cases, a random or variable salt is the preferred concept because it will be a lot difficult for the attacker to know it. The only downside is that it will force us to save it unencrypted together with the digest so we can recover it if needed.</p>
                    <p className='px-3 py-2 text-start'>However, if you still want to have some parts of the salt secret, a better approach would be a mix of both techniques (fixed-salt and variable salt). This means you have salt that is composed of both a fixed secret portion as well as a random one; taking into consideration that only the random bytes are being saved undigested along with the result of the digest.</p>
                    <p className='px-3 py-2 text-start'>The third rule is that we must follow the lowest recommended size of salt is 8 bytes. So, if a mixed technique is used, make sure that at least 8 of its bytes should be random.</p>
                    <p className='px-3 py-2 text-start mb-2'>The iteration count pertains to the number of times that the hash function at which we are digesting is also applied to its own output. To be able to get maximum security, the minimum recommended number of iterations is 1,000.</p>

                </div>
            </div>
        </div>
    )
}

