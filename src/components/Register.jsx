import React, { useState } from 'react';
import { FaUser, FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { MdMarkEmailUnread } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaExclamationCircle } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaSkull } from "react-icons/fa6";

const Register = () => {

    const [email , setEmail] = useState();
    const [correct , setCorrect] = useState('-1');
    const navigate = useNavigate();
    const [name , setName] = useState('-1');
    const register = () => {
        navigate('/login');
    }

    const emailValidation = (e) => {
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        const emailValue = e.target.value
        setEmail(emailValue);

        if(email.match(pattern))
        {
            console.log("true");
            setCorrect(1);
        }
        else
        {
            console.log("false");
            setCorrect(0);
        }
    }

    const usernameValidation = (e) => {
        const pattern = /^[a-z0-9_@]+$/;
        const user = e.target.value;
        setName(user);

        if(user.match(pattern))
        {
            console.log("ture");
            setName(1);
        }
        else
        {
            console.log("fasle");
            setName(0);
        }
    }

  return (
    <div className='w-full h-screen bg-[#FFB1B1] flex justify-center items-center'>
      <div className='bg-white h-[85%] sm:h-[90%] w-[90%] km:flex rounded-md shadow-lg shadow-red-500/40 '>
        <div className='md:w-[50%] flex flex-col justify-center items-center h-full p-10'>
          <h1 className='text-[#EE4F63] text-[35px] text-center font-bold font-poppins'>Register</h1>
          <div className='text-center flex flex-col py-3 pr-1 items-center justify-center mt-5'>
            <div className={`w-[280px] xs:w-[280px] sm:w-[350px] flex pl-6 items-center mt-1 border-2 shadow-sm ${name == 1 ? 'border-green-500' : name == 0 ? 'border-red-500' : ''} border-slate-200 rounded-md`}
>
              <FaUser className='text-[#7E7C7C]' />
              <input className='outline-none px-2 py-2 ' type='username' onChange={usernameValidation} placeholder='Username'/>
            </div>
            <div className={`w-[280px] xs:w-[280px] sm:w-[350px] flex justify-normal sm:justify-between pl-6 items-center border-2 shadow-sm mt-5 ${correct == 1 ? 'border-green-500' : correct == 0 ? 'border-red-500' : ''} rounded-md`}>
              <MdMarkEmailUnread className='text-[#7E7C7C]' />
              <input className='outline-none py-2 px-2 sm:mr-[70px] ' onChange={emailValidation} value={email} type='email' placeholder='Email'/>
              {correct == '-1' && <FaExclamationCircle className='sm:mr-5' />}
              {correct == '0' && <FaSkull className='sm:mr-5 text-[#EE4F63]' />}
              {correct == '1' && <BsCheckCircleFill className='sm:mr-5 text-green-500'/>}
            </div>
            <div className='w-[280px] xs:w-[280px] sm:w-[350px] flex pl-6 items-center border-2 shadow-sm mt-5 border-slate-200 rounded-md'>
              <IoKeySharp className='text-[#201818]' />
              <input className='outline-none px-2 py-2 '  type='password' placeholder='Password'/>
            </div>

            <div className='flex w-[280px] xs:w-[280px] sm:w-[350px] px-2 py-3 justify-between decoration-none'>
                <div><input className='list-none' type='checkbox'/>I hereby confirm the <span className='text-[#227eff]'>Terms & Condition </span></div>
            </div>

            <div><button className='bg-[#EE4F63] w-[280px] xs:w-[280px] sm:w-[350px] py-2 mt-4 rounded-md text-white text-bold text-[20px]'>Register</button></div>

            <h3 className='pt-5 font-bold text-[20px] text-[#E0E0E0]'>Register with</h3>
            <div className='flex mt-4 text-[20px]'>
               <div className='p-2 border-2 hover:scale-125 transition-all hover:border-green-500 duration-200 ease-in-out delay-200 border-slate-200 rounded-md'><FcGoogle /></div>
               <div className='p-2 border-2 hover:scale-125 transition-all hover:border-green-500 duration-200 ease-in-out delay-200 text-[#0087FE] ml-4 border-slate-200 rounded-md'><FaPhone /></div>
               <div className='p-2 border-2 text-[#25D366] hover:scale-125 hover:border-green-500 transition-all duration-200 ease-in-out delay-200 ml-4 border-slate-200 rounded-md'><FaWhatsapp /></div>
            </div>

            <div className='mt-6'>
                    New Here ? <span onClick={() => {register()}} className='text-[#227eff] cursor-pointer'>Login .</span>
            </div>
          </div>
        </div>

        <div className='hidden km:block w-[50%] h-full'>
        <div className='w-[100%] h-full flex justify-center items-center bg-[#EE4F63]'>
          <img width={"70%"} src='https://static.uacdn.net/production/_next/static/images/home-illustration.svg?q=75&auto=format%2Ccompress&w=384' /> 
        </div>
        </div>
      </div>
    </div>
  )
}

export default Register
