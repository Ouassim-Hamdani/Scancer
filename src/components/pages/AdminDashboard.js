import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';
import {CardPatients} from "../dashboard-cards/CardPatients"
import { CardGender } from '../dashboard-cards/CardGender';
import { CardAnalytics } from '../dashboard-cards/CardAnalytics';
import { CardRecentScans } from '../dashboard-cards/CardRecentScans';
import { CardDoctorsContact } from '../dashboard-cards/CardDoctorsContact';
import { CardPatientsContact } from '../dashboard-cards/CardPatiensContact';
export const AdminDashboard = () => {
  
  return (
    <div className=" bg-white h-screen">
        <NavBar role="admin"></NavBar>
        <SideBar page="dashboard" role="admin"></SideBar>
        <div className='grid grid-cols-4 grid-rows-1 items-center h-2/3  gap-10 items-end ml-36 mt-12 w-5/6'>
            <CardPatients/>
            
            <CardGender className="gender"/>
            <CardAnalytics/>
        </div>
        
    </div>
  );
};