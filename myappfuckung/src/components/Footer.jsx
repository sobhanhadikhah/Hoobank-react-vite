import React from 'react'
import styles from "../constanst/style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constanst"
const Footer = () =>
(
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}   >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full `} >
      <div className='flex-1 flex flex-col justify-start mr-10 ' >
        <img src={logo} alt="logo" className='w-[266px] h-[72px]  object-contain ' />
        <p className={`${styles.paragraph} mt-4 max-w-[370px] `} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dignissimos modi magnam magni.
        </p>
      </div>
      <div className={`flex-[1.5]  w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10  `} >
        {footerLinks.map((fotterh, index) => (
          <div key={fotterh.key} className={`flex flex-col ss:my-0 my-0 min-w-[150px]`} >
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white  ' >
              {fotterh.title}
            </h4>
            <ul className='list-none mt-4' >
              {fotterh.links.map((link, index) => (
                <li key={link.name} className={`font-poppins ${index !== fotterh.links.length - 1 ? 'mb-4' : `mb-0`} cursor-pointer font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary `} >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className='flex flex-col pt-6 border-t-[1px] border-t-[#3f3r45] justify-between items-center w-full md:row ' >
      <p className='font-poppins font-medium tetx-[18px] leading-[23px] text-center text-white  ' >
        coppy right bla bla bla
      </p>
      <div className='flex flex-row md:mt-0 mt-6 ' >
        {socialMedia.map((soc, index) => (
          <>
            <img key={soc.id} className={`w-[21px] cursor-pointer ${index !== soc.length - 1 ? "mr-6" : `mr-0`} h-[21px] object-contain `} src={soc.icon} alt="icon" />
          </>
        ))}
      </div>
    </div>
  </section>
)


export default Footer 