import React from 'react'
import ButtonRepo from '../components/ButtonRepo'
import { useNavigate } from 'react-router-dom';

const HeroSub = () => {

  const navigate = useNavigate();

  return (
    <div>
        <div className='sm:flex padding-x sm:mt-[60px] mt-[80px] items-center'>
            <div className='flex-[1.5] items-center justify-center'>
                <div className='items-center'>
                  <h1 className='font-poppins text-[20px] font-semibold text-Fblack text-center'>The best way to donate on online, most trusted!</h1>
                  <h1 className='font-poppins text-[14px] font-regular text-Fblack text-opacity-40 mt-[10px] mb-[40px] sm:text-center text-justify'>In this world Engage, Support in all the<br/>donation that helps the one needed</h1>
                  <div className='justify-center flex'>
                    <ButtonRepo txt = "Get's Started" click={() => navigate('/donate-page')} style={`bg-Fwhite hover:bg-Fblue hover:text-white text-Fblue font-poppins font-medium sm:text-[14px] text-[12.6px] h-[40px] w-[160px] sm:w-[160px] rounded-lg border-2 border-Fblue`} />
                  </div>
                </div>
            </div>
            <div className='xl:flex-[1.5] flex justify-center items-center w-full xl:h-[450px]'>
                <div className='relative xl:w-[80%] w-[90%] xl:h-[450px] sm:h-[400px] h-[300px] z-0'>
                    <img src='https://as1.ftcdn.net/v2/jpg/02/62/34/72/1000_F_262347224_xkkt1x4THvQqJr1AWM9KJuIq3JGSIe16.jpg' loading="lazy" alt='learning' fill className='object-contain relative'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSub