import css from './bookShop.module.css'
import bookshopMain from '../../../img/bookShop-main.jpg'
import bookshopResponse from '../../../img/bookShop-response.jpg'
import bookshopResponse2 from '../../../img/bookShop-response2.jpg'
import Slider from '../slider/slider'

function BookShop() {

    const sliderImg = [{
        id: 0,
        img: `${bookshopMain}`,
        text: 'BookShop project'
    },{
        id: 1,
        img: `${bookshopResponse}`,
        text: 'BookShop project'
    },{
        id: 2,
        img: `${bookshopResponse2}`,
        text: 'BookShop project'
    }]

    return(
        <div className={css.workBookshopWrap}>
            <h1 className={css.h1}>Project BookShop !</h1>
            <div className={css.workBookshop}>
                <Slider sliderImg={sliderImg} />
                <div className={css.workBookshopDiscription}>
                    <p className={css.workBookshopDiscriptionItem}>Работа с Google Books API, данные о книгах подгружаются с сервера.</p>
                    <p className={css.workBookshopDiscriptionItem}>В рамках учебного проекта функционал книжного магазина реализован не полностью, осуществляется только вывод карточек книг с информацией о них при клике на категорию.</p>
                    <p className={css.workBookshopDiscriptionItem}>В работе использовался препроцессор SASS.</p>
                    <button className={css.downloadProject}><a className={css.downloadProjectLink} href='https://github.com/Inna-Vin/bookshop.git' target='_blank' rel="noreferrer">GitHub</a></button>
                </div>
            </div>
        </div>
    )
}

export default BookShop;