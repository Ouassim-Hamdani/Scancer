import { MsgContext } from "../context/MsgContext"
import { useContext } from "react"

export const useMsgContext = () => {
  const context = useContext(MsgContext)

  if(!context) {
    throw Error('Error')
  }

  return context
}