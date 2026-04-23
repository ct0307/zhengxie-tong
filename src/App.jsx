import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import StudioList from './pages/StudioList';
import StudioDetail from './pages/StudioDetail';
import CategoryPage from './pages/CategoryPage';
import About from './pages/About';
import Gallery from './pages/Gallery';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studios" element={<StudioList />} />
          <Route path="/studios/:id" element={<StudioDetail />} />
          <Route path="/category/:type" element={<CategoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
