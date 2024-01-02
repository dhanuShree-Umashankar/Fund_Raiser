import React from 'react'
import {footerLinks} from '../constants/index'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-[100px] border-t border-gray-200 bg-Fwhite'>
        <div className='flex mx-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className='flex flex-col justify-start items-start gap-6'>
                <p className='text-Fblue font-semibold text-[18px] font-poppins'>Fund Raiser</p>
                <p className='text-base text-Fblack font-poppins '>Fund Raiser,<br/>All Rights Reserved &copy;</p>
            </div>
            <div className='flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20'>
                {footerLinks.map((link)=>(
                    <div key={link.title} className='flex flex-col gap-6 text-base min-w-[170px] font-poppins'>
                        <h3 className='font-semibold text-[15px] text-Fblack'>{link.title}</h3>
                        {link.links.map((item) => (
                            <a key={item.title} href={item.url} className='text-Fblack text-opacity-40 hover:text-opacity-100 text-[13px] font-medium'>{item.title}</a>
                        ))}
                    </div>
                ))}
            </div>
            </div>
            <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-200 sm:px-16 px-6 py-10 font-poppins'>
                <p className='font-poppins text-Fblack text-[11px] text-opacity-60'>@2023 Fund Raiser. All Rights Reserved</p>
                <div className='flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10'>
                    <a className='text-Fblack text-[11px] text-opacity-60' href='/'>Privacy Policy</a>
                    <a className='text-Fblack text-[11px] text-opacity-60' href='/'>Terms and Conditions</a>
                </div>
            </div>
    </footer>
  )
}

export default Footer