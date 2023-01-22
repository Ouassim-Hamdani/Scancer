import React from 'react'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Button from '@mui/material/Button';

import {useState,useEffect} from 'react'
export const Blur = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState('')
  
  const [password, setPassword] = useState('')
  if ( !isVisible ) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  }



 
  return (
    <div className='fixed inset-0 z-[99999] bg-black bg-opacity-25 
    backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handleClose}>
      <div className='w-5/12 flex justify-center items-center'>
        <div className='bg-white p-5 rounded-xl space-y-5 justify-center'>
          <p className='text-lg font-semibold flex justify-center'>Add Patient</p>
          <div className=''>
            <form className='space-y-4' >
              <div className='flex flex-row justify-between w-5/6 space-x-2 relative'>
                <input placeholder='First Name' className='border border-gray-300 rounded-xl p-2.5 pl-5' />
                <input placeholder='Last Name' className='border border-gray-300 rounded-xl p-2.5 pl-5' />
              </div>
              <div className=''>
                <input placeholder='Birthday (dd/mm/yyyy)' className='border border-gray-300 rounded-xl p-2.5 pl-5 w-full'/>
              </div>
              <div className='flex flex-row justify-between w-5/6 space-x-2'>
                <input placeholder='Gender' className='border border-gray-300 rounded-xl p-2.5 pl-5' />
                <input placeholder='Status' className='border border-gray-300 rounded-xl p-2.5 pl-5'/>
              </div>
              <div className=''>
                <input placeholder='Address' className='border border-gray-300 rounded-xl p-2.5 pl-5 w-full'/>
              </div>
              <div className=''>
                <input placeholder='Email' className='border border-gray-300 rounded-xl p-2.5 pl-5  w-full'/>
              </div>
              <div className='flex flex-rpw justify-between w-5/6 space-x-2 '>
                <input placeholder='Phone Number' className='border border-gray-300 rounded-xl p-2.5 pl-5' />
                <input placeholder='Landline number' className='border border-gray-300 rounded-xl p-2.5 pl-5'/>
              </div>
              <div className=''>
                <input placeholder='Password' className='border border-gray-300 rounded-xl p-2.5 pl-5 w-full'/>
              </div>
              <div className='flex justify-center pt-1'>
                  <Button style={{backgroundColor: '#4264D0', borderRadius:'10px'}} variant="contained" startIcon={<GroupAddIcon />}>
                    Add
                  </Button>
                
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  )
}