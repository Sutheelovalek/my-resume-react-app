import React from 'react'
import ImageProfile from "../image/ImageProfile.png"
import BulletLeft from "../image/BulletLeft.png"
import BulletRight from "../image/BulletRight.png"


const About = () => {
  return (
    <div name="about" className='flex flex-row items-center h-[700px] w-full bg-[#E5E5E5]'>
        <div className='flex flex-col justify-center h-full w-1/2 px-24'>
            <h2 className='text-4xl py-4'>Hi </h2>
            <h1 className='text-6xl'>I'm Suthee Lovalek.</h1>
            <h1 className='text-6xl'>a Full Stack Developer.</h1>
            <h3 className='text-xl py-10 w-[480px]'>Full stack developer based in Bangkok, Thailand.
            I am a quick learner, with a strong work ethic and a passion for web development and a strong desire to build innovative and user-friendly products. </h3>
            <div className='flex flex-row justify-start'>
                <a href="mailto:lovalek@gmail.com"><button className='group text-white w-fit px-6 py-3 my-2 rounded-md bg-gradient-to-r
                    from-rose-500 to-orange-300 cursor-pointer hover:scale-105 duration-500'>
                    Send Request  
                    </button></a>
                <a href='/MyResume.pdf' target="_blank" rel="noreferrer">
                    <button className='px-6 py-3 my-2 ml-6 rounded-md border-2 border-orange-500 text-slate-500 hover:scale-105 duration-500 '>
                    My Resume
                    </button></a>
            </div>
        </div>

        <div className='flex flex-row relative ml-28'>
            <img src={BulletLeft} alt="bullet-point-left" className='w-[200px] absolute -right-20 -top-10 z-10' />
            <img src={ImageProfile} alt="my-profile" className='h-full w-[350px] static z-20 drop-shadow-md hover:drop-shadow-xl rounded-full' />
            <img src={BulletRight} alt="bullet-point-left" className='w-[200px] absolute -left-16 -bottom-10 z-0' />
        </div>
    </div>
  )
}

export default About