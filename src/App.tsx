import "./App.css";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage/LangingPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import { ConceptPage } from "./components/categories/ConceptPage";
import ConceptOutlinePage from "./pages/ConceptPage/ConceptPage";
// import ChallengesPage from "./pages/challenges/ChallengesPage";
import BlogPage from "./components/blogs/pages/BlogPage";
import Blogs from "./components/blogs/pages/Blogs";
import NotFound from "./pages/NotFound";
import ExplorePage from "./pages/Explore/ExplorePage";
import { ChallengeDetailPage } from "./components/challenges/ChallengeDetailPage";
import ChallengesPage from "./pages/challenges/ChallengesPage";
// import { ChallengesPage } from "./components/challenges/ChallengesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/concepts" element={<CategoriesPage />} />
        {/* <Route path='/example' element={<HomePage />}/> */}
        <Route
          path="/concepts/:slug"
          element={
            <ConceptOutlinePage>
              <ConceptPage />
            </ConceptOutlinePage>
          }
        />
        {/* <Route path="/challenges" element={<ChallengesPage />} /> */}
        <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/challenge-detail/:challengeId" element={<ChallengeDetailPage />} />
        {/* <Route path="/challenge/:challengeId" element={<ChallengePage />} /> */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
