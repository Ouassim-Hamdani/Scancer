import scanCancer from "../../assets/cancer.png"
import processIcon from "../../assets/process.svg"
import { useAuthContext } from '../../hooks/useAuthContext'
import { useEffect, useRef, useState } from 'react'
export const Process = ({fct,ffct}) => { 
  const { user } = useAuthContext()
  useEffect(() => {
    console.log(ffct)
    const file=ffct
  const fetchData= async (formData) => {
  const response =  await fetch('http://localhost:5000/api/scans/', {
    method: 'POST',
    body:formData,
    headers: {
      
      'Authorization': `Bearer ${user.token}`
    }
  })
  const json =  await response.json()
    if (response.ok) {
      console.log("merci ")
      
    }}
    if(file){
      var formData = new FormData();
      formData.append('file', file, file.name);
    fetchData(formData)}

  },[])
  return (
    <div className="flex flex-col justify-center items-center h-full space-y-4">
        <img src={scanCancer} alt="" className="rounded-xl h-full"/>
        <button onClick={()=>{fct(3)}} className="inline-flex items-center space-x-2 hover:bg-secondary transition-all bg-primary px-3 py-1.5 rounded-xl">
            <img src={processIcon} className="w-4 h-4" alt="" />
            <span className="text-white font-semibold">Process</span>
        </button>
    </div>
  )
}
