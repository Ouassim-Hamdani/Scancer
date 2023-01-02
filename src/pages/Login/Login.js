import React from 'react'
import {ReactComponent as Lines} from "../../assets/Lines.svg"
import {ReactComponent as Premium} from "../../assets/premium_photo.svg"

export default function Login() {
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
                    <button className='border rounded-xl w-[300px] py-2 bg-blue-700 text-white hover:bg-blue-600'>
                        Sign in
                    </button>
                </div>
                <div className='pt-5 flex justify-center'>
                    <a href="" className='text-blue-700 hover:text-blue-600'>Forget your password ?</a>
                </div>
                
                
            </form>
        </div>
        <div className='bg-blue-700 w-1/2 h-screen'>
            <div className="flex justify-center">
                <Lines className='w-[450px] ' />
                
            </div>
            
        </div>
    </div>
    

  )
}
