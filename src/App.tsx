import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layout/dashboard';
import CashierLayout from './layout/cashier';
import Dashboard from './pages/dashboard';
import Transaction from './pages/transaction';
import Financialreport from './pages/financial-report';
import Product from './pages/product';
import Stockreport from './pages/stock-report';
import Activity from './pages/activity';
import Order from './pages/order';
import Transactionorder from './pages/transaction-order';

function App ()  {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/transaction" element={<Transaction />} />
              <Route path="/financial-report" element={<Financialreport />} />
              <Route path="/product" element={<Product />} />
              <Route path="/stock-report" element={<Stockreport />} />
              <Route path="/activity" element={<Activity />} />
            </Route>

            <Route path="/cashier" element={<CashierLayout />}>
              <Route index element={<Order />} />
              <Route path="transactionorder" element={<Transactionorder />} />
            </Route>
          </Routes>
    </Router>
  );
};

export default App;
