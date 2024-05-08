import css from './design.module.css'
import designMain from '../../../img/design-main.jpg'
import designSkroll from '../../../img/design-skroll.jpg'
import designLast from '../../../img/design-last.jpg'
import Slider from '../slider/slider'

function Design() {

    const sliderImg = [{
        id: 0,
        img: `${designMain}`,
        text: 'design project'
    },{
        id: 1,
        img: `${designSkroll}`,
        text: 'design project'
    },{
        id: 2,
        img: `${designLast}`,
        text: 'design project'
    }]


    return(
        <div className={css.workDesignWrap}>
            <h1 className={css.h1}>Repair design project !</h1>
            <div className={css.workDesign}>
                <div className={css.workDesignDiscription}>
                    <p className={css.workDesignDiscriptionItem}>Одностраничный лендинг дизайнерского агентства.</p>
                    <p className={css.workDesignDiscriptionItem}>Реализована декстопная и мобильная версии сайта.</p>
                    <p className={css.workDesignDiscriptionItem}>Из интерактивных элеметов добавлен слайдер с фото дизайнов помещений (в мобильной версии добавляется еще один).</p>
                    <button className={css.downloadProject}><a className={css.downloadProjectLink} href='https://github.com/Inna-Vin/fluffy-palm-tree.git' target='_blank' rel="noreferrer">GitHub</a></button>
                </div>
                <Slider sliderImg={sliderImg} />
            </div>
        </div>
    )
}

export default Design;