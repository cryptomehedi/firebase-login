import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Profile from './Components/HomeProfile/Profile';
import Login from './Components/LoginRed/Login';
import Reg from './Components/LoginRed/Reg';
import Nav from './Components/Shared/Nav';
import UseAuth from './Components/Shared/UseAuth'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/profile' element={<UseAuth><Profile/></UseAuth>} />
        <Route path='/reg' element={<Reg/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <ToastContainer autoClose={3000}/>
    </div>
  );
}

export default App;
