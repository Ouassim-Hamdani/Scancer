import './App.css';
import {Dashboard} from "./components/pages/Dashboard"
import {Scan} from "./components/pages/Scan"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { MessagePage } from './components/pages/MessagePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/patients" element={<Scan/>}></Route>
        <Route path='/messages' element={<MessagePage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
