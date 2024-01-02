import React,{useState} from 'react'
import SearchBar from '../components/SearchBar'
import ButtonRepo from '../components/ButtonRepo'
import { useNavigate, Link } from 'react-router-dom';


const RegisterPage = () => {

    const navigate = useNavigate();



    const [FirstName, setFirstName] = useState('');
    const [SecondName, setSecondName] = useState('');
    const [OrganizationName, setOrganizationName] = useState('');
    const [OrganizationType, setOrganizationType] = useState('');
    const [Email, setEmail] = useState('');
    const [ContactNumber, setContactNumber] = useState('(+91)');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [PasswordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form inputs
        if (!FirstName || !SecondName || !OrganizationName || !OrganizationType || !Email || !ContactNumber || !Password || !ConfirmPassword) {
            alert('All fields are required');
            return;
        }

        if (Password !== ConfirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }

        // Add more specific validation rules as needed

        // If all validations pass, navigate to the homepage
        navigate('/homepage');
    };


  return (
    <>
        <div className='font-poppins mt-[100px]'>
            <div className='max-w-10xl mx-auto px-6 sm:px-16 flex flex-wrap items-center justify-center'>
                <div className='flex max-xl:flex-col gap-[100px]'>
                    <div className='w-[500px]'>
                        <img src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5488.jpg" alt="Login" className='w-full h-full object-cover' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-[30px] font-bold text-Fblack'>Register</h1>
                        <p className='text-[12px] font-light text-Fblack text-opacity-40 mt-[10px]'>Welcome to fund raiser most in demand tool for fund raising<br/>in the community <span className='text-Fblack text-[18px]'>✋</span> </p>
                        <form onSubmit={handleSubmit} className='justify-center items-center text-center'>
                    
                        <div className='mb-[10px] mt-[40px] flex flex-wrap gap-2'>
                            <SearchBar placeholder='First Name' style={`sm:w-[280px] w-[260px]`} type={`text`} value={FirstName} onChange={(e) => setFirstName(e.target.value)}/>
                            <SearchBar placeholder='Second Name'  style={`sm:w-[280px] w-[260px]`} type={`text`} value={SecondName} onChange={(e) => setSecondName(e.target.value) }/>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <SearchBar placeholder='Organization name' style={`sm:w-[280px] w-[260px]`} type={`text`} value={OrganizationName} onChange={(e) => setOrganizationName(e.target.value) }/>
                            <SearchBar placeholder='Organization type'  style={`sm:w-[280px] w-[260px]`} type={`text`} value={OrganizationType} onChange={(e) => setOrganizationType(e.target.value)} />
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <SearchBar placeholder='Email' style={`sm:w-[280px] w-[260px]`} type={`mail`} value={Email} onChange={(e) => setEmail(e.target.value) }/>
                            <SearchBar placeholder='Contact no.'  style={`sm:w-[280px] w-[260px]`} type={`tel`} value={ContactNumber} onChange={(e) => setContactNumber(e.target.value)}/>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <SearchBar placeholder='Password' style={`sm:w-[280px] w-[260px]`} type={`password`} value={Password} onChange={(e) =>setPassword(e.target.value) }/>
                            <SearchBar placeholder='Confirm Password'  style={`sm:w-[280px] w-[260px]`} type={`password`} value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </div>
                        {PasswordError && <p className='text-[10px] font-normal text-red-500 text-center'>{PasswordError}</p>}
                        <ButtonRepo txt='Register' style={`h-[40px] w-[380px] text-[12px] text-Fwhite font-medium bg-Fblue rounded-lg mt-[60px]`}/>
                        </form>
                        <Link to="/login">
                            <p className='text-[10px] font-normal text-Fblack text-center mt-[20px]'>Already have an account? <span className='text-[10px] font-normal text-Fblue text-center'>Login now</span></p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default RegisterPage