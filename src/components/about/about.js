import css from './about.module.css'
import aboutImg from '../../img/about.jpg'

function About() {
    return (
        <div className={css.aboutWrap}>
            <div className={css.imgWrap}>
                <img className={css.img} src={aboutImg} alt='avatar_img' />
            </div>
            <div className={css.aboutText}>
                <h1 className={css.h1}>Hi There !</h1>
                <p className={css.aboutTextItem}>Начинающий специалист в данной сфере</p>
                <p className={css.aboutTextItem}>Окончила курсы по frontend разработке в IT-школе <a className={css.aboutLink} href='https://skillfactory.ru/' target='_blank' rel="noreferrer">SkillFactory </a></p>
                <p className={css.aboutTextItem}>Опыт в разработке имею только учебный, но всегда готова восполнить пробелы в знаниях</p>
                <p className={css.aboutTextItem}>Все учебные проекты есть в данном портофлио</p>
                <div className={css.skills}>
                    <div className={css.skillsItem}>HTML</div>
                    <div className={css.skillsItem}>CSS</div>
                    <div className={css.skillsItem}>SСSS</div>
                    <div className={css.skillsItem}>Java Script</div>
                    <div className={css.skillsItem}>React</div>
                    <div className={css.skillsItem}>Redux</div>
                    <div className={css.skillsItem}>GitHub</div>
                    <div className={css.skillsItem}>Figma</div>
                </div>
            </div>
        </div>
    )
}

export default About;