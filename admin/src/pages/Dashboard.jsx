import React from "react";
import { Search } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="bg-[#F8F9FA] ml-[240px] w-[calc(100%-240px)] pl-0 pr-10 pt-6 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center w-full mb-10">
        <h1 className="text-3xl font-extrabold text-[#1A202C] leading-tight">
          Selamat Datang, Admin!
        </h1>
        <div className="relative w-[350px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Cari pesanan, menu, atau pelanggan..."
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-sm"
          />
        </div>
      </header>

      {/* Stat Cards - Clean Grid - Dempet Sidebar */}
      <div className="-ml-2 grid grid-cols-4 gap-6 w-full">

        {/* 1. Pesanan - Maroon */}
        <div className="min-h-[190px] p-6 bg-[#A34949] rounded-[28px] text-white flex flex-col justify-between shadow-lg">
          <div className="flex-grow">
            <p className="text-[13px] font-semibold leading-[1.1] mb-2">
              Total Pesanan <br /> Hari Ini
            </p>
            <h2 className="text-5xl font-black">125</h2>
          </div>
          <div>
            <div className="w-full h-px bg-white/30 mb-3"></div>
            <p className="text-[11px] font-light">
              pesanan <span className="font-semibold">+15 dari kemarin</span>
            </p>
          </div>
        </div>

        {/* 2. Menu - Gold */}
        <div className="min-h-[190px] p-6 bg-[#CD9245] rounded-[28px] text-white flex flex-col justify-between shadow-lg">
          <div className="flex-grow">
            <p className="text-[13px] font-semibold leading-[1.1] mb-2">
              Total Menu
            </p>
            <h2 className="text-5xl font-black">64</h2>
          </div>
          <div>
            <div className="w-full h-px bg-white/30 mb-3"></div>
            <p className="text-[11px] font-light">
              Menu aktif di restoran
            </p>
          </div>
        </div>

        {/* 3. Pengunjung - Red */}
        <div className="min-h-[190px] p-6 bg-[#FF2E2E] rounded-[28px] text-white flex flex-col justify-between shadow-lg">
          <div className="flex-grow">
            <p className="text-[13px] font-semibold leading-[1.1] mb-2">
              Total Pengunjung
            </p>
            <h2 className="text-5xl font-black">968</h2>
          </div>
          <div>
            <div className="w-full h-px bg-white/30 mb-3"></div>
            <div className="grid grid-cols-2 gap-4 text-[11px] font-light">
              <div>
                <div>Hari ini</div>
                <div className="font-semibold text-sm">125</div>
              </div>
              <div className="text-right">
                <div>Minggu ini</div>
                <div className="font-semibold text-sm">764</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Pendapatan - Green */}
        <div className="min-h-[190px] p-6 bg-[#7DA05E] rounded-[28px] text-white flex flex-col justify-between shadow-lg">
          <div className="flex-grow">
            <p className="text-[13px] font-semibold leading-[1.1] mb-2">
              Pendapatan Hari Ini
            </p>
            <h2 className="text-[28px] font-black tracking-[-0.02em]">
              Rp 2.350.000
            </h2>
          </div>
          <div>
            <div className="w-full h-px bg-white/30 mb-3"></div>
            <p className="text-[11px] font-light">
              Total dari pesanan hari ini
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

