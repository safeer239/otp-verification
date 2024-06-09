import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import VerifyCode from './Components/VerifyCode';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/verify' element={<VerifyCode/>} />


      </Routes>
    </>
  );
}

export default App;
