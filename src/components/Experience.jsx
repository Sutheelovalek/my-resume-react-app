import React from 'react'
import html from "../image/html.png"
import css from "../image/css.png"
import javascript from "../image/javascript.png"
import react from "../image/react.png"
import github from "../image/github.png"
import tailwind from "../image/tailwind.png"


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: react,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400'
    },
    {
      id: 6,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-orange-500'
    },
  ]
  return (
    <div className='flex flex-col px-24 h-[600px] w-full bg-[#E5E5E5]'>
        <div className='w-full'>
            <h1 className='text-6xl font-medium border-b-4 p-2 inline'>Experience</h1>
            <h1 className='py-6 text-2xl'>These are the technologies I've worked with</h1>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {
              techs.map(({id, src, title, style}) => (
                <div 
                key={id}
                className={`shadow-md hover:scale-105 duration-500 cursor-pointer
                py-2 rounded-lg ${style}`}>
                  
                  <img src={src} alt="application-logo" className='w-20 mx-auto'/>
                  <p className='mt-4'>{title}</p>
                </div>
              ))
            }
        </div>

    </div>
  )
}

export default Experience