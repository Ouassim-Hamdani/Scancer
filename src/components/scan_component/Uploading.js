import fileImg from "../../assets/file.svg"
import cancelImg from "../../assets/cancelUpload.svg"
import { useState } from "react"
export const Uploading = () => {
    let [uploadPerc,setUploadPerc] = useState(25);
  return (
    <div className='shadow-2xl rounded-2xl items-center w-5/6 ml-10 p-8 border-gray-200 border flex flex-row justify-center space-x-8'>
            <img src={fileImg} alt="" className="w-24"/>
            <div className='flex flex-col h-28 justify-between w-5/6'>
                <span className="text-xl font-semibold text-gray-700">Scan_521_587.pdf</span>
                
                <div className="w-full bg-gray-200 h-5 rounded-lg transition-all">
                    <div className="bg-blue-600 h-5 rounded-lg" style={{width: uploadPerc+"%"}}></div>
                </div>
                
            </div>
            <div className="flex flex-col justify-between items-end h-28">
                <a href=""><img src={cancelImg} className="w-5 rounded-sm" /></a>
                <span className="text-gray-600 font-semibold">{uploadPerc}%</span>
            </div>
    </div>
  )
}
