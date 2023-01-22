import { MessagesContext } from "../context/MessagesContext"
import { useContext } from "react"

export const useMessagesContext = () => {
  const context = useContext(MessagesContext)

  if(!context) {
    throw Error('Error')
  }

  return context
}