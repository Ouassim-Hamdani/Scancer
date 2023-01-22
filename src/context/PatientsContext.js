<<<<<<< HEAD
import { createContext, useReducer } from 'react'

export const PatientsContext = createContext()

export const patientReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PATIENTS':
      return { 
        patients: action.payload 
        
      }
      
    case 'CREATE_PATIENT':
      return { 
        patients: [action.payload, ...state.patients] 
      }
    case 'DELETE_PATIENT':
      return { 
        patients: state.patients.filter(item => item._id !== action.payload) 
      }
    default:
      return state
  }

}

export const PatientsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(patientReducer, { 
    patients: []
  })
  console.log("state = ", state)
  return (
    <PatientsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </PatientsContext.Provider>
  )
=======
import { createContext, useReducer } from 'react'

export const PatientsContext = createContext()

export const patientReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PATIENTS':
      return { 
        patients: action.payload 
        
      }
      
    case 'CREATE_PATIENT':
      return { 
        patients: [action.payload, ...state.scans] 
      }
    case 'DELETE_PATIENT':
      return { 
        patients: state.patients.filter(item => item._id !== action.payload) 
      }
    default:
      return state
  }

}

export const PatientsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(patientReducer, { 
    patients: []
  })
  console.log("state = ", state)
  return (
    <PatientsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </PatientsContext.Provider>
  )
>>>>>>> e1ff1a1962c9e8d3570d260a5d0537a9a88df71d
}