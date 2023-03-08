import React from 'react'


const Contact = () => {
  return (
    <div name='contact' className='w-full h-1/2 bg-[#E5E5E5] p-4 text-black'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-6xl font-medium inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
        </div>

        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/c1c055da-dd7a-45ad-bb98-9cf01176be77" 
                method='POST'
                className='flex flex-col w-full md:w-1/2'>
                <input 
                type="text" 
                name='name' 
                placeholder='Enter your name' 
                className='p-6 bg-transparent border-2 rounded-md text-black focus:outline-none border-gray-500' 
                />
                <input 
                type="text" 
                name='email' 
                placeholder='Enter your email' 
                className='p-6 my-4 bg-transparent border-2 rounded-md text-black focus:outline-none border-gray-500' 
                />
                <textarea name="message" rows="10" className='p-2
                bg-transparent border-2 rounded-md text-black focus:outline-none
                border-gray-500'></textarea>

                <button className='flex items-center text-white bg-gradient-to-r
                    from-rose-500 to-orange-300 px-6 py-3 my-8 mx-auto  rounded-md hover:scale-110 duration-300'>
                    Let's talk
                </button>
            </form>
        </div>

    </div>
  )
}

export default Contact