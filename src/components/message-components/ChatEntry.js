<<<<<<< HEAD
import { useEffect, useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"

export const ChatEntry = ({data}) => {
    const {user} = useAuthContext()
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        /*const userInfo = data.patient.firstName + " " + data.patient.familyName
        const lM = "";
        if(data[0].latestMessage){
            const lM = data.latestMessage
        }
        const newMsg = 0
        const timer = 1
        setUserData({name : userInfo, lastMessage: lM, time : timer, newMsgs: newMsg})
        console.log(userData)*/
        setUserData({name: "Sami", lastMessage : "", time : "15:00", newMsgs : 5});
    
      
    }, [user, data])
    
  return (
        <div className="flex flex-row space-x-4 items-center w-full justify-between border-t py-2 px-4 hover:bg-gray-100  border-t-gray-200">
                <div className="flex flex-row space-x-4 items-center">
                    <img src={require("../../assets/avatar.png")} className="w-14 h-14  transition-all rounded-full" alt="" />
                    <div className="flex flex-col">
                        <span className="text-gray-800 font-semibold">{userData.name}</span>
                        <span className="text-gray-600" style={{width:"20ch",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}>{userData.lastMessage}</span>
                    </div>
                </div>
                <div className="flex flex-col items-center ">
                    <span className="text-gray-400">{userData.time}</span>
                    <div className={`bg-primary px-1.5 py-0.5 text-center rounded-full text-white text-xs ${data.newMsgs===0?"hidden":""}`}>{userData.newMsgs}</div>
                </div>
            </div>
  )
}
=======

import { useEffect, useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"
export const ChatEntry = ({data}) => {

    const {user} = useAuthContext()
    const [userData, setUserData] = useState({name : "", lastMessage : "", time: "", newMsgs:0})

    useEffect(() => {
        let userInfo = "";
        if(data.doctor1._id === user.id) {
            userInfo = data.doctor2.firstName + " " + data.doctor2.familyName
        } else {
            userInfo = data.doctor1.firstName + " " + data.doctor1.familyName
        }
        let lM = "";
        if(data.latestMessage){
            lM = data.latestMessage
        }
        const newMsg = 0
        const timer = 1
        setUserData({name : userInfo, lastMessage: lM, time : timer, newMsgs: newMsg})
        //console.log(userData)
      
    }, [user])

  return (
        <div  className="flex flex-row space-x-4 items-center w-full justify-between border-t py-2 px-4 hover:bg-gray-100  border-t-gray-200">
                <div className="flex flex-row space-x-4 items-center">
                    <img src={require("../../assets/avatar.png")} className="w-14 h-14  transition-all rounded-full" alt="" />
                    <div className="flex flex-col">
                        <span className="text-gray-800 font-semibold">{userData.name}</span>
                        <span className="text-gray-600" style={{width:"20ch",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}>{userData.msg}</span>
                    </div>
                </div>
                <div className="flex flex-col items-center ">
                    <span className="text-gray-400">{userData.time}</span>
                    <div className={`bg-primary px-1.5 py-0.5 text-center rounded-full text-white text-xs ${userData.newMsgs===0?"hidden":""}`}>{userData.newMsgs}</div>
                </div>
            </div>
  )
}
>>>>>>> e1ff1a1962c9e8d3570d260a5d0537a9a88df71d
