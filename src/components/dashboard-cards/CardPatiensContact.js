import avatar from "../../assets/avatar.jpg"
import {useState} from "react"
export const CardPatientsContact = () => {
    let [list,setList] = useState([{name:"Taylor Swift",status:"Healthy"},{name:"Manel Belghenbour",status:"Healthy"}]);
    return (
        <div className="px-6 py-5 z-50 rounded-2xl space-y-3 shadow-xl border-gray-200 border col-span-1 row-span-1">
            <p className="text-xl text-gray-900 font-semibold">Patients</p>
            <div className="h-full">
                <ul className="space-y-2 py-1 overflow-y-auto h-28">
                    {list.map((item)=>{
                        return (
                            <>
                            <li>
                                <div className="flex justify-between">
                                <div className="flex space-x-3">
                                    <img src={avatar} className="object-cover w-9 h-9 rounded-full mt-2" />
                                    <div className="flex flex-col">
                                        <span className="text-gray-900">{item.name}</span>
                                        <span className="text-gray-600 text-sm">{item.status}</span>
                                    </div>
                                    
                                </div>
                            </div>

                            </li>
                            <hr />
                            </>
                            
                   
                        );

                    })}
                    
                    
                    

                    

                </ul>
            </div>
        </div>
    );
};