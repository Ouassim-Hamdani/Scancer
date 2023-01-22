import { createContext, useReducer } from 'react'

export const ScansContext = createContext()

export const scanReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SCANS':
      return { 
        scans: action.payload 
      }
    case 'CREATE_SCAN':
      return { 
        scans: [action.payload, ...state.scans] 
      }
    case 'DELETE_SCAN':
      return { 
        scans: state.scans.filter(id => id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const ScansContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(scanReducer, { 
    scans: []
  })
  
  return (
    <ScansContext.Provider value={{ ...state, dispatch }}>
      { children }
    </ScansContext.Provider>
  )
}