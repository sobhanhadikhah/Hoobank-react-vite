import React from 'react'
import { card } from '../assets';
import styles, { layout } from '../constanst/style';
import Button from "./Button"
const CardDeal = () => {
    return (
        <section className={layout.section} >
            <div className={layout.sectionInfo} >
                <h2 className={`${styles.heading2}`} >
                    Lorem ipsum dolor sit amet <br className='sm:block hidden' /> consectetur adipisicing elit.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5 `} >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae atque esse veritatis temporibus? Cum laboriosam vero cupiditate a velit maiores facilis perspiciatis veniam. Nemo rem perspiciatis blanditiis minus voluptates?
                </p>
                <Button styles={`mt-10 rounded-[10px] `} text={`get started`} />
            </div>
            <div className={layout.sectionImg} >
                <img src={card} alt="card" className='w-[100%] h-[100%]' />
            </div>
        </section>
    )
}

export default CardDeal