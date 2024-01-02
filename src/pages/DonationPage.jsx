import React,{useState} from 'react'
import SearchBar from '../components/SearchBar'
import ButtonRepo from '../components/ButtonRepo'
import { useNavigate, Link } from 'react-router-dom';

const DonationPage = () => {

    const navigate = useNavigate();

    const [FirstName, setFirstName] = useState('');
    const [SecondName, setSecondName] = useState('');
    const [Email, setEmail] = useState('');
    const [ContactNumber, setContactNumber] = useState('');
    const [DonationType, setDonationType] = useState('');
    const [DonationAmount, setDonationAmount] = useState('₹');
    const [CardNumber, setCardNumber] = useState('');
    const [CardCVV, setCardCVV] = useState('');
    const [ExpiryDate, setExpiryDate] = useState('');
    const [AddressLine, setAddressLine] = useState('');
    const [CityName, setCityName] = useState('');
    const [StateName, setStateName] = useState('');
    const [PostCode, setPostCode] = useState('');

    // Card Validation
    const [CardError, setCardError] = useState('');
    const [CVVError, setCVVError] = useState('');
    const [ContactError, setContactError] = useState('');
    const [AmountError, setAmountError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form inputs
        if (!FirstName || !SecondName || !DonationType || !DonationAmount || !Email || !ContactNumber || !CardNumber || !CardCVV || !ExpiryDate || !AddressLine || !CityName || !StateName || !PostCode) {
            alert('All fields are required');
            return;
        }

        if(CardNumber.length < 11 || CardCVV.length < 2 ){
            setCardError('Invalid Card details, Check the card number or card CVV');
            return;
        }

        if(ContactNumber.length < 9){
            setContactError('Enter a valid contact number');
            return;
        }

        if(DonationAmount.length < 2){
            setAmountError('Atleast enter a higher amount!')
            return;
        }


        // Add more specific validation rules as needed

        // If all validations pass, navigate to the homepage
        navigate('/homepage');
    };


  return (
    <>
                <div className='font-poppins mt-[50px]'>
            <div className='max-w-10xl mx-auto px-6 sm:px-16 flex flex-wrap items-center justify-center'>
                <div className='flex max-xl:flex-col gap-[100px]'>
                    <div className='w-[500px]'>
                        <img src="https://img.freepik.com/free-vector/hands-holding-red-heart-love-care-family-protect-poster-vector-illustration_1284-2324.jpg?w=740&t=st=1703835932~exp=1703836532~hmac=b8075e0d6b20b58663968d597845b1bfcc86477a6750d5866a8cc8dbaf93d25b" alt="Login" className='w-full h-full object-cover' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-[30px] font-bold text-Fblack'>Donate, Give hope 📢</h1>
                        <p className='text-[12px] font-light text-Fblack text-opacity-40 mt-[10px]'>Fill the below details to full fill the needs of needed people<br/>in the community <span className='text-Fblack text-[18px]'>✋</span> </p>
                        <form onSubmit={handleSubmit}  className='justify-center items-center text-center'>
                    
                        <div className='mb-[10px] mt-[40px] flex flex-wrap gap-2'>
                            <SearchBar placeholder='First Name' style={`sm:w-[280px] w-[260px]`} type={`text`} value={FirstName} onChange={(e) => setFirstName(e.target.value)}/>
                            <SearchBar placeholder='Second Name'  style={`sm:w-[280px] w-[260px]`} type={`text`} value={SecondName} onChange={(e) => setSecondName(e.target.value) }/>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <SearchBar placeholder='Email' style={`sm:w-[280px] w-[260px]`} type={`email`} value={Email} onChange={(e) => setEmail(e.target.value) }/>
                            <SearchBar placeholder='Contact no.'  style={`sm:w-[280px] w-[260px]`} type={`tel`} value={ContactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <SearchBar placeholder='Donation Type' style={`sm:w-[280px] w-[260px]`} type={`text`} value={DonationType} onChange={(e) => setDonationType(e.target.value) }/>
                            <SearchBar placeholder='Donation Amount'  style={`sm:w-[280px] w-[260px]`} type={`text`} value={DonationAmount} onChange={(e) => setDonationAmount(e.target.value)}/>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <SearchBar placeholder='Card Number' style={`sm:w-[280px] w-[260px]`} type={`number`} value={CardNumber} onChange={(e) =>setCardNumber(e.target.value) }/>
                            <SearchBar placeholder='CVV'  style={`sm:w-[135px] w-[260px]`} type={`password`} value={CardCVV} onChange={(e) => setCardCVV(e.target.value)}/>
                            <SearchBar placeholder='Expiry Date'  style={`sm:w-[135px] w-[260px]`} type={`date`} value={ExpiryDate} onChange={(e) => setExpiryDate(e.target.value)}/>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <SearchBar placeholder='Address' style={`sm:w-[280px] w-[260px]`} type={`text`} value={AddressLine} onChange={(e) =>setAddressLine(e.target.value) }/>
                            <SearchBar placeholder='City'  style={`sm:w-[280px] w-[260px]`} type={`text`} value={CityName} onChange={(e) => setCityName(e.target.value)}/>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <SearchBar placeholder='Post Code' style={`sm:w-[280px] w-[260px]`} type={`text`} value={PostCode} onChange={(e) =>setPostCode(e.target.value) }/>
                            <SearchBar placeholder='State'  style={`sm:w-[280px] w-[260px]`} type={`text`} value={StateName} onChange={(e) => setStateName(e.target.value)}/>
                        </div>
                        {CardError && <p className='text-[10px] font-normal text-red-500 text-center'>{CardError}</p>}
                        {CVVError && <p className='text-[10px] font-normal text-red-500 text-center'>{CVVError}</p>}
                        {ContactError && <p className='text-[10px] font-normal text-red-500 text-center'>{ContactError}</p>}
                        {AmountError && <p className='text-[10px] font-normal text-red-500 text-center'>{AmountError}</p>}
                        <ButtonRepo txt='Donate' style={`h-[40px] w-[380px] text-[12px] text-Fwhite font-medium bg-Fblue rounded-lg mt-[60px]`}/>

                        </form>
                        <Link to="/homepage">
                            <p className='text-[10px] font-normal text-Fblack text-center mt-[20px]'>Know our privacy and policies, <span className='text-[10px] font-normal text-Fblue text-center'>The information here is safe and secure</span></p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DonationPage