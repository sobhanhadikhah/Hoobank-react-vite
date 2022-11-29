import React from 'react'
import { apple, google, bill } from "../assets";
import styles, { layout } from "../constanst/style"
const Billing = () =>
(
    <section id='product' className={layout.sectionReverse} >
        <div className={layout.sectionImgReverse} >

            <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5] ' />
            <div className='absolute z-[3] rounded-full -left-1/2 top-0 w-[50%] h-[50%] white__gradient  ' />
            <div className='absolute z-[3] rounded-full -left-1/2 bottom-0 w-[50%] h-[50%] pink__gradient  ' />
            <div />
        </div>
        <div className={layout.sectionInfo} >
            <h2 className={styles.heading2} >
                Lorem ipsum dolor sit <br className='sm:block hidden' />  Necessitatibus .
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 `} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate minus quidem deleniti eos dolore tempore, numquam exercitationem saepe. Est?
            </p>
            <div className={`flex flex-row flex-wrap sm:mt-10 mt-6 `} >
                <img src={apple} alt="apple" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer  ' />
                <img src={google} alt="google" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer ' />
            </div>
        </div>

    </section>
)


export default Billing