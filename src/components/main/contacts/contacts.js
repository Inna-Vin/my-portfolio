import css from './contacts.module.css'
import email from '../../../img/mailGrey.png'
import gitHub from '../../../img/gitHubGrey.png'
import telegram from '../../../img/telegram.png'

function Contacts() {
    return (
        <div className={css.contactsBackground}>
            <div className={css.contactsWrap}>
                <h1 className={css.h1}>Contacts !</h1>
                <div className={css.textWrap}><p className={css.contactsText}>Давайте вместе создавать интересные проеткы. Напишите мне по электронной почте, или свяжитесь со мной через социальные сети. </p></div>
                <div className={css.contscts}>
                    <div className={css.contactItem}><a className={css.contactsItemLink} href='mailto:zfp.je23@gmail.com' target='_blank' rel="noreferrer"><img className={css.imgLogo} src={email} alt='email'/> </a></div>
                    <div className={css.contactItem}><a className={css.contactsItemLink} href='https://github.com/Inna-Vin' target='_blank' rel="noreferrer"><img className={css.imgLogo} src={gitHub} alt='github'/> </a></div>
                    <div className={css.contactItem}><a className={css.contactsItemLink} href='https://t.me/VonKv' target='_blank' rel="noreferrer"><img className={css.imgLogo} src={telegram} alt='telegram'/> </a></div>
                </div>
            </div>
        </div>
        
    )
}

export default Contacts;