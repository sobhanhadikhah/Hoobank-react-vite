import React from 'react'
import styles from '../constanst/style';
import Button from "./Button"
const CTA = () =>
(
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow  `} >
    <div className='flex-1 flex flex-col  ' >
      <h2 className={styles.heading2} >
        Lets try Our servise now !!!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui dignissimos odio beatae, ducimus enim voluptas? </p>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `} >
        <Button styles={`rounded-full mt-10 `} text={`Get stated`} />
      </div>
    </div>
  </section>
)


export default CTA