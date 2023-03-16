import logo from './logo.svg';
import './App.css';


//components
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import RoomSane from './components/RoomSane';
import AllUser from './components/AllUsers';
import EditUser from './components/EditUser';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
     <NavBar />
     <Routes>
     <Route path='/' element={<RoomSane/>}/>
     <Route path='/add' element={<AddUser/>}/>
     <Route path='/all' element={<AllUser/>}/>
     <Route path='/edit/:id' element={<EditUser/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
