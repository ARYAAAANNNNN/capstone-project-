import React, { useState } from 'react';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import Button from '../components/Button'; // Menggunakan komponen Button yang kita buat tadi

const Menu = () => {
  const [showModal, setShowModal] = useState(false);
  const [menuList, setMenuList] = useState([
    { id: 1, name: 'Siomay Ayam Premium', price: 'Rp 15.000', category: 'Dimsum', stock: 50 },
    { id: 2, name: 'Mentai Salmon Special', price: 'Rp 45.000', category: 'Mentai', stock: 20 },
    { id: 3, name: 'Dimsum Mozzarella', price: 'Rp 20.000', category: 'Dimsum', stock: 35 },
  ]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Menu Management</h1>
          <p className="text-gray-500 text-sm">Atur daftar makanan dan harga Bos Mentai</p>
        </div>
        
        {/* Tombol Add New dengan warna tema */}
        <button 
          onClick={() => setShowModal(true)}
          className="bg-[#B34949] hover:bg-[#8B2323] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-red-100 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Tambah Menu
        </button>
      </div>

      {/* Tabel Menu Modern */}
      <div className="bg-white shadow-sm rounded-2xl overflow-hidden border border-gray-100">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Nama Menu</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Kategori</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Harga</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Stok</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-gray-400 uppercase tracking-widest">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-50">
            {menuList.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-bold text-gray-900">{item.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase ${
                    item.category === 'Mentai' ? 'bg-orange-100 text-orange-600' : 'bg-red-100 text-[#B34949]'
                  }`}>
                    {item.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-700">{item.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.stock} pcs</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-all"><Edit2 className="w-4 h-4" /></button>
                  <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL POP-UP (GAMBAR 4 - TAMBAH MENU) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-[2rem] p-8 max-w-md w-full shadow-2xl relative overflow-hidden">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute right-6 top-6 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">Tambah Menu</h2>
            <p className="text-sm text-gray-400 mb-8 font-medium italic">Pastikan data menu sudah benar</p>
            
            <div className="space-y-5">
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Nama Menu :</label>
                <input type="text" placeholder="Masukkan nama menu" className="w-full mt-1 p-3 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-red-200 text-sm transition-all" />
              </div>
              
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Harga :</label>
                <input type="text" placeholder="Rp 20.000" className="w-full mt-1 p-3 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-red-200 text-sm transition-all" />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Kategori :</label>
                <select className="w-full mt-1 p-3 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-red-200 text-sm appearance-none transition-all cursor-pointer">
                  <option>Dimsum</option>
                  <option>Mentai</option>
                  <option>Minuman</option>
                </select>
              </div>
            </div>

            <div className="mt-10 flex gap-3">
              <button 
                onClick={() => setShowModal(false)}
                className="flex-1 py-3 text-sm font-bold text-gray-400 hover:bg-gray-50 rounded-full transition-all"
              >
                BATAL
              </button>
              <button 
                className="flex-1 py-3 bg-[#B34949] hover:bg-[#8B2323] text-white text-sm font-bold rounded-full shadow-lg shadow-red-100 transition-all active:scale-95"
              >
                SIMPAN MENU
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;