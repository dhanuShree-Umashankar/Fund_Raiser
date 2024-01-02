import React,{useState} from 'react'
import SearchBar from '../components/SearchBar'
import ButtonRepo from '../components/ButtonRepo'
import { useNavigate } from 'react-router-dom';

const LogInPage = () => {


    const navigate = useNavigate();

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!Email || !Password){
            alert('All fields are required');
            return;
        }
        navigate('/homepage');
    }

  return (
    <>
        <div className='font-poppins mt-[100px]'>
            <div className='max-w-10xl mx-auto px-6 sm:px-16 flex flex-wrap items-center justify-center'>
                <div className='flex max-xl:flex-col gap-[100px]'>
                    <div className='w-[500px]'>
                        <img src="https://img.freepik.com/free-vector/authentication-concept-illustration_114360-2168.jpg" alt="Login" className='w-full h-full object-cover' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-[30px] font-bold text-Fblack'>Login</h1>
                        <p className='text-[12px] font-light text-Fblack text-opacity-40 mt-[10px]'>Login and rise your fund towards the most needed people<br/>in the community <span className='text-Fblack text-[18px]'>👋</span> </p>
                        <form onSubmit={handleSubmit} className='justify-center items-center text-center'>
                        <div className='mb-[10px] mt-[40px]'>
                            <SearchBar placeholder='Email'  style={`sm:w-[380px] w-[260px]`}  type={`mail`} value={Email} onChange={(e) => setEmail(e.target.value)}/>
                            <SearchBar placeholder='Password'  style={`sm:w-[380px] w-[260px]`}  type={`password`} value={Password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <a href="/">
                            <p className='text-[10px] font-normal text-Fblue text-right'>Forgot password</p>
                        </a>
                        <ButtonRepo txt='Login' style={`h-[40px] w-[380px] text-[12px] text-Fwhite bg-Fblue font-medium rounded-lg mt-[60px]`}/>
                        </form>
                        <a href="/register">
                            <p className='text-[10px] font-normal text-Fblack text-center mt-[20px]'>Don't have an account? <span className='text-[10px] font-normal text-Fblue text-center'>Register now</span></p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LogInPage