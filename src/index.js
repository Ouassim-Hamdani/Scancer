import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './context/authContext';
import { ScansContextProvider } from './context/ScansContext';
import { PatientsContextProvider } from './context/PatientsContext';
import { MessagesContextProvider } from './context/MessagesContext';
import { MsgContextProvider } from './context/MsgContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
    <AuthContextProvider> 
    <ScansContextProvider>
    <PatientsContextProvider>
    <MessagesContextProvider>
    <MsgContextProvider>
    <App />
    </MsgContextProvider>
    </MessagesContextProvider>
    </PatientsContextProvider>
    </ScansContextProvider>
    </AuthContextProvider>
    
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
