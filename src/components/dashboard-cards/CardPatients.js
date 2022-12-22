import up from '../../assets/up.svg'
import down from '../../assets/down.svg'
import dateExpand from '../../assets/dateExpand.svg'
import { patientsData } from '../../constants/constants';
export const CardPatients = () => {
    return (
        <div className="bg-secondary px-6 py-6 rounded-2xl space-y-4 shadow-xl">
            
            <div className="flex flex-row justify-between items-center">
                <span className="text-white font-semibold text-lg">Patients</span>
                <div className='flex flex-row space-x-1 items-center '>
                    <span className="text-gray-500 text-md">This Month</span>
                    <img src={dateExpand} alt="" />
                </div>
                
            </div>

            <div className="flex flex-col justify-between space-y-4">
                {patientsData.map((item)=>{
                    
                        return (
                            <div key={item.name} className="flex flex-row items-center space-x-2">
                                <span className="text-5xl text-white font-normal ">{item.value}</span>
                                <div className="flex flex-col justify-center space-y-0 text-sm">
                                    <div className='flex flex-row pt-1'>
                                        <img src={item.stat==="up"?up:down} className="pb-1 pr-1" alt="" />
                                        <span className={item.stat==="up"?"text-green-500":"text-[#DE4747]"}>{item.perc}%</span>
                                    </div>
                                    <span className="text-gray-500">{item.name} Patients</span>
                                </div>
                            </div>
                        )
                    
                    
                
                })}
                
            </div>
        
        </div>
    );
};