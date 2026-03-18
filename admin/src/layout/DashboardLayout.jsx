import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-[240px]">
        <Navbar />
        <main className="flex-1 p-6 bg-[#F8F9FA]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
