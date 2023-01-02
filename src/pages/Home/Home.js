import {CardPatients} from "../../components/dashboard-cards/CardPatients"
import { CardGender } from '../../components/dashboard-cards/CardGender';
import { CardAnalytics } from '../../components/dashboard-cards/CardAnalytics';
import { CardRecentScans } from '../../components/dashboard-cards/CardRecentScans';
import { CardDoctors } from '../../components/dashboard-cards/CardDoctors';
import { CardPat } from '../../components/dashboard-cards/CardPat';

export const Home = () => {
  
  return (
    <div className=" bg-white h-screen">
        
        <div className='grid grid-cols-4 grid-rows-2 h-2/3  gap-10 items-end ml-36 mt-28 w-5/6'>
            <CardPatients/>
            
            <CardGender className="gender"/>
            <CardAnalytics/>
            <CardRecentScans />
            <CardDoctors />
            <CardPat />
            
        </div>
        
    </div>
  );
};