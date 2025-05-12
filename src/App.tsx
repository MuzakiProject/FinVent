import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/widget/sidebar';
import Footer from './components/widget/footer';
import Dashboard from './pages/dashboard';
import Product from './pages/product';

function App ()  {
  return (
    <Router>
      <div className='md:grid  md:grid-cols-[255px_1fr] h-screen bg-gray-100'>
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
