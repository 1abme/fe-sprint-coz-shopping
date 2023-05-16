import './App.css';
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListPage from './pages/ProductListPage';
import BookmarkPage from './pages/BookmarkPage';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';

function App() {
  return (
<BrowserRouter>
      <Header/>
      <Routes>
        <Route
          path="/" element={<MainPage/>}
        />
        <Route
          path="/products/list"
          element={<ProductListPage/>}
        />
        <Route
          path="/bookmark"
          element={<BookmarkPage/>}
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;