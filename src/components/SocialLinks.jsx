import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinedIn <FaLinkedin size={30}/>
            </>
            ),
            href: 'https://www.linkedin.com/in/suthee-lovalek-91b9921ab',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30}/>
            </>
            ),
            href: 'https://github.com/Sutheelovalek',
        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={30}/>
            </>
            ),
            href: 'mailto:lovalek@gmail.com',
     
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30}/>
            </>
            ),
            href: '/MyResume.pdf',
            style: 'rounded-tr-md',
            download:true,
        },
    ];
    return (
        <div className="flex flex-col top-[20%] left-0 fixed">
          <ul>
            {links.map((link) => (
              <li
                key={link.id}
                className={
                  'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-rose-400 to-red-500' +
                  ' ' +
                  link.style
                }
              >
                <a
                  href={link.href}
                  className="flex justify-between items-center w-full
                   text-white"
                   target="_blank"
                   rel="noreferrer"
                >
                  {link.child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default SocialLinks;