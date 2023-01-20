import plusIcon from "../../assets/plus.svg"
import { ChatEntry } from "./ChatEntry"
import { chatsList } from "../../constants/constants"
import { useEffect, useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"
import axios from 'axios'
import { AddChat } from "./AddChat"
export const Chats = ({active}) => {
    let [activeChatId,setActiveChatId] = useState(active);
    const handleClick = (id) => {
        setActiveChatId(id);
        active = id;
    };
    const {user} = useAuthContext()
    const {chatsList, setChatsList} = useState([])

    useEffect(() =>{
        const getChats = () => {
            try {
                const API = axios.create({baseURL : 'http://localhost:5000'})
                const {data} = API.get(`/api/conversation/${user._id}`)
                setChatsList(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        getChats()
    }, [user])
  return (
    <div className="flex flex-col p-4 pr-0 space-y-6 w-[36.3%] border-r border-r-gray-200 relative h-full">
        <span className="font-semibold pl-4 text-2xl text-gray-900">Chats</span>
        <div className="flex flex-row pl-4 items-center space-x-6">
            <div class="relative">
            <label class="sr-only" for="search"> Search </label>

            <input
                className="h-10 w-full rounded-lg border-gray-200 bg-white pl-4 pr-10 text-sm shadow-sm sm:w-72"
                id="search"
                type="search"
                placeholder="Search website..."
            />

            <button
                type="button"
                class="absolute top-1/2 right-1 -translate-y-1/2 rounded-full border bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
            >
                <span class="sr-only">Submit Search</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
                </svg>
            </button>
            </div>
            <div>
                <AddChat/>
            </div>
        </div>
        <div className="flex  overflow-y-auto flex-col h-[80%] w-full">
            {chatsList.map((chat)=>{
                return (
                <div onClick={()=>{handleClick(chat.id)}} className={activeChatId===chat.id?"bg-gray-200 border-r border-r-primary transition-all":""}>
                    <ChatEntry key={chat.id} data={chat}/>
                </div> 
            );})}
            
            
        </div>

    </div>
      )
}
