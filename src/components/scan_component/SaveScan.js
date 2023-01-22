import saveIcon from "../../assets/saveIcon.svg"
//import { patientsList } from "../../constants/constants"
import { useState ,useEffect} from 'react'
export const SaveScan = () => {
    
    const [file, setFile] = useState('')
    const [comment, setComment] = useState('')
    const [patient, setPatient] = useState('')
    const [patientsList, setPatientList] = useState(null)
    const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await fetch('http://localhost:5000/api/patients')
      const json = await response.json()

      if (response.ok) {
        setPatientList(json)
      }
    }

    fetchPatients()
  }, [])
  console.log(patientsList)
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const scan = {file, comment, patient}
        console.log(scan)
        const response = await fetch('http://localhost:5000/api/scans', {
          method: 'POST',
          body: JSON.stringify(scan),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const json = await response.json()
    
        if (!response.ok) {
            setError(json.error)
          }
          if (response.ok) {
         
            console.log('new scan added:', json)
          }
      }
  return (
    <div className="shadow-2xl rounded-2xl flex items-center space-y-8 flex-col p-8 border-gray-200 border">
        <span className="text-xl font-semibold text-gray-800">Save Scan</span>
        <form action="" className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input  value={file} onChange={(e) => setFile(e.target.value)}type="text" placeholder="Scan_523_698.pdf" className="rounded-xl text-gray-800 shadow-sm border-gray-400"/>
            <select value={patient} onChange={(e) => setPatient(e.target.value)} name="patients" id="patients" className="rounded-xl text-gray-800 shadow-sm border-gray-400 ">
                <option value="1">Select Patient</option>
                {
                    (patientsList && patientsList.map((pat)=>{
                        return (
                            <option value={pat._id} key={pat.id}>{pat.firstName+' '+pat.familyName}</option>
                        );
                    }))
                }
                
            </select>
            <textarea  value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Comments...." name="" id="" cols="30" rows="5" className="rounded-xl text-gray-800 shadow-sm border-gray-400"></textarea>
            <button className="inline-flex items-center space-x-2 hover:bg-secondary transition-all bg-primary px-3 py-1.5 rounded-xl">
                    <img src={saveIcon} className="w-4 h-4" alt="" />
                    <span className="text-white font-semibold">Save</span>
                </button>
        </form>
        
      
    </div>
  )
}
