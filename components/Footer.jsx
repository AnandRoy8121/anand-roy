import React from 'react'
import {styles} from '../styles'

const Footer = () => {
  return (
    <div className={`flex items-center justify-center gap-4 py-5 ${styles.paddingX}`}>
      <img src={'anand.png'} alt='anand.png' className='w-9 h-9 object-contain bg-gray-200 rounded-full' />
        <p className='text-white text-[10px] sm:text-[18px] font-bold cursor-pointer'>
        &copy;Anand Roy
          </p>
          <p className='font-bold text-[10px] sm:text-[18px] text-Primary-Color'>{new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer