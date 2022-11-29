import React from 'react'
import { card } from '../assets';
import { feedback } from '../constanst';
import styles, { layout } from "../constanst/style";
import FeedbackCard from "./FeedbackCard"
const Testimontns = () => (
    <section id='clinet' className={`${styles.padding} ${styles.flexCenter} flex-col relative `} >
        {/* TO DO FOR GRADIENT */}
        <div />
        <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] '  >
            <h1 className={styles.heading2} >
                Lorem ipsum dolor sit, <br className='sm:block hidden' />  Eveniet, expedita!
            </h1>
            <div className='w-full md:mt-0 md-6 ' >
                <p className={`${styles.paragraph} max-w-[450px] text-left `} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit placeat tempora harum optio aut soluta voluptas aspernatur tenetur accusantium.
                </p>
            </div>
        </div>
        <div className='flex flex-wrap sm:justify-start w-full feedback-container z-[1] justify-center ' >
            {feedback.map((cardinfo, index) => {
                return (
                    <>
                        <FeedbackCard key={cardinfo.id} {...cardinfo} />
                    </>
                )
            })}
        </div>
    </section>
)
export default Testimontns;
