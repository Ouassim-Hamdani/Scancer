import './App.css';
import {Dashboard} from "./components/pages/Dashboard"
import {Scan} from "./components/pages/Scan"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { MessagePage } from './components/pages/MessagePage';
import { ScansPage } from './components/pages/ScansPage';
import { PatientsPage } from './components/pages/PatientsPage';
import { DoctorsPage } from './components/pages/DoctorsPage';
import { AdminDashboard } from './components/pages/AdminDashboard';
import { AdminPatients } from './components/pages/AdminPatients';
import { PatientPage } from './components/pages/PatientPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/patients" element={<PatientsPage/>}></Route>
        <Route path='/messages' element={<MessagePage/>}></Route>
        <Route path='/scans' element={<ScansPage/>}></Route>
        <Route path='/scan' element={<Scan/>}></Route>
        <Route path='/doctors' element={<DoctorsPage/>}></Route>        
        <Route path='/admin' element={<AdminDashboard/>}></Route>
        <Route path='/patients-admin' element={<AdminPatients/>}></Route>
        <Route path='/patient/1' element={<PatientPage/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
