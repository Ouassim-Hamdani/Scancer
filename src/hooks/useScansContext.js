import { ScansContext } from "../context/ScansContext"
import { useContext } from "react"

export const useScansContext = () => {
  const context = useContext(ScansContext)

  if(!context) {
    throw Error('Error')
  }

  return context
}