import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';
import {CardPatients} from "../dashboard-cards/CardPatients"
import { CardGender } from '../dashboard-cards/CardGender';
import { CardAnalytics } from '../dashboard-cards/CardAnalytics';
import { CardRecentScans } from '../dashboard-cards/CardRecentScans';
import { CardDoctorsContact } from '../dashboard-cards/CardDoctorsContact';
import { CardPatientsContact } from '../dashboard-cards/CardPatiensContact';
export const Dashboard = () => {
  
  return (
    <div className=" bg-white h-screen">
        <NavBar></NavBar>
        <SideBar page="dashboard"></SideBar>
        <div className='grid grid-cols-4 grid-rows-2 h-2/3  gap-10 items-end ml-36 mt-28 w-5/6'>
            <CardPatients/>
            
            <CardGender className="gender"/>
            <CardAnalytics/>
            <CardRecentScans/>
            <CardDoctorsContact/>
            <CardPatientsContact/>
        </div>
        
    </div>
  );
};