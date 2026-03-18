import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, ClipboardList, UtensilsCrossed, BarChart3, UserCircle, LogOut } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: '/admin', name: 'Beranda', icon: Home },
    { path: '/admin/orders', name: 'Kelola Pesanan', icon: ClipboardList },
    { path: '/admin/menu', name: 'Kelola Menu', icon: UtensilsCrossed },
    { path: '/admin/reports', name: 'Laporan Penjualan', icon: BarChart3 },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-[240px] bg-white flex flex-col pt-10 z-50 shadow-lg">
      {/* Logo */}
      <div className="px-8 mb-10">
        <h1 className="text-xl font-black text-[#1A202C] tracking-tight text-left">
          BosMentai<span className="text-[#B34949]">.</span>
        </h1>
      </div>

      {/* Menu Navigasi */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <button 
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-[20px] transition-all group duration-200 ${
                active 
                  ? 'bg-[#B34949] text-white shadow-lg shadow-red-200' 
                  : 'text-[#718096] hover:bg-gray-50 hover:shadow-md hover:scale-[1.02]'
              }`}
            >
              <Icon size={18} strokeWidth={active ? 2.5 : 2} className={`shrink-0 ${active ? '' : 'group-hover:text-[#B34949]'}`} />
              <span className="text-sm font-bold whitespace-nowrap">{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Bagian Bawah */}
      <div className="px-4 pb-10 space-y-1">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-[#718096] hover:bg-gray-50 rounded-xl transition-all">
          <UserCircle size={18} className="shrink-0" />
          <span className="text-sm font-semibold whitespace-nowrap">Beralih ke user</span>
        </button>

        <button 
          onClick={() => navigate('/login')} 
          className="w-full flex items-center gap-3 px-4 py-3 text-[#718096] hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
        >
          <LogOut size={18} className="shrink-0" />
          <span className="text-sm font-semibold whitespace-nowrap">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
