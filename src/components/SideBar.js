
import {ReactComponent as DashboardIcon} from "../assets/dashboard-icon.svg"
import {ReactComponent as PatientIcon} from "../assets/patient-icon.svg"
import {ReactComponent as MessageIcon} from "../assets/message-icon.svg"
import {ReactComponent as ReportIcon} from "../assets/report-icon.svg"
import {ReactComponent as DoctorIcon} from "../assets/doctor-icon.svg"
import Logo from "../assets/logo.png"
export const SideBar = ({page,role}) => {
    //                <a href=""><div className={`${page===""?"active":""} circle rounded-full bg-white hover:bg-secondary transition-all shadow-sm stroke-2   flex items-center justify-center p-4`}><SettingIcon className="w-6 h-6 icon"/></div></a>
    if (role==="admin") {
        return(
        <div className="flex flex-col items-center h-full left-0 top-0 z-10 absolute justify-center bg-nav  px-4 space-y-6 py-4">
                <div className=" absolute top-4 w-10 h-10"><img src={Logo} alt="" /></div>                
                <a href="/admin"><div className={`${page==="dashboard-admin"?"active bg-primary":""} circle rounded-full bg-white hover:bg-secondary transition-all shadow-sm stroke-2 flex items-center justify-center p-4`}> <DashboardIcon className="w-6 h-6 icon-dash"/> </div></a>
                <a href="/doctors"><div className={`${page==="doctors"?"active bg-primary":""} circle rounded-full bg-white hover:bg-secondary  transition-all shadow-sm stroke-2 hover:fill-white  flex items-center justify-center p-4`}><DoctorIcon className="w-6 h-6 icon"/></div></a>
                <a href="/patients-admin"><div className={`${page==="patients-admin"?"active bg-primary":""}  circle rounded-full bg-white hover:bg-secondary  transition-all shadow-sm stroke-2 hover:fill-white  flex items-center justify-center p-4`}><PatientIcon className="w-6 h-6 icon"/></div></a>
            </div>
    );
        }
    else {
        return (
        <div className="flex flex-col items-center h-full left-0 top-0 z-10 absolute justify-center bg-nav  px-4 space-y-6 py-4">
                <div className=" absolute top-4 w-11 h-11"><img src={Logo} alt="" /></div>                
                <a href="/"><div className={`${page==="dashboard"?"active bg-primary":""} circle rounded-full bg-white hover:bg-secondary transition-all shadow-sm stroke-2 flex items-center justify-center p-4`}> <DashboardIcon className="w-6 h-6 icon-dash"/> </div></a>
                <a href="patients"><div className={`${page==="patients"?"active bg-primary":""} circle rounded-full bg-white hover:bg-secondary  transition-all shadow-sm stroke-2 hover:fill-white  flex items-center justify-center p-4`}><PatientIcon className="w-6 h-6 icon"/></div></a>
                <a href="/messages"><div className={`${page==="messages"?"active bg-primary":""} circle rounded-full bg-white hover:bg-secondary transition-all shadow-sm stroke-2   flex items-center justify-center p-4`}><MessageIcon className="w-6 h-6 icon"/></div></a>
                <a href="/scans"><div className={`${page==="scans"?"active bg-primary":""} ${role==="admin"?"hidden":""} circle rounded-full bg-white hover:bg-secondary transition-all shadow-sm stroke-2   flex items-center justify-center p-4`}><ReportIcon className="w-6 h-6 icon"/></div></a>
            </div>
    );}
    
}
