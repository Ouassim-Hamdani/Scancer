import React from 'react'
import {ReactComponent as LoginImg} from "../../assets/login.svg"

export function Login() {
  return (
    <div className='flex'>
        <div className='w-1/2 h-screen flex flex-col justify-center items-center'>
            <div className='text-3xl font-semibold'>
                <p>Welcome Back</p>
            </div>
            <form className='flex flex-col'>
                <div className='pt-10'>
                    <input type="text" placeholder='Enter your Email' className='rounded-xl w-[300px] pb-3'/>
                </div>
                <div className='pt-5'>
                    <input type="password" placeholder='Enter your Password' className='rounded-xl w-[300px] pb-3'/>
                </div>
                <div className='pt-10 flex justify-center'>
                    <button className='border rounded-xl w-[300px] py-2 bg-primary text-white hover:bg-blue-600'>
                        Sign in
                    </button>
                </div>
                <div className='pt-5 flex justify-center'>
                    <a href="" className='text-primary hover:text-blue-600'>Forget your password ?</a>
                </div>
                
                
            </form>
        </div>
        <div className='bg-primary w-1/2 h-screen'>
            <div className="flex justify-center">
                <LoginImg className='w-2/3 ' />
                
            </div>
            
        </div>
    </div>
    

  )
}