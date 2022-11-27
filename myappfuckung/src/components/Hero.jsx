import React from 'react'
import { discount, robot } from "../assets";
import { Getstated } from "./"
import styles from "../constanst/style"
const Hero = () => (
    <>
        <section id='home' className={`flex md:flex-row flex-col ${styles.paddingX}`} >
            {/* for notific 20% offer start */}
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `} >
                <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ' >
                    <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
                    <p className={`${styles.paragraph} ml-2`} >
                        <span className='text-white' > 20% </span>
                        Discount For {" "}
                        <span className='text-white' > 1 Month </span>
                        Account
                    </p>
                </div>
                {/* for notific 20% offer End */}

                <div className='flex flex-row justify-between items-center w-full' >
                    <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]' >
                        The Next <br className='sm:block hidden' /> {" "} <span className='text-gradient' >Generation </span> <br className='sm:block hidden' />
                    </h1>
                    <div className='ss:flex hidden md:mr-4 mr-0 ' >
                        <Getstated />
                    </div>
                </div>
                <h1 className='flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full ' >
                    Payment Method
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eaque officiis iste deserunt natus cupiditate, veniam adipisci aspernatur, minus cumque, ipsa ratione ea saepe iure in? Pariatur dicta rerum atque.
                </p>
            </div>
            <div className={`flex-1 flex-row ${styles.flexCenter} md:my-0 my-10 relative `} >
                <img className='  w-[100%] h-[100%] relative  z-[5] ' src={robot} alt="robot" />
                <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
                <div className='absolute  z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
                <div className='absolute z-[0] w-[50%] h-[50%] right-20 blue__gradient' />
            </div>
            <div className={`ss:hidden ${styles.flexCenter}`} >
                <Getstated />
            </div>
        </section>
    </>
)


export default Hero;