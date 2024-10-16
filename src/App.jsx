import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import './styles/App.scss';


const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const TvSeries = lazy(() => import("./pages/TvSeries"));
const Watch = lazy(() => import("./pages/Watch"));

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <header>
          <Header />
        </header>


        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv-series" element={<TvSeries />} />
            <Route path="/watch/:animeId" element={<Watch />} />
          </Routes>
        </main>


        <footer>
          <Footer />
        </footer>
      </Router>


    </Suspense>
  )
}

export default App
