import React from 'react'
import {ReactComponent as LoginImg} from "../../assets/login.svg"
import {useLogin} from '../../hooks/useLogin.js'
import { useState } from 'react'
export function Login() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()
    const handleSubmit = async (e) => {
        e.preventDefault()
    
        await login(email, password)
      }
    
  return (
    <div className='flex'>
        <div className='w-1/2 h-screen flex flex-col justify-center items-center'>
            <div className='text-3xl font-semibold'>
                <p>Welcome Back</p>
            </div>
            <form className='flex flex-col'  onSubmit={handleSubmit}>
                <div className='pt-10'>
                    <input type="email"         onChange={(e) => setEmail(e.target.value)} 
                     value={email}  placeholder='Enter your Email' className='rounded-xl w-[300px] pb-3'/>
                </div>
                <div className='pt-5'>
                    <input type="password" placeholder='Enter your Password' 
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password} 
                            className='rounded-xl w-[300px] pb-3'/>
                </div>
                <div className='pt-10 flex justify-center'>
                    <button disabled={isLoading} className='border rounded-xl w-[300px] py-2 bg-primary text-white hover:bg-blue-600'>
                        Sign in
                    </button>
                </div>
                <div className='pt-5 flex justify-center'>
                    <a href="" className='text-primary hover:text-blue-600'>Forget your password ?</a>
                </div>
                {error && <div className="error">{error}</div>}
                
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