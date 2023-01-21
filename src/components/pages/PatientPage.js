import {NavBar} from "../NavBar"
import {SideBar} from "../SideBar"
import saveIcon from "../../assets/saveIcon.svg"
import fileIcon from "../../assets/file.svg"
import avatar from "../../assets/avatar.jpg"

import "flowbite"
export const PatientPage = () => {
  return (
    <div className="h-screen w-full">

        <NavBar/>
        <SideBar/>
        <div className="w-5/6 h-5/6 ml-28 mt-4 flex flex-cool justify-center items-center space-x-10">
            
        <div className="shadow-2xl rounded-2xl flex items-center space-y-4 flex-col p-8 border-gray-200 border">
                <img src={avatar} alt="" className="w-24 h-24 rounded-full" />
                <span className="text-xl font-semibold text-gray-800">Informations</span>
                <form action="" className="flex flex-col space-y-4">
                    <div className="flex flex-row space-x-4">
                        <input type="text" placeholder="Taylor" className="rounded-xl text-gray-800 shadow-sm border-gray-400"/>
                        <input type="text" placeholder="Swift" className="rounded-xl text-gray-800 shadow-sm border-gray-400"/>
                        
                    </div>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input datepicker type="text" className=" border border-gray-400 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="13/12/1989"/>
                    </div>
                    <div className="flex flex-rows space-x-2">
                        <select name="patients" id="patients" className="rounded-xl text-gray-800 shadow-sm border-gray-400 ">
                            <option value="1">Female</option>
                            <option value="2">Male</option>
                            
                        </select>
                        <select name="patients" id="patients" className="rounded-xl text-gray-800 shadow-sm border-gray-400 ">
                            <option value="1">Cancer</option>
                            <option value="2">Healthy</option>
                            <option value="2">Dead</option>
                        
                        </select>
                        <input type="text" placeholder="06 85 98 9871" className="rounded-xl text-gray-800 shadow-sm border-gray-400"/>

                    </div>
                    
                    <input type="text" placeholder="03 85 98 9871" className="rounded-xl text-gray-800 shadow-sm border-gray-400"/>
                    <input type="text" placeholder="tayor@swift.queen" className="rounded-xl text-gray-800 shadow-sm border-gray-400"/>

                </form>
                <button className="inline-flex items-center space-x-2 hover:bg-secondary transition-all bg-primary px-3 py-1.5 rounded-xl">
                            <img src={saveIcon} className="w-4 h-4" alt="" />
                            <span className="text-white font-semibold">Save</span>
                        </button>
      
         </div>

         <div className="shadow-2xl max-h-full rounded-2xl flex items-center space-y-4 flex-col p-8 border-gray-200 border">
         <p className="text-xl text-gray-900 font-semibold">Documenets</p>
                <ul className=" overflow-y-auto h-full">
                    
                <li className="flex items-center py-2 px-3  space-x-3 bg-gray-100">
                                <img src={fileIcon} className="w-7 h-7" alt="" />
                                <span className="text-gray-800">Scan_252_258.pdf</span>
                    </li>
                   
                    <li className="flex items-center py-2 px-3 border-t border-t-gray-400 space-x-3 bg-gray-100">
                                <img src={fileIcon} className="w-7 h-7" alt="" />
                                <span className="text-gray-800">Scan_252_258.pdf</span>
                    </li>
                    <li className="flex items-center py-2 px-3 border-t border-t-gray-400 space-x-3 bg-gray-100">
                                <img src={fileIcon} className="w-7 h-7" alt="" />
                                <span className="text-gray-800">Scan_252_258.pdf</span>
                    </li>
                    <li className="flex items-center py-2 px-3 border-t border-t-gray-400 space-x-3 bg-gray-100">
                                <img src={fileIcon} className="w-7 h-7" alt="" />
                                <span className="text-gray-800">Scan_252_258.pdf</span>
                    </li>
                    <li className="flex items-center py-2 px-3 border-t border-t-gray-400 space-x-3 bg-gray-100">
                                <img src={fileIcon} className="w-7 h-7" alt="" />
                                <span className="text-gray-800">Scan_252_258.pdf</span>
                    </li>
                    <li className="flex items-center py-2 px-3 border-t border-t-gray-400 space-x-3 bg-gray-100">
                                <img src={fileIcon} className="w-7 h-7" alt="" />
                                <span className="text-gray-800">Scan_252_258.pdf</span>
                    </li>
                    <li className="flex items-center py-2 px-3 border-t border-t-gray-400 space-x-3 bg-gray-100">
                                <img src={fileIcon} className="w-7 h-7" alt="" />
                                <span className="text-gray-800">Scan_252_258.pdf</span>
                    </li>
                    <li className="flex items-center py-2 px-3 border-t border-t-gray-400 space-x-3 bg-gray-100">
                                <img src={fileIcon} className="w-7 h-7" alt="" />
                                <span className="text-gray-800">Scan_252_258.pdf</span>
                    </li>
                    <li className="flex items-center py-2 px-3 border-t border-t-gray-400 space-x-3 bg-gray-100">
                                <img src={fileIcon} className="w-7 h-7" alt="" />
                                <span className="text-gray-800">Scan_252_258.pdf</span>
                    </li>
                    <li className="flex items-center py-2 px-3 border-t border-t-gray-400 space-x-3 bg-gray-100">
                                <img src={fileIcon} className="w-7 h-7" alt="" />
                                <span className="text-gray-800">Scan_252_258.pdf</span>
                    </li>
                    <li className="flex items-center py-2 px-3 border-t border-t-gray-400 space-x-3 bg-gray-100">
                                <img src={fileIcon} className="w-7 h-7" alt="" />
                                <span className="text-gray-800">Scan_252_258.pdf</span>
                    </li>
                    
                    
                    

                    

                </ul>

        </div>

        </div>
    </div>
  )
}
