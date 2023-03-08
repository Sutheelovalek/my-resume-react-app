import React from 'react'
import secretary from "../image/secretary.png"
import collaborative from "../image/collaborative.png"
import professionals from "../image/professionals.png"
import conversation from "../image/conversation.png"

const Skills = () => {
  return (
    <div className='flex flex-col items-center px-24 h-[600px] w-full bg-[#E5E5E5]'>
        <h1 className='text-6xl py-10 font-medium'>Why Hire Me?</h1>
        <div className='flex flex-row  py-10'>
            <div className='flex flex-col items-center text-center'>
                <div><img src={conversation} alt="conversation" className='w-[100px] cursor-pointer hover:scale-105 duration-500' /></div>
                <h1 className='text-2xl py-4'>Communicative</h1>
                <h2 className='text-gray-500 text-xl'> "As a full-stack developer, I possess strong communication skills that enable me to effectively express my ideas, actively listen to others' perspectives, and collaborate to achieve shared objectives."</h2>
            </div>

            <div className='flex flex-col items-center text-center'>
            <div><img src={professionals} alt="professionals" className='w-[100px] cursor-pointer hover:scale-105 duration-500' /></div>
            <h1 className='text-2xl py-4'>Professional</h1>
            <h2 className='text-gray-500 text-xl'>"I take full responsibility for my actions and follow through on commitments, ensuring that projects are completed on time. Additionally, I treat everyone with respect and dignity, regardless of their position or background."</h2>    
            </div>
            
            <div className='flex flex-col items-center text-center'>
            <div><img src={collaborative} alt="collaborative" className='w-[100px] cursor-pointer hover:scale-105 duration-500' /></div>
            <h1 className='text-2xl py-4'>Collaborative</h1>
            <h2 className='text-gray-500 text-xl'> "I have the ability to cultivate a positive and supportive team culture, by encouraging collaboration and knowledge-sharing, which fosters strong relationships and trust among team members."</h2>
            </div>

            <div className='flex flex-col items-center text-center'>
            <div><img src={secretary} alt="secretary" className='w-[100px] cursor-pointer hover:scale-105 duration-500' /></div>
            <h1 className='text-2xl py-4'>Time management</h1>
            <h2 className='text-gray-500 text-xl'>"I work on complex projects that involve various components. Effective time management skills enable them to meet project deadlines and deliver high-quality products within the specified time frame."</h2>
            </div>
        </div>
    </div>
  )
}

export default Skills