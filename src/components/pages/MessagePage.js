import { NavBar } from "../NavBar"
import { SideBar } from "../SideBar"
import { Chats } from "../message-components/Chats"
import { ActiveChat } from "../message-components/ActiveChat"
import { useEffect, useState } from "react"
export const MessagePage = () => {
  const [data, setData] = useState('');
  const childToParent = (childdata) => {
    setData(childdata);
  }
  return (
    <div className="h-screen">
        <NavBar/>
        <SideBar page="messages"/>
        <div className="flex flex-row items-center justify-end h-[88%]">
            <Chats fct={childToParent}/>

            <ActiveChat data={data}/>
        </div>
    </div>
  )
}
