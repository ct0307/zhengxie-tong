import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import StudioList from './pages/StudioList';
import StudioDetail from './pages/StudioDetail';
import CategoryPage from './pages/CategoryPage';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Boundary from './pages/Boundary';
import PracticeCenter from './pages/PracticeCenter';
import Plans from './pages/Plans';

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
          <Route path="/boundary" element={<Boundary />} />
          <Route path="/practice-center" element={<PracticeCenter />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
