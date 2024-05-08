import css from './header.module.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={css.header}>
            <div className={css.headerWrap}>
                <div className={css.headerLogo}>
                    <Link to={'/'} className={css.backToMain}>&#8249; Inna Vinogradova &#47;&#8250;</Link>
                </div>
                <div className={css.headerNav}>
                    <Link to={'/about'} className={css.headerNavLink} href='/'>Обо мне</Link>
                    <Link to={'/works'} className={css.headerNavLink} href='/'>Работы</Link>
                    <Link to={'/contacts'} className={css.headerNavLink} href='/'>Контакты</Link>
                </div>
                <div className={css.headerTextWrap}>
                    <p className={css.headerText}>DIGITAL PORTFOLIO</p>
                </div>
            </div>
        </header>
    )
}

export default Header