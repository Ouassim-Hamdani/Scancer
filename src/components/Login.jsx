import React from 'react'
import photo from '../assets/photo.jpg'
//import {FaGoogle} from 'react-icons/fa'


export default function Login() {
  return (
    //<div className='flex flew-wrapp text-center m-12'></div>
    <div className='flex flew-wrapp text-center m-12'>
      <div className='w-1/2 bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center'>
        <div className='h-100'>
          <h1 className='text-xl font-bold text-center'>Welcome Back</h1>
          <br></br>
          <div>
            <input type="email" placeholder="Enter Email Address" className='w-96 px-4 py-3 rounded-2xl bg-gray-200 mt-4 border focus:border-blue-500 focus:bg-white focus:outline-none'/>
          </div>
          <div className="mt-4">
            <input type="password" placeholder="Enter Password" className='w-96 px-4 py-3 rounded-2xl bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none' />
          </div>
          <div className="mt-12">
          <button type="submit" className="w-96 block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-2xl px-4 py-3 mt-6">Sign In</button>
          </div>
          <br></br>
          <button type="button" className="w-96 block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-2xl px-4 py-3 border border-gray-300">
              <div className="flex items-center justify-center">
              <span class="ml-4">
              Sign in
              with
              Google</span>
              </div>
            </button>
            <br></br>
            <div className="text-center mt-2">
            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700 ">Forget your Password ?</a>
          </div>
        </div>
      </div>
      <div className='w-1/2 bg-blue-500 '></div>
    </div>
  )
}
