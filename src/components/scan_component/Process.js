import scanCancer from "../../assets/cancer.png"
import processIcon from "../../assets/process.svg"
export const Process = () => { 
  return (
    <div className="flex flex-col justify-center items-center h-full space-y-4">
        <img src={scanCancer} alt="" className="rounded-xl h-full"/>
        <button className="inline-flex items-center space-x-2 hover:bg-secondary transition-all bg-primary px-3 py-1.5 rounded-xl">
            <img src={processIcon} className="w-4 h-4" alt="" />
            <span className="text-white font-semibold">Process</span>
        </button>
    </div>
  )
}
