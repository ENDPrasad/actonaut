
import './App.css'
import { Route, Routes } from 'react-router';
import LandingPage from './pages/LandingPage/LangingPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
      </Routes>
    </>
  )
}

export default App
