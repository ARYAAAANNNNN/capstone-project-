import { useState, useEffect } from 'react';
import Button from '../components/Button';
import { FileDown, Eye, XCircle, Search } from 'lucide-react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders([
      { id: '#1234', customer: 'John Doe', items: 'Mentai Salmon x2, Siomay x1', total: 'Rp 105.000', status: 'completed' },
      { id: '#1233', customer: 'Jane Smith', items: 'Hakau Premium x3', total: 'Rp 60.000', status: 'pending' },
      { id: '#1232', customer: 'Bob Wilson', items: 'Lumpia Ayam x4', total: 'Rp 32.000', status: 'cancelled' },
    ]);
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Orders</h1>
          <p className="text-sm text-gray-500 font-medium">Pantau dan kelola pesanan masuk pelanggan</p>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Cari ID atau nama..." 
              className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-100 w-full md:w-64"
            />
          </div>
          <Button className="gap-2 shadow-sm">
            <FileDown className="w-4 h-4" />
            Export CSV
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Order ID</th>
                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Customer</th>
                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Items</th>
                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Total</th>
                <th className="px-6 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-5 text-right text-xs font-bold text-gray-400 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="px-6 py-5 whitespace-nowrap text-sm font-bold text-gray-900">{order.id}</td>
                  <td className="px-6 py-5 whitespace-nowrap text-sm font-medium text-gray-700">{order.customer}</td>
                  <td className="px-6 py-5 text-sm text-gray-500 max-w-xs truncate">{order.items}</td>
                  <td className="px-6 py-5 whitespace-nowrap text-sm font-bold text-[#B34949]">{order.total}</td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider ${
                      order.status === 'completed' ? 'bg-green-100 text-green-700' :
                      order.status === 'pending' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all" title="Detail">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all" title="Batalkan">
                        <XCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;