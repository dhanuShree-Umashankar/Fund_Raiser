import React from 'react'
import { Link } from 'react-router-dom';

const DonateRepo = ({src, title, category, contact, description, navigate }) => {



  return (
    <Link to={navigate} className='sm:w-[292px] sm:max-w-[292px] w-full flex-1 flex flex-col gap-4 rounded-md font-poppins'>

      <div className='flex-1 relative flex flex-col gap-5 p-4 rounded-md'>
      <img
       src={src}
       alt='donate'
       height={200}
       width={200}
       className='max-h-[250px] object-contain w-full h-full bg-transparent'>
      </img>
      </div>

      <div className='flex flex-col gap-3'>
        <h3 className='text-Fblack text-base leading-6 font-semibold truncate'>{title}</h3>
        <p className='text-[12px] text-justify font-normal text-Fblack text-opacity-40'>{description}</p>
        <div className='flex justify-between items-center'>
          <p className='text-Fwhite text-xs capitalize bg-Fblue rounded-md p-1'>
            {category}
          </p>

          <p className='text-Fblack text-[12px] font-semibold'>
            <span>💸</span>
            <span>{contact}</span>
          </p>
        </div>
      </div>

   </Link>
  )
}

export default DonateRepo