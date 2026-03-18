import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import DashboardLayout from './layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Menu from './pages/Menu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="menu" element={<Menu />} />
          <Route
            path="reports"
            element={
              <div className="p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  Laporan Penjualan
                </h1>
                <p className="text-gray-600">
                  Halaman laporan penjualan akan dikembangkan lebih lanjut.
                </p>
              </div>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;