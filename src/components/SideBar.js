
import {ReactComponent as DashboardIcon} from "../assets/dashboard-icon.svg"
import {ReactComponent as PatientIcon} from "../assets/patient-icon.svg"
import {ReactComponent as MessageIcon} from "../assets/message-icon.svg"
import {ReactComponent as ReportIcon} from "../assets/report-icon.svg"
import {ReactComponent as SettingIcon} from "../assets/setting-icon.svg"

export const SideBar = ({page}) => {
    //                <a href=""><div className={`${page===""?"active":""} circle rounded-full bg-white hover:bg-secondary transition-all shadow-sm stroke-2   flex items-center justify-center p-4`}><SettingIcon className="w-6 h-6 icon"/></div></a>

    return (
        
            <div className="flex flex-col items-center h-full left-0 top-0 z-10 absolute justify-center bg-nav  px-4 space-y-6 py-4">
                <div className="circle rounded-full bg-gray-800 absolute top-4 shadow-sm stroke-2 stroke-gray-900  w-12 h-12"></div>                
                <a href="/"><div className={`${page==="dashboard"?"active":""} circle rounded-full bg-white hover:bg-secondary transition-all shadow-sm stroke-2 flex items-center justify-center p-4`}> <DashboardIcon className="w-6 h-6 icon-dash"/> </div></a>
                <a href="/patients"><div className={`${page==="patients"?"active":""} circle rounded-full bg-white hover:bg-secondary  transition-all shadow-sm stroke-2 hover:fill-white  flex items-center justify-center p-4`}> <PatientIcon className="w-6 h-6 icon"/> </div></a>
                <a href=""><div className={`${page==="messages"?"active":""} circle rounded-full bg-white hover:bg-secondary transition-all shadow-sm stroke-2   flex items-center justify-center p-4`}><MessageIcon className="w-6 h-6 icon"/></div></a>
                <a href=""><div className={`${page==="scans"?"active":""} circle rounded-full bg-white hover:bg-secondary transition-all shadow-sm stroke-2   flex items-center justify-center p-4`}><ReportIcon className="w-6 h-6 icon"/></div></a>
                
            </div>
        
    );
}