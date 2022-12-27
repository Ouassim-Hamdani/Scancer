import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';
import {Upload} from "../scan_component/Upload"
import { Uploading } from '../scan_component/Uploading';
import { Process } from '../scan_component/Process';
let states = {uploading:{container:"h-5/6", smallContainer:"h-2/3"},process:{container:"h-5/6", smallContainer:"h-5/6"}}
export const Scan = () => {
  
  return (
    <div className=" bg-white h-screen">
        <NavBar></NavBar>
        <SideBar></SideBar>
        <div className='space-y-4 pt-8 h-5/6'>
            <span className="text-gray-900 pl-36 text-3xl font-semibold">Scan</span>
            <div className='flex justify-center items-center h-5/6'>
                <Process/>
            </div>
        </div>
        
    </div>
  );
};