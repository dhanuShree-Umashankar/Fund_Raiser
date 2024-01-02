import React from 'react'
// import { Link } from "react-router-dom";
import { navlinks } from "../constants/index";
import ButtonRepo from '../components/ButtonRepo'
import { useNavigate } from 'react-router-dom';



const NavBar = () => {

  const navigate = useNavigate();

  return (
    <header className='w-full z-10 fixed font-poppins bg-Fwhite border-b border-gray-200'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <a href="/homepage">
                <p className='text-Fblack font-semibold'>Fund <span className='text-Fblue font-semibold'>Raiser</span> </p>
            </a>


            <ul className='hidden gap-12 lg:flex'>
                {navlinks.map((link)=>(
                <a href={link.href} key={link.key} className='text-Fblack cursor-pointer items-center hover:text-Fblue font-poppins text-[13px] font-semibold'>{link.label}</a>
                ))}
            </ul>


            <ButtonRepo txt='Sign out' click={() => navigate('/login')} style={`min-w-[130] w-[80px] h-[30px] text-[12px] text-Fwhite font-medium bg-Fblue rounded-lg`}/>
        </nav>
    </header>
  )
}

export default NavBar