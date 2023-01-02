import { NavBar } from "../NavBar"
import { SideBar } from "../SideBar"
import { Chats } from "../message-components/Chats"
import { ActiveChat } from "../message-components/ActiveChat"
export const MessagePage = () => {
    
  return (
    <div className="h-screen">
        <NavBar/>
        <SideBar page="messages"/>
        <div className="flex flex-row items-center justify-end h-[88%]">
            <Chats/>
            <ActiveChat/>
        </div>
    </div>
  )
}
