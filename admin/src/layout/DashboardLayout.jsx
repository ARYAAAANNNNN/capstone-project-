import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 w-full flex flex-col ml-[240px]">
        <main className="flex-1 w-full bg-[#F8F9FA]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

