import React from 'react'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Button from '@mui/material/Button';

import {useState,useEffect} from 'react'

import { usePatientsContext } from "../../hooks/usePatientsContext"
import { useAuthContext } from '../../hooks/useAuthContext'
export const Blur = ({ isVisible, onClose }) => {
  const { user } = useAuthContext()
  const {patients, dispatch} = usePatientsContext()

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [firstName, setFirst] = useState(null)
  const [lastName, setLast] = useState(null)
  const [phoneNumber, setNumber] = useState(null)
  const [landLine, setLandline] = useState(null)
  const [gender, setGender] = useState(null)
  const [birthDate, setbirth] = useState(null)
  const [address, setAdress] = useState(null)
  const [status, setStatus] = useState(null)
  if ( !isVisible ) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const contacts ={
      email:email,
      phoneNumber:phoneNumber,
    }
    const patient = { password,firstName,familyName,gender,address,contacts,birthDate:Date(birthDate),status}
    
    const response = await fetch('http://localhost:5000/api/patients/create', {
      method: 'POST',
      body: JSON.stringify(patient),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
        setError(json.error)
      }
      if (response.ok) {
        
        dispatch({type: 'CREATE_PATIENT', payload: json})
      }
  }

 
  return (
    <div className='fixed inset-0 z-[99999] bg-black bg-opacity-25 
    backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handleClose}>
      <div className='w-5/12 flex justify-center items-center'>
        <div className='bg-white p-5 rounded-xl space-y-5 justify-center'>
          <p className='text-lg font-semibold flex justify-center'>Add Patient</p>
          <div className=''>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div className='flex flex-row justify-between w-5/6 space-x-2 relative'>
                <input          onChange={(e) => setFirst(e.target.value)} 
                            value={firstName} 
                            placeholder='First Name' className='border border-gray-300 rounded-xl p-2.5 pl-5' />
                <input                             onChange={(e) => setLast(e.target.value)} 
                            value={familyName}  placeholder='Last Name' className='border border-gray-300 rounded-xl p-2.5 pl-5' />
              </div>
              <div className=''>
                <input                             onChange={(e) => setbirth(e.target.value)} 
                            value={birthDate} placeholder='Birthday (yyyy/mm/dd)' className='border border-gray-300 rounded-xl p-2.5 pl-5 w-full'/>
              </div>
              <div className='flex flex-row justify-between w-5/6 space-x-2'>
                <input                             onChange={(e) => setGender(e.target.value)} 
                            value={gender} placeholder='Gender' className='border border-gray-300 rounded-xl p-2.5 pl-5' />
                <input                             onChange={(e) => setStatus(e.target.value)} 
                            value={status} placeholder='Status' className='border border-gray-300 rounded-xl p-2.5 pl-5'/>
              </div>
              <div className=''>
                <input                             onChange={(e) => setAdress(e.target.value)} 
                            value={address} placeholder='Address' className='border border-gray-300 rounded-xl p-2.5 pl-5 w-full'/>
              </div>
              <div className=''>
                <input                             onChange={(e) => setEmail(e.target.value)} 
                            value={email} placeholder='Email' className='border border-gray-300 rounded-xl p-2.5 pl-5  w-full'/>
              </div>
              <div className='flex flex-rpw justify-between w-5/6 space-x-2 '>
                <input                             onChange={(e) => setNumber(e.target.value)} 
                            value={phoneNumber} placeholder='Phone Number' className='border border-gray-300 rounded-xl p-2.5 pl-5' />
                <input placeholder='Landline number' className='border border-gray-300 rounded-xl p-2.5 pl-5'/>
              </div>
              <div className=''>
                <input type='password'                             onChange={(e) => setPassword(e.target.value)} 
                            value={password} placeholder='Password' className='border border-gray-300 rounded-xl p-2.5 pl-5 w-full'/>
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