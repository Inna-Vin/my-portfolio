import css from './slider.module.css'
import clsx from 'clsx';
import { useState, useEffect } from 'react';


function Slider(props) {

    const {sliderImg} = props

    const [curNum, setCurNum] = useState(0)
    useEffect(() => {
        const lastIndex = sliderImg.length - 1
        if (curNum < 0) {
            setCurNum(lastIndex)
        }
        if (curNum > lastIndex) {
            setCurNum(0)
        }
    }, [sliderImg.length, curNum])

    return(
        <div className={css.slider}>
            <button className={css.arrowsLeft} onClick={() => setCurNum(curNum - 1)}>&#8249;</button>
            {sliderImg.map((item, index) => {
                return (
                    <div className={clsx(css.sliderItem, {[css.active] : index === curNum})} key={item.id}>
                        <img className={css.sliderImg} src={item.img} alt={item.text} />
                    </div>
                )
            })}
            <button className={css.arrowsRight} onClick={() => setCurNum(curNum + 1)}>&#8250;</button>
        </div>
    )
}

export default Slider;