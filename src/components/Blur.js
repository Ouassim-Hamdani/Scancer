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
    <div className='fixed inset-0 bg-black bg-opacity-25 
    backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handleClose}>
      <div className='w-[570px]'>
        <div className='bg-white p-5 rounded-xl'>
          <p className='text-lg font-semibold flex justify-center pt-5 pb-5'>Add Patient</p>
          <div>
            <form className='pl-6 mb-2' >
              <div className=''>
                <input placeholder='First Name' className='border border-gray-300 rounded-xl p-2.5 pl-5' />
                <input placeholder='Last Name' className='border border-gray-300 rounded-xl p-2.5 pl-5 ml-4' />
              </div>
              <div className='pt-4'>
                <input placeholder='Birthday (dd/mm/yyyy)' className='border border-gray-300 rounded-xl p-2.5 pl-5 w-[480px]'/>
              </div>
              <div className='pt-4'>
                <input placeholder='Gender' className='border border-gray-300 rounded-xl p-2.5 pl-5' />
                <input placeholder='Status' className='border border-gray-300 rounded-xl p-2.5 pl-5 ml-4'/>
              </div>
              <div className='pt-4'>
                <input placeholder='Last Name' className='border border-gray-300 rounded-xl p-2.5 pl-5 w-[480px]'/>
              </div>
              <div className='pt-4'>
                <input placeholder='Email' className='border border-gray-300 rounded-xl p-2.5 pl-5 w-[480px]'/>
              </div>
              <div className='pt-4'>
                <input placeholder='Phone Number' className='border border-gray-300 rounded-xl p-2.5 pl-5' />
                <input placeholder='Landline number' className='border border-gray-300 rounded-xl p-2.5 pl-5 ml-4'/>
              </div>
              <div className='pt-4'>
                <input placeholder='Last Name' className='border border-gray-300 rounded-xl p-2.5 pl-5 w-[480px]'/>
              </div>
              <div className='flex justify-center pt-5'>
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