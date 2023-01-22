import scanCancer from "../../assets/cancer.png"
import downloadIcon from "../../assets/downloadIcon.svg"
import saveIcon from "../../assets/saveIcon.svg"

export const Result = () => {
  return (
    <div className="flex flex-row justify-between h-full items-center space-x-10">
        <img src={scanCancer} alt="" className="rounded-xl h-full"/>
        <div className="shadow-2xl rounded-2xl px-6 py-8 border-gray-200 border flex flex-col space-y-8 items-center">
            <span className="text-green-500 text-3xl font-semibold">Positive</span>
            <span className="text-gray-700">Congratulations you reached level 4 cancer!</span>
            <div className="flex flex-col space-y-4 items-center">
                <button className="inline-flex items-center space-x-2 hover:bg-secondary transition-all bg-primary px-3 py-1.5 rounded-xl">
                    <img src={downloadIcon} className="w-4 h-4" alt="" />
                    <span className="text-white font-semibold">Download</span>
                </button>
                <button className="inline-flex items-center space-x-2 hover:bg-secondary transition-all bg-primary px-3 py-1.5 rounded-xl">
                    <img src={saveIcon} className="w-4 h-4" alt="" />
                    <span className="text-white font-semibold">Save</span>
                </button>
            </div>
            
        </div>
    </div>
  )
}
