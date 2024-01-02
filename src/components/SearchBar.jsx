import React from 'react'

const SearchBar = ({placeholder, style, type, submit, value, onChange}) => {
  return (
    <form className='mt-[20px]'>
        <input   type={type} placeholder={placeholder} value={value} onChange={onChange} required className={`${style} text-[12px] font-light text-Fblack h-[40px] pl-[10px] pr-[10px] border-2 border-gray-200 rounded-lg focus:border-Fblue focus:outline-none`} />
    </form>
  )
}

export default SearchBar