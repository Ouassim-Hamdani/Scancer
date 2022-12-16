import './App.css';
import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import {Card} from "./components/Card"
let name="Anis ki zabi"
function App() {
  return (
    <div className="App bg-white h-screen">
        <NavBar></NavBar>
        <SideBar></SideBar>
        <div className='grid grid-cols-4 grid-rows-2 h-2/3  gap-10 items-end ml-36 mt-28 w-5/6'>
          <Card className="col-span-1"></Card>
          <Card className="col-span-1"></Card>
          <div className='shadow-xl col-span-2'>{name}</div>
          
        </div>
        
    </div>
  );
}

export default App;
