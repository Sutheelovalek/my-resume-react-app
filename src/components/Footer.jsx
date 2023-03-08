import React from 'react'
import square from "../image/square.png"
import igMini from "../image/igMini.png"
import emailMini from "../image/emailMini.png"

const Footer = () => {
  return (
    <div className='flex flex-row justify-between items-center w-full h-40 px-20
                    bg-[#F1F1F1]'>
        <div className='flex flex-row px-4 space-x-3'>
        <a href="mailto:lovalek@gmail.com"><img src={square} alt="email-box" /></a>
            <h1>lovalek@gmail.com</h1>
        </div>
        <div>
            <p>&copy; copyright 2023 | lovalek</p>
        </div>
        <div className='flex flex-row space-x-3 px-20'>
            <a href="https://www.instagram.com/mrf0o/"><img src={igMini} alt="ig-logo" className='cursor-pointer hover:scale-105 duration-500'/></a>
            <a href="mailto:lovalek@gmail.com"><img src={emailMini} alt="email-logo" className='cursor-pointer hover:scale-105 duration-500'/></a>
        </div>
    </div>
  )
}

export default Footer