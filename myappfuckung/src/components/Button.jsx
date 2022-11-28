import React, { useState } from 'react'
import 'animate.css';

const Button = ({ styles, text, hover }) => {
  const [toggle, setToggle] = useState(`animate__animated animate__shakeX`)
  const handleclick = () => {
    setToggle(toggle === `animate__animated animate__shakeX` ? `` : `animate__animated animate__shakeX`)
  }
  return (
    <>
      <button onClick={handleclick} type='button'
        className={`py-4 px-6 bg-blue-gradient font-poppins
        font-medium text-[18px]
         text-primary
          outline-none  ${styles}   animate-bounce `} >
        {text}
      </button>
    </>
  )
}

export default Button