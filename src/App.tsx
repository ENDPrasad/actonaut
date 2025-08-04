
import './App.css'
import { Route, Routes } from 'react-router';
import LandingPage from './pages/LandingPage/LangingPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import { ConceptPage } from './components/categories/ConceptPage';
import HomePage from './concepts/ExamplePage';
import ConceptOutlinePage from './pages/ConceptPage/ConceptPage';
import ChallengesPage from './pages/challenges/ChallengesPage';
import BlogPage from './components/blogs/pages/BlogPage';
import Blogs from './components/blogs/pages/Blogs';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/explore' element={<CategoriesPage />}/>
        <Route path='/example' element={<HomePage />}/>
        <Route path='/explore/:slug' element={<ConceptOutlinePage><ConceptPage /></ConceptOutlinePage>}/>
        <Route path="/challenges" element={<ChallengesPage />} />
            {/* <Route path="/challenge/:challengeId" element={<ChallengePage />} /> */}
            <Route path="/blogs" element={<Blogs />} />
<Route path="/blog/:slug" element={<BlogPage />} />
<Route path='*' element={<NotFound />}/>

      </Routes>
    </>
  )
}

export default App
