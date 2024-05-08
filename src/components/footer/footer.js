import css from './footer.module.css'

function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.footerWrap}>
                <p className={css.footerText}>Made by &#123; Inna Vinogradova &#125;</p>
            </div>
        </footer>
    )
}

export default Footer;