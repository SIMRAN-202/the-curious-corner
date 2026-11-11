
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ArticleSection from "./components/ArticleSection";
import Footer from "./components/Footer";

import About from "./pages/About";
import ArticlePage from "./pages/ArticlePage";
import AllArticles from "./pages/AllArticles";

function Home() {
  return (
    <>
      <Hero />
      <ArticleSection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route
          path="/articles/:slug"
          element={<ArticlePage />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
