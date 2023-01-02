
export const ChatEntry = ({data}) => {
  return (
        <div className="flex flex-row space-x-4 items-center w-full justify-between border-t py-2 px-4 hover:bg-gray-100  border-t-gray-200">
                <div className="flex flex-row space-x-4 items-center">
                    <img src={require("../../assets/"+data.avatar)} className="w-14 h-14  transition-all rounded-full" alt="" />
                    <div className="flex flex-col">
                        <span className="text-gray-800 font-semibold">{data.name}</span>
                        <span className="text-gray-600" style={{width:"20ch",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}>{data.msg}</span>
                    </div>
                </div>
                <div className="flex flex-col items-center ">
                    <span className="text-gray-400">{data.time}</span>
                    <div className={`bg-primary px-1.5 py-0.5 text-center rounded-full text-white text-xs ${data.newMsgs===0?"hidden":""}`}>{data.newMsgs}</div>
                </div>
            </div>
  )
}
