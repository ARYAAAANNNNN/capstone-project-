import React from 'react';
import { Search } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="bg-[#F8F9FA] ml-64 p-8 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-[#1A202C]">
          Selamat Datang, Admin !
        </h1>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Cari menu atau pesanan..."
            className="pl-10 pr-4 py-2 bg-white rounded-lg border border-gray-200 w-[260px] text-sm focus:outline-none focus:ring-2 focus:ring-[#B34949]"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-6">
        <div className="bg-[#A94442] p-6 rounded-3xl text-white shadow-sm">
          <h5 className="text-xs font-semibold mb-2 uppercase tracking-wide text-white/80">
            Pesanan
          </h5>
          <h2 className="text-3xl font-extrabold mb-4">125</h2>
          <div className="w-full h-[1px] bg-white/30 mb-3"></div>
          <div className="flex justify-between text-sm text-white/80">
            <span>kemarin</span>
            <span className="font-bold text-green-200">+15%</span>
          </div>
        </div>

        <div className="bg-[#D19446] p-6 rounded-3xl text-white shadow-sm">
          <h5 className="text-xs font-semibold mb-2 uppercase tracking-wide text-white/80">
            Menu
          </h5>
          <h2 className="text-3xl font-extrabold mb-4">64</h2>
          <div className="w-full h-[1px] bg-white/30 mb-3"></div>
          <p className="text-sm text-white/80">Aktif</p>
        </div>

        <div className="bg-[#FF2E2E] p-6 rounded-3xl text-white shadow-sm">
          <h5 className="text-xs font-semibold mb-2 uppercase tracking-wide text-white/80">
            Pengunjung
          </h5>
          <h2 className="text-3xl font-extrabold mb-4">968</h2>
          <div className="w-full h-[1px] bg-white/30 mb-3"></div>
          <div className="grid grid-cols-2 text-sm text-white/80">
            <div>
              <span>Hari</span>
              <span className="block font-bold text-white">125</span>
            </div>
            <div className="text-right">
              <span>Mgg</span>
              <span className="block font-bold text-white">764</span>
            </div>
          </div>
        </div>

        <div className="bg-[#82A961] p-6 rounded-3xl text-white shadow-sm">
          <h5 className="text-xs font-semibold mb-2 uppercase tracking-wide text-white/80">
            Pendapatan
          </h5>
          <h2 className="text-3xl font-extrabold mb-4">Rp 2.350.000</h2>
          <div className="w-full h-[1px] bg-white/30 mb-3"></div>
          <p className="text-sm text-white/80">Hari ini</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;