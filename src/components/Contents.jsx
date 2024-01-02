import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Contents = () => {
  return (
    <div>
        <h1 className='font-poppins 2xl:text-[26px] sm:text-[23px] text-[23px] text-Fblack font-semibold text-center mt-[60px]'>Donate seamlessly on our online platform</h1>
        <div className='sm:flex items-center mt-[60px]'>
              <div className='xl:flex-[1.5] flex justify-center items-center w-full xl:h-[450px]'>
                <div className='relative xl:w-[80%] w-[90%] xl:h-[450px] sm:h-[400px] h-[300px] z-0'>
                    <img src='https://img.graphicsurf.com/2020/11/donation-money-vector-flat-illustration.jpg' loading="lazy" alt='content' fill className='object-contain relative'/>
                </div>
              </div>
          <div  className='flex-[1.5] items-center'>
          <Timeline className=''  sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}>
        <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color='success' />
          <TimelineConnector className='bg-Mblue bg-opacity-5' />
        </TimelineSeparator>
        <TimelineContent>
                <div>
                  <h1 className='font-poppins sm:text-[20px] text-[18px] font-medium text-Fblack pl-[15px]'>🖋️ Donate to the who needs</h1>
                 <div className='justify-start items-start flex sm:bg-Mblue sm:bg-opacity-[4.2%]'>
                    <h1 className='font-poppins text-[14px] font-regular text-justify sm:text-start text-Fblack text-opacity-40 mt-[10px] mb-[40px] sm:w-[550px] pl-[15px]'>We create the understanding engagement and comprehension for every person. Make them capable of finanical strength, Thus makes it easier for person to make his/her needs!</h1>
                 </div>
               </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color='success' />
          <TimelineConnector className='bg-Mblue bg-opacity-5' />
        </TimelineSeparator>
        <TimelineContent>
                <div>
                  <h1 className='font-poppins sm:text-[20px] text-[18px] font-medium text-Fblack pr-[15px]'>📌 Online Group Donation</h1>
                  <div className='justify-start items-start flex sm:bg-Mblue sm:bg-opacity-[4.2%]'>
                    <h1 className='font-poppins text-[14px] font-regular text-justify sm:text-start text-Fblack text-opacity-40 mt-[10px] mb-[40px] sm:w-[550px] pl-[15px]'>Group donation work are most important for donation which provide and ensure to delivery the things to individuals, Hence the bridge gap between individual and donator becomes less.</h1>
                  </div>
                </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color='success' />
        </TimelineSeparator>
        <TimelineContent>
                <div>
                  <h1 className='font-poppins sm:text-[20px] text-[18px] font-medium text-Fblack pl-[15px]'>📢 Donation Outcomes</h1>
                 <div className='items-start justify-start flex sm:bg-Mblue sm:bg-opacity-[4.2%]'>
                     <h1 className='font-poppins text-[14px] font-regular text-justify sm:text-start text-Fblack text-opacity-40 mt-[10px] mb-[40px] sm:w-[550px] pl-[15px]'>Donating outcomes are prioratised which they are useful to identify problem areas that needs help and also focuses on them to provide and push towards hope for the individuals</h1>
                 </div>
                </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
          </div>
        </div>
    </div>
  )
}

export default Contents