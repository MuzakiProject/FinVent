import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/widget/sidebar';
import Footer from './components/widget/footer';
import Dashboard from './pages/dashboard';
import Product from './pages/product';
import Transaction from './pages/transaction';
import Financialreport from './pages/financial-report';

function App ()  {
  return (
    <Router>
      <div className='md:grid  md:grid-cols-[255px_1fr] h-screen'>
        <div className="side">
          <Sidebar/>
        </div>
        <div className="main bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/financial-report" element={<Financialreport />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
