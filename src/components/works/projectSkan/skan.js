import css from './skan.module.css'
import skanMain from '../../../img/skan-main.jpg'
import skanLogIn from '../../../img/skan-logIn.jpg'
import skanRequest from '../../../img/skan-request.jpg'
import skanResponse from '../../../img/skan-response.jpg'
import Slider from '../slider/slider'

function Skan() {

    const sliderImg = [{
        id: 0,
        img: `${skanMain}`,
        text: 'skan project'
    },{
        id: 1,
        img: `${skanLogIn}`,
        text: 'skan project'
    },{
        id: 2,
        img: `${skanRequest}`,
        text: 'skan project'
    },{
        id: 3,
        img: `${skanResponse}`,
        text: 'skan project'
    }]

    return (
        <div className={css.workSkanWrap}>
            <h1 className={css.h1}>Project Skan !</h1>
            <div className={css.workSkan}>
                <Slider sliderImg={sliderImg} />
                <div className={css.workSkanDiscription}>
                    <p className={css.workSkanDiscriptionItem}>Компания СКАН разработала новый API для поиска публикаций о компании (юридическом лице) в средствах массовой информации по его ИНН. Серверная часть приложения уже готова, стояла задача разработать клиентскую часть.</p>
                    <p className={css.workSkanDiscriptionItem}>Реализован вход в личный кабинет, сбор данных с формы поиска, отправка этих данных и вывод результатов поиска для пользователя.</p>
                    <p className={css.workSkanDiscriptionItem}>Работа с API, отправка POST и GET запросов.</p>
                    <button className={css.downloadProject}><a className={css.downloadProjectLink} href='https://github.com/Inna-Vin/skan.git' target='_blank' rel="noreferrer">GitHub</a></button>
                </div>
            </div>
        </div>
    )
}

export default Skan;