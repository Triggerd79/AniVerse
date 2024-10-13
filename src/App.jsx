import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import './styles/App.scss';

const Home = lazy(() => import("./pages/Home"));

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
          </Routes>
        </main>
      </Router>
    </Suspense>
  )
}

export default App
