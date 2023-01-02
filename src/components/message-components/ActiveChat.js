import { useState } from "react";
import { Message } from "./Message"

export const ActiveChat = () => {
    let [msgsHistory,setMsgsHistory] = useState([{role:"rec",time:"15:02",msg:"It turned into something bigger!",id:1},
    {role:"sender",time:"15:02",msg:"Somewhere in the haze got a sense I'd been betrayed!",id:2},
    {role:"rec",time:"15:02",msg:"Your fingers on my hairpen trigger!",id:3},
    {role:"sender",time:"15:02",msg:"Soldier down! on that icy ground",id:4},
    
]);
    //setMsgsHistory(arr => [arr,newMsg])
  return (
    <div className="w-2/3">
        <div className="w-full flex flex-row space-x-6 items-center p-4 ">
            <img src={require("../../assets/avatar.png")} className='w-14 h-14 rounded-full' alt="" />
            <div className="flex flex-col">
                        <span className="text-gray-800 font-semibold text-xl">Taylor Swift</span>
                        <span className="text-gray-400">Online</span>
            </div>
            
        </div>
        <div className="bg-gray-200 w-full px-3 py-1 space-y-1.5">
                {
                    msgsHistory.map((msg)=>{
                        return(
                            <Message key={msg.id} data={msg}/>
                        );
                    })
                }
        </div>
    </div>
  )
}
