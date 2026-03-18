import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Fungsi untuk mengubah path URL menjadi judul (misal: /orders -> Orders)
  const getPageTitle = () => {
    const path = location.pathname.split('/')[1];
    if (!path) return 'Admin Panel';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <nav className="bg-white border-b border-gray-100 p-4 px-8 flex justify-between items-center sticky top-0 z-10">
      {/* Judul Halaman Dinamis */}
      <div className="text-xl font-bold text-gray-800 tracking-tight">
        {getPageTitle()}
      </div>

      <div className="flex items-center space-x-6">
        {/* Kolom Pencarian */}
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Cari pesanan..." 
            className="bg-gray-50 text-sm pl-10 pr-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-red-100 w-64 transition-all"
          />
        </div>

        {/* Notifikasi */}
        <button className="relative p-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Profil Admin */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-gray-800">Admin Bos Mentai</p>
            <p className="text-[10px] text-gray-400 font-medium uppercase">Super Admin</p>
          </div>
          {/* Warna Biru saya ganti ke Merah Bata agar matching */}
          <div className="w-10 h-10 bg-[#B34949] rounded-xl flex items-center justify-center text-white shadow-md shadow-red-100">
            <User className="w-6 h-6" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;