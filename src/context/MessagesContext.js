import { createContext, useReducer } from 'react'

export const MessagesContext = createContext()

export const messageReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MESSAGES':
      return { 
        messages: action.payload 
        
      }
      
    case 'CREATE_MESSAGE':
      return { 
        messages: [action.payload, ...state.messages] 
      }
    case 'DELETE_MESSAGE':
      return { 
        messages: state.messages.filter(item => item._id !== action.payload) 
      }
    default:
      return state
  }

}

export const MessagesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messageReducer, { 
    messages: []
  })
  return (
    <MessagesContext.Provider value={{ ...state, dispatch }}>
      { children }
    </MessagesContext.Provider>
  )
}