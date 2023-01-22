import { createContext, useReducer } from 'react'

export const MsgContext = createContext()

export const msgReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MSG':
      return { 
        msg: action.payload 
        
      }
      
    case 'CREATE_MSG':
      return { 
        msg: [action.payload, ...state.msg] 
      }
    case 'DELETE_MSG':
      return { 
        msg: state.msg.filter(item => item._id !== action.payload) 
      }
    default:
      return state
  }

}

export const MsgContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(msgReducer, { 
    msg: []
  })
  return (
    <MsgContext.Provider value={{ ...state, dispatch }}>
      { children }
    </MsgContext.Provider>
  )
}