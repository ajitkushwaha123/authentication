import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { ToastContainer , toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const {login , googleSignIn} = useUserAuth();
    const navigate = useNavigate();
    const [password , setPassword] = useState("");
    const [email , setEmail] = useState("");
    const [error , setError] = useState("");

    // const login = () => {
    //     navigate('/')
    // }

    const submitHandler = async (e) => {
      e.preventDefault();
      console.log(email , password);
      setError("");

      try {
        await login(email, password);
        toast.success("Login Success", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    
        // Set a timeout to navigate to the home page after 2 seconds
        setTimeout(() => {
            navigate("/home");
        }, 1000);
    } 
    catch(err)
      {

         setError(err.message);
        //  toast(err.message);
        toast.error(err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
         // transition: "Bounce",
          });
      }
    }

    const handlegoogleSignIn = async (e) => 
    {
      e.preventDefault();
      try{
        await googleSignIn();
        navigate('/home');
      }catch(err)
      {
        setError(err.message);
      }
    }

  return (
    <div className='w-full h-screen bg-[#FFB1B1] flex justify-center items-center'>
    
        <ToastContainer />

      <div className='bg-white h-[85%] sm:h-[90%] w-[90%] km:flex rounded-md shadow-lg shadow-red-500/40 '>

        <div className='md:w-[50%] flex flex-col justify-center items-center h-full p-10'>
        <form onSubmit={submitHandler}>
          <h1 className='text-[#EE4F63] text-[35px] text-center font-bold font-poppins'>Login</h1>
          {/* <div>{error}</div> */}
          <div className='text-center flex flex-col py-3 pr-1 items-center justify-center mt-5'>
            <div className='w-[250px] xs:w-[280px] sm:w-[350px] flex pl-6 items-center mt-3 border-2 shadow-sm border-slate-200 rounded-md'>
              <FaUser className='text-[#7E7C7C]' />
              <input className='outline-none px-2 py-2 ' onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email'/>
            </div>
            <div className='w-[250px] xs:w-[280px] sm:w-[350px] flex pl-6 items-center border-2 shadow-sm mt-5 border-slate-200 rounded-md'>
              <IoKeySharp className='text-[#7E7C7C]' />
              <input className='outline-none px-2 py-2 ' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
            </div>

            <div className='flex w-[250px] xs:w-[280px] sm:w-[350px] px-2 py-3 justify-between decoration-none'>
                <div><input className='list-none' type='checkbox'/>Remember</div>
                <div><h3>Forgot <span className='text-[#227eff]'>Password ?</span></h3></div>
            </div>

            <div><button className='bg-[#EE4F63] w-[250px] xs:w-[280px] sm:w-[350px] py-2 mt-4 rounded-md text-white text-bold text-[20px]'>Login</button></div>

            <h3 className='pt-5 font-bold text-[20px] text-[#E0E0E0]'>Login with</h3>
            <div className='flex mt-4 text-[20px]'>
               <div onClick={handlegoogleSignIn} className='p-2 border-2 hover:scale-125 transition-all duration-200 ease-in-out delay-200 border-slate-200 rounded-md'><FcGoogle /></div>
               <div className='p-2 border-2 text-[#0087FE] hover:scale-125 transition-all duration-200 ease-in-out delay-200 ml-4 hover:border-green-500 border-slate-200 rounded-md'><FaPhone /></div>
               <div className='p-2 border-2 text-[#25D366] hover:scale-125 transition-all duration-200 ease-in-out delay-200 ml-4 hover:border-green-500 border-slate-200 rounded-md'><FaWhatsapp /></div>
            </div>

            <div className='mt-6'>
                    New Here ? <span onClick={() => {login()}} className='cursor-pointer text-[#227eff]'>Create a new Account .</span>
            </div>
          </div>
          </form>
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

export default Login
