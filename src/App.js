import './App.css';
import {Dashboard} from "./components/pages/Dashboard"
import {Scan} from "./components/pages/Scan"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { ChatInput } from './components/message-components/ChatInput';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatInput/>}></Route>
        <Route path="/patients" element={<Scan/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
