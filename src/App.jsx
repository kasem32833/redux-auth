import './App.css'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Header from './components/Header';
function App() {
  
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
        <ToastContainer></ToastContainer>

    </>
  )
}

export default App
