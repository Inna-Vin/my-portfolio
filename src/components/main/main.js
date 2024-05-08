// import css from './main.module.css'
import MainPage from './mainPage/mainPage';
import About from '../about/about';
import Works from '../works/works';
import Contacts from './contacts/contacts';
import { Routes, Route } from 'react-router-dom';

function Main() {
    return (
        <Routes>
            <Route exact  path='/' element={<MainPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/works' element={<Works />} />
            <Route path='/contacts' element={<Contacts />} />
        </Routes>
    )
}

export default Main;