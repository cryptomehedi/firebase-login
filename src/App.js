import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Profile from './Components/HomeProfile/Profile';
import Login from './Components/LoginRed/Login';
import Reg from './Components/LoginRed/Reg';
import Nav from './Components/Shared/Nav';
import UseAuth from './Components/Shared/UseAuth'
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/HomeProfile/Home';
import NotFound from './Components/Shared/NotFound';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<UseAuth><Home/></UseAuth>} />
        <Route path='/profile' element={<UseAuth><Profile/></UseAuth>} />
        <Route path='/registration' element={<Reg/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
