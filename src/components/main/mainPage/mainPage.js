import css from './mainPage.module.css'
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <main className={css.main}>
            <div className={css.mainWrap}>
                <div className={css.left}>
                    <h1 className={css.h1}>hello !</h1>
                    <h3 className={css.h3}>Начинающий Frontend <br />разработчик</h3>
                    <p className={css.text}>Открыта всему новому в мире програмирования</p>
                    <Link to={'/works'}> <button className={css.button}>смотреть работы</button> </Link>
                </div>    
            </div>    
        </main>
    )
}

export default MainPage;