import css from './freehand.module.css'
import freehandMain from '../../../img/freehand-main.jpg'
import freehandSkrool from '../../../img/freehand-skroll.jpg'
import freehandLast from '../../../img/freehand-last.jpg'
import Slider from '../slider/slider'

function Freehand() {

    const sliderImg = [{
        id: 0,
        img: `${freehandMain}`,
        text: 'freehand project'
    },{
        id: 1,
        img: `${freehandSkrool}`,
        text: 'freehand project'
    },{
        id: 2,
        img: `${freehandLast}`,
        text: 'freehand project'
    }]

    return (
        <div className={css.workFreehandWrap}>
            <h1 className={css.h1}>Project Freehand !</h1>
            <div className={css.workFreehand}>
                <Slider sliderImg={sliderImg} />
                <div className={css.workFreehandDiscription}>
                    <p className={css.workFreehandDiscriptionItem}>Очень простенький одностраничный сайт, выполненный в качестве тренировки на начальных этапах обучения.</p>
                    <p className={css.workFreehandDiscriptionItem}>С помощью JavaScript реализован один интерктивный элемент - слайдер.</p>
                    <p className={css.workFreehandDiscriptionItem}>В данной работе использовался препроцессор SASS.</p>
                    <button className={css.downloadProject}><a className={css.downloadProjectLink} href='https://github.com/Inna-Vin/landingPage.git' target='_blank' rel="noreferrer">GitHub</a></button>
                </div>
            </div>
        </div>
    )
}

export default Freehand;