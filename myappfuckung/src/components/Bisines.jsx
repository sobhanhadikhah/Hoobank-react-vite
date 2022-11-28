import React from 'react'
import { features } from "../constanst"
import styles, { layout } from '../constanst/style';
import Button from './Button';
const FeaturesCard = ({ icon, id, title, content, index }) => (
    <div className={`flex flex-row feature-card p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : `mb-0`} `} >
        <div className={`w-[68px] h-[68px] rounded-full ${styles.flexCenter} bg-dimBlue`} >
            <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain   ' />
        </div>
        <div className={`flex-1 flex flex-col ml-3`} >
            <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1 ' >
                {title}
            </h4>
            <p className={` text-dimWhite font-poppins font-normal  text-[16px] leading-[24px] mb-1 `} >
                {content}
            </p>
        </div>
    </div>
)
const Bisines = () => {

    return (
        <section id='features' className={layout.section}  >
            <div className={`${layout.sectionInfo}   `} >
                <h2 className={styles.heading2} >
                    You do the Bussims <br className='sm:block hidden' /> well handle the money
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero et culpa dolor illum delectus, veniam minima asperiores iure quibusdam!
                </p>
                <Button styles="mt-10 rounded-xl" text={`Get started`} hover={`hover:bg-sky-300`} />

            </div>
            <div className={`${layout.sectionImg} flex-col   `} >
                {features.map((infome, index) => {
                    return (
                        <FeaturesCard key={infome.id} {...infome} index={index} />

                    )
                })}
            </div>
        </section>
    )
}

export default Bisines