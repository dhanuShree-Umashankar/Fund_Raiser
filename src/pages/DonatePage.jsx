import React from 'react'
import NavBar from '../components/NavBar'
import DonateRepo from '../components/DonateRepo'
import { useNavigate } from 'react-router-dom';

const DonatePage = () => {

  const navigate = useNavigate();

  return (
    <>
      <NavBar/>
      <div className='flex flex-wrap gap-x-12 gap-y-16 sm:px-16 px-6 pt-[100px] justify-center'>
        <DonateRepo src={'https://static.vecteezy.com/system/resources/thumbnails/006/916/149/small/people-are-putting-money-in-the-donation-box-free-vector.jpg'} title={'Educate and Empower'} description={'Make the future generation to acknowledge the talent by donating few!'} category={'Education'} contact={'Contact Now'} navigate={navigate('/donation-page')}/>
        <DonateRepo src={'https://img.freepik.com/free-vector/tiny-people-standing-near-box-donation-food-delivery-volunteers-giving-healthy-grocery-goods-charity-flat-vector-illustration-social-support-humanitarian-help-community-sharing-concept_74855-21023.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=ais'} title={'Let things do!'} description={'Make the future generation to acknowledge the talent by donating few!'} category={'Grocery'} contact={'Contact Now'} navigate={navigate('/donation-page')}/>
        <DonateRepo src={'https://static.vecteezy.com/system/resources/thumbnails/001/594/447/small_2x/donation-by-online-payments-free-vector.jpg'} title={'Educate and Empower'} description={'Make the future generation to acknowledge the talent by donating few!'} category={'Money'} contact={'Contact Now'} navigate={navigate('/donation-page')}/>
        <DonateRepo src={'https://static.vecteezy.com/system/resources/previews/006/902/005/non_2x/illustration-for-charity-welfare-assistance-concept-free-vector.jpg'} title={'Educate and Empower'} description={'Make the future generation to acknowledge the talent by donating few!'} category={'Property'} contact={'Contact Now'} navigate={navigate('/donation-page')}/>
      </div>
    </>
  )
}

export default DonatePage