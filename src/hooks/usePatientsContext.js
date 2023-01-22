import { PatientsContext } from "../context/PatientsContext"
import { useContext } from "react"

export const usePatientsContext = () => {
  const context = useContext(PatientsContext)

  if(!context) {
    throw Error('Error')
  }

  return context
}