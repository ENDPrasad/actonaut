
import './App.css'
import { Route, Routes } from 'react-router';
import LandingPage from './pages/LandingPage/LangingPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import { ConceptPage } from './components/categories/ConceptPage';
import HomePage from './concepts/ExamplePage';
import ConceptOutlinePage from './pages/ConceptPage/ConceptPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/explore' element={<CategoriesPage />}/>
        <Route path='/example' element={<HomePage />}/>
        <Route path='/explore/:slug' element={<ConceptOutlinePage><ConceptPage /></ConceptOutlinePage>}/>
      </Routes>
    </>
  )
}

export default App
