import React, { useState } from 'react'
import { logo, menu, close } from "../assets";
import { navLinks } from "../constanst/constance";
import { NavLink, Link } from 'react-router-dom';
export const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar' >
            <img src={logo} alt="logo" className='w-[124px] h-[32px]' />
            <ul className='list-none sm:flex hidden justify-end item-center flex-1 ' >
                {navLinks.map((na, index) => {
                    return (
                        <>
                            <li key={index}
                                className={`font-poppins ${index === navLinks.length - 1 ? `mr-0` : `mr-10`} cursor-pointer text-white font-normal text-[16px]`}
                            ><a className='hover:text-secondary  transition  ease-out duration-300' key={na.id} to={na.id} >{na.title}</a>  </li>
                        </>
                    )
                })}
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center  ' >
                <img src={toggle ? close : menu} onClick={() => setToggle((prev) => !prev)}
                    alt="logo" className='w-[28px] h-[28px] object-contain' />
                <div className={`${toggle ? 'flex' : `hidden `} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`} >
                    <ul className='list-none flex-col  justify-end item-center flex-1  ' >
                        {navLinks.map((na, index) => {
                            return (
                                <>
                                    <li key={index}
                                        className={`font-poppins ${index === navLinks.length - 1 ? `mr-0` : `mb-4`} cursor-pointer text-white font-normal text-[16px]`}
                                    ><a key={na.id} to={na.id} >{na.title}</a>  </li>
                                </>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </nav>
    )
}
export default Navbar