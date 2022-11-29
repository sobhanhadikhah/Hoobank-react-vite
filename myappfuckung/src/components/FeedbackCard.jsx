import React from 'react'
import { quotes } from '../assets'
const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className='flex justify-between flex-col sm:flex-row px-10 py-12 max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card rounded-[20px] ' >
      <img src={quotes} alt="quotes" className='w-[42px] h-[27px] object-contain ' />
      <p>
        {content}
      </p>
    </div>
  )
}

export default FeedbackCard