import sendIcon from "../../assets/send.svg"
export const ChatInput = () => {
  return (
    <form className="w-2/3 items-center flex flex-row space-x-2">
        <input type="text" className="rounded-xl border border-gray-300 w-2/3" placeholder="Your message..."/>
        <button type="submit"><img src={sendIcon} className="w-10 h-10 p-2.5 shadow-sm border-gray-200 hover:bg-gray-100 transition-all border rounded-full" alt="" /></button>
    </form>
  )
}
