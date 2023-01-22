<<<<<<< HEAD
import { NavBar } from '../NavBar';
import { useAuthContext } from '../../hooks/useAuthContext'
import { useEffect, useRef, useState } from 'react'
import { SideBar } from '../SideBar';
import {Upload} from "../scan_component/Upload"
import { Uploading } from '../scan_component/Uploading';
import { Process } from '../scan_component/Process';
import { Result } from '../scan_component/Result';
import { SaveScan } from '../scan_component/SaveScan';
import { Notification } from '../scan_component/Notification';
let states = {uploading:{container:"h-5/6", smallContainer:"h-2/3"},processResult:{container:"h-5/6", smallContainer:"h-5/6"}}

export const Scan = () => {
  
  let [step,setStep] = useState(0)
  let [file,setFile] = useState(null)
  const showComp = () => {
    switch(step) {
      case 0:
        return ( 
        <div className='space-y-4 pt-8 h-5/6'>
            <span className="text-gray-900 pl-36 text-3xl font-semibold">Scan</span>
            <div className='flex justify-center items-center h-5/6'>
                <Upload fct={setStep} ffct={setFile}/>
            </div>
        </div>);
      case 1:
        return ( 
        <div className='space-y-4 pt-8 h-5/6'>
            <span className="text-gray-900 pl-36 text-3xl font-semibold">Scan</span>
            <div className='flex justify-center items-center h-2/3'>
                <Uploading/>
            </div>
        </div>);
        case 2:
          return ( 
          <div className='space-y-4 pt-8 h-5/6'>
              <span className="text-gray-900 pl-36 text-3xl font-semibold">Scan</span>
              <div className='flex justify-center items-center h-5/6'>
                  <Process fct={setStep} ffct={file} />
              </div>
          </div>);
          case 3:
            return ( 
            <div className='space-y-4 pt-8 h-5/6'>
                <span className="text-gray-900 pl-36 text-3xl font-semibold">Scan</span>
                <div className='flex justify-center items-center h-5/6'>
                    <Result/>
                </div>
            </div>);
    }
  }
  
  return (
    <div className=" bg-white h-screen">
        <NavBar></NavBar>
        <SideBar></SideBar>
        {showComp()}
        
    </div>
  );
=======
import { NavBar } from '../NavBar';
import {useState} from "react";
import { SideBar } from '../SideBar';
import {Upload} from "../scan_component/Upload"
import { Uploading } from '../scan_component/Uploading';
import { Process } from '../scan_component/Process';
import { Result } from '../scan_component/Result';
import { SaveScan } from '../scan_component/SaveScan';
import { Notification } from '../scan_component/Notification';
let states = {uploading:{container:"h-5/6", smallContainer:"h-2/3"},processResult:{container:"h-5/6", smallContainer:"h-5/6"}}
export const Scan = () => {
  let [step,setStep] = useState(0)
  const showComp = () => {
    switch(step) {
      case 0:
        return ( 
        <div className='space-y-4 pt-8 h-5/6'>
            <span className="text-gray-900 pl-36 text-3xl font-semibold">Scan</span>
            <div className='flex justify-center items-center h-5/6'>
                <Upload/>
            </div>
        </div>);
      case 1:
        return ( 
        <div className='space-y-4 pt-8 h-5/6'>
            <span className="text-gray-900 pl-36 text-3xl font-semibold">Scan</span>
            <div className='flex justify-center items-center h-2/3'>
                <Uploading/>
            </div>
        </div>);
        case 2:
          return ( 
          <div className='space-y-4 pt-8 h-5/6'>
              <span className="text-gray-900 pl-36 text-3xl font-semibold">Scan</span>
              <div className='flex justify-center items-center h-5/6'>
                  <Process fct={setStep}/>
              </div>
          </div>);
          case 3:
            return ( 
            <div className='space-y-4 pt-8 h-5/6'>
                <span className="text-gray-900 pl-36 text-3xl font-semibold">Scan</span>
                <div className='flex justify-center items-center h-5/6'>
                    <Result/>
                </div>
            </div>);
    }
  }
  
  return (
    <div className=" bg-white h-screen">
        <NavBar></NavBar>
        <SideBar></SideBar>
        {showComp()}
        
    </div>
  );
>>>>>>> e1ff1a1962c9e8d3570d260a5d0537a9a88df71d
};