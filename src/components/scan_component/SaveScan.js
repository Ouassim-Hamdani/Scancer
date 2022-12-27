import saveIcon from "../../assets/saveIcon.svg"

export const SaveScan = () => {
  return (
    <div className="shadow-2xl rounded-2xl flex items-center space-y-8 flex-col p-8 border-gray-200 border">
        <span className="text-xl font-semibold text-gray-800">Save Scan</span>
        <form action="" className="flex flex-col space-y-4">
            <input type="text" placeholder="Scan_523_698.pdf" className="rounded-xl text-gray-800 shadow-sm border-gray-400"/>
            <select name="patients" id="patients" className="rounded-xl text-gray-800 shadow-sm border-gray-400 ">
                <option value="1">Select Patient</option>
                <option value="2" className="hover:bg-primary focus:bg-primary py-2 px-2 border border-gray-800">
                    Taylor Swift
                    </option>
                <option value="3">Taylor Swift</option>
            </select>
            <textarea placeholder="Comments...." name="" id="" cols="30" rows="5" className="rounded-xl text-gray-800 shadow-sm border-gray-400"></textarea>
            
        </form>
        <button className="inline-flex items-center space-x-2 hover:bg-secondary transition-all bg-primary px-3 py-1.5 rounded-xl">
                    <img src={saveIcon} className="w-4 h-4" alt="" />
                    <span className="text-white font-semibold">Save</span>
                </button>
      
    </div>
  )
}
