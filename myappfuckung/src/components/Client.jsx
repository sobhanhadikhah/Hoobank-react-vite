import React from 'react'
import { clients } from "../constanst";
import styles from "../constanst/style"
const Client = () => {
    return (
        <section className={`${styles.flexCenter}my-4   `}  >
            <div className={`${styles.flexCenter} flex-wrap w-full  `} >
                {clients.map((logo, index) => {
                    return (
                        <div key={logo.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] `} >
                            <img src={logo.logo} alt="logo" className='sm:w-[192px] hover:bg-dimWhite
                             hover:rounded-[10px]
                              py-4 cursor-pointer
                               w-[100px] mx-10 object-contain ' />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Client;
