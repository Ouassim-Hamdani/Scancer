import './App.css';
import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import  {Home} from './pages/Home/Home';
import DoctorPatients from './pages/Doctor-Patients/DoctorPatients'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReportScan from './pages/ReportScan/ReportScan';
import Settings from './pages/Settings/Settings';
import Login from './pages/Login/Login';

function App() {
  return (
    /*<Router>
      <NavBar></NavBar>
      <div>
        <SideBar></SideBar>
        <Routes>

          <Route exact path="/" element={<Home/>}>
          </Route>
          
          <Route path="/user" element={<DoctorPatients/>}>
          </Route>
          
          <Route path="/scan" element={<ReportScan/>}>
          </Route>

          <Route path='/setting' element={<Settings />}>

          </Route>
        
        </Routes> 
      </div>
    </Router>*/
    <Login />
  );
}

export default App;
