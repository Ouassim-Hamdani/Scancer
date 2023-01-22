<<<<<<< HEAD
import { useState } from "react";
import { Message } from "./Message"
import { ChatInput } from "./ChatInput";

export const ActiveChat = ({name,id}) => {
    console.log(id);
    let [msgsHistory,setMsgsHistory] = useState([{role:"rec",time:"15:02",msg:"It turned into something bigger!",id:1},
    {role:"sender",time:"15:02",msg:"Somewhere in the haze got a sense I'd been betrayed!",id:2},
    {role:"rec",time:"15:02",msg:"Your fingers on my hairpen trigger!",id:3},
    {role:"sender",time:"15:02",msg:"Soldier down! on that icy ground",id:4},
    {role:"rec",time:"15:02",msg:"Looked up at me with honor and truth",id:5},
    {role:"sender",time:"15:02",msg:"Broken and blue, so I called off the troops",id:6},
    {role:"rec",time:"15:02",msg:"That was the night I nearly lost you",id:7},
    {role:"sender",time:"15:02",msg:"That was the night I nearly lost you!",id:8}]);

    //const 
    //setMsgsHistory(arr => [arr,newMsg])
  return (
    <div className="w-7/12 h-full">
        <div className="w-full flex flex-row space-x-6 items-center p-4 ">
            <img src={require("../../assets/avatar.png")} className='w-14 h-14 rounded-full' alt="" />
            <div className="flex flex-col">
                        <span className="text-gray-800 font-semibold text-xl">{name}</span>
                        <span className="text-gray-400">Online</span>
            </div>


        </div>
        <div className="bg-gray-200 w-full px-3 py-1 space-y-1.5 overflow-y-auto h-[75%]">
                {
                    msgsHistory.map((msg)=>{
                        return(
                            <Message key={msg.id} data={msg}/>
                        );
                    })
                }
        </div>
        <ChatInput/>
    </div>
  )
}
=======
import { Message } from "./Message"
import { ChatInput } from "./ChatInput";
import { useMsgContext } from "../../hooks/useMsgContext"
import { useEffect, useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"
import axios from "axios";

export const ActiveChat = ({data}) => {
    const {user} = useAuthContext()
    let [messages, setMessages] = useState([])
    const [loading, setLoading] = useState([])
    const [newMessage, setNewMessage] = useState([])
    let [name, setName] = useState("User");
    
    
    const {msgs, dispatch} = useMsgContext()


    useEffect(() => {
        if (data){
            console.log(data)
            let userInfo = "User";
            if(data.doctor1._id === user.id) {
                userInfo = data.doctor2.firstName + " " + data.doctor2.familyName
            } else {
                userInfo = data.doctor1.firstName + " " + data.doctor1.familyName
            }
            console.log(userInfo)
            setName(userInfo)
            //setUserData({name : userInfo})
        }
    }, [name])

    useEffect(()=> {
        const getMessages = async() => {
            try {
                /*const response = await fetch('http://localhost:5000/api/messages/'+data._id,{
                headers: {'Authorization': `Bearer ${user.token}`},})
                const json = await response.json()
                console.log(json)
                if (response.ok) {
                    dispatch({type: 'SET_MSG', payload: json.messages})
                    console.log(response);
                }*/
                /*const response = await axios.get("/api/messages" + data?._id)
                setMessages(response.data);*/
            } catch (error) {
                    console.log(error)
                }
            }
        if (user){
            getMessages()
        }
    }, [data])
    
    const handleChange = (newMessage)=> {
        setNewMessage(newMessage);
    }
      
    let [msgsHistory,setMsgsHistory] = useState([{role:"rec",time:"15:02",msg:"It turned into something bigger!",id:1},
    {role:"sender",time:"15:02",msg:"Somewhere in the haze got a sense I'd been betrayed!",id:2},
    {role:"rec",time:"15:02",msg:"Your fingers on my hairpen trigger!",id:3},
    {role:"sender",time:"15:02",msg:"Soldier down! on that icy ground",id:4},
    {role:"rec",time:"15:02",msg:"Looked up at me with honor and truth",id:5},
    {role:"sender",time:"15:02",msg:"Broken and blue, so I called off the troops",id:6},
    {role:"rec",time:"15:02",msg:"That was the night I nearly lost you",id:7},
    {role:"sender",time:"15:02",msg:"That was the night I nearly lost you!",id:8},
]);
    //setMsgsHistory(arr => [arr,newMsg])
  return (
    <div className="w-7/12 h-full">
        <div className="w-full flex flex-row space-x-6 items-center p-4 ">
            <img src={require("../../assets/avatar.png")} className='w-14 h-14 rounded-full' alt="" />
            <div className="flex flex-col">
                        <span className="text-gray-800 font-semibold text-xl">{name}</span>
                        <span className="text-gray-400">Online</span>
            </div>
            
        </div>
        <div className="bg-gray-200 w-full px-3 py-1 space-y-1.5 overflow-y-auto h-[75%]">
                {
                    msgsHistory.map((msg)=>{
                        return(
                            <Message key={msg.id} data={msg}/>
                        );
                    })
                }
        </div>
        <ChatInput/>
    </div>
  )
}
>>>>>>> e1ff1a1962c9e8d3570d260a5d0537a9a88df71d
