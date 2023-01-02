import sentIcon from "../../assets/sent.svg"
import avatar from "../../assets/avatar.png"
export const Message = ({data}) => {
  return (
    <div className={data.role==="sender"?"flex-row-reverse flex":"space-x-3 flex flex-row items-end"}>
        <img src={avatar} className={data.role==="sender"?"hidden":"w-8 h-8 rounded-full"} alt="" />
        <div className={`${data.role==="sender"?"bg-primary":"bg-white"} px-4 py-2 flex flex-inline   justify-between space-x-3 w-1/3 rounded-xl ${data.role==="sender"?"text-white":"text-gray-800"}`}>
            <p>{data.msg}</p>
            <div className="flex flex-row items-center space-x-2">
                <span className="text-gray-400 font-xs">{data.time}</span>
                <img src={sentIcon} className={data.role==="sender"?"":"hidden"} alt="" />
            </div>
        </div>
    </div>
    
  )
}
