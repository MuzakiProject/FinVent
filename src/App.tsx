import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Dashboard from './pages/dashboard';
import Product from './pages/product';

function App ()  {
  return (
    <Router>
      <div className='grid  grid-cols-[255px_1fr] h-screen'>
        <div className="side">
          <Sidebar/>
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
