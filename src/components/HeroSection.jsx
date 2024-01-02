import React from 'react'
import ButtonRepo from '../components/ButtonRepo'
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {

   const navigate = useNavigate();

  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0  mx-auto bg-Mwhite items-center overflow-hidden'>
        <div className='flex-1 pt-36 padding-x items-center mb-[40px] justify-center'>
            <h1 className='text-Fblack 2xl:text-[64px] sm:text-[64px] text-[33px] font-regular font-poppins text-center'>Spark Hope, Ignite Change</h1>
            <h1 className='text-Fblue 2xl:text-[64px] sm:text-[64px] text-[33px] font-regular font-poppins text-center'>Donate Today!</h1>
            <div className='sm:w-[530px] justify-center items-center flex flex-col mx-auto'>
                <p className='text-[13px] sm:text-[16px] text-Fblack font-light mt-5 font-poppins text-center'>We create the understanding engagement and comprehension for every person. To push thier value in earth</p>
            </div>
           <div className='items-center justify-center flex mt-8 gap-2'>
              <ButtonRepo txt = "Start Donate" click={() => navigate('/donate-page')} style={`bg-Fblue bg-opacity-[90%] hover:bg-Fblue text-Fwhite font-poppins font-medium sm:text-[14px] text-[12.6px] h-[40px] w-[160px] sm:w-[160px] rounded-lg border-2 border-Fblue border-opacity-[30%]`} />
              <ButtonRepo txt = "📞 Contact us" click={() => navigate('/donate-page')} style={`bg-Fblack bg-opacity-[5%] hover:bg-Fblack hover:bg-opacity-[10%] text-Fblack font-poppins font-medium sm:text-[14px] text-[12.6px] h-[40px] w-[160px] sm:w-[160px] rounded-lg border-2 border-Fblack border-opacity-[5%]`} />
           </div>
           <div className='mt-10 flex flex-col items-center flex-1 justify-center text-center'>
              <h1 className='text-[12px] font-poppins font-semibold text-Mblue mb-[20px]'>We are trusted and seamlessly working with</h1>
              <div className='flex w-[180px] items-center justify-center text-center sm:mb-[50px] mb-[20px] gap-4'>
                  <div className='relative xl:w-full w-[90%] xl:h-[50px] sm:h-[60px] h-[40px] z-0'>
                     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-DoWLkYqxddrjBbNvQyR3SLtK5r4nqWbcOInhutsCQ&s' alt='learning' fill className='object-contain relative'/>
                  </div>
                  <div className='relative xl:w-full w-[90%] xl:h-[50px] sm:h-[60px] h-[40px] z-0'>
                     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-DoWLkYqxddrjBbNvQyR3SLtK5r4nqWbcOInhutsCQ&s' alt='learning' fill className='object-contain relative'/>
                  </div>
                  <div className='relative xl:w-full w-[90%] xl:h-[50px] sm:h-[60px] h-[40px] z-0'>
                     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-DoWLkYqxddrjBbNvQyR3SLtK5r4nqWbcOInhutsCQ&s' alt='learning' fill className='object-contain relative'/>
                  </div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default HeroSection