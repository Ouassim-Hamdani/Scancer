import { NavBar } from './NavBar';
import { SideBar } from './SideBar';
import {CardPatients} from "./dashboard-cards/CardPatients"
let name="Anis ki zabi"
export const Dashboard = () => {
  return (
    <div className=" bg-white h-screen">
        <NavBar></NavBar>
        <SideBar></SideBar>
        <div className='grid grid-cols-4 grid-rows-2 h-2/3  gap-10 items-end ml-36 mt-28 w-5/6'>
            <CardPatients/>
            
            <CardPatients/>
            <CardPatients/>
            <CardPatients/>
        </div>
        
    </div>
  );
};