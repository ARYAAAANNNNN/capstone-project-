import { useCart } from '../context/CartContext';

const Header = () => {
  const { tableNumber } = useCart();

  return (
    <header className="bg-gradient-to-r from-red-700 to-red-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="w-full px-4 py-3 flex items-center max-w-7xl mx-auto">
        {/* Logo dan Nama Restoran */}
        <div className="flex items-center gap-3 ml-2">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
          </div>
          <div>
          </div>
        </div>
      </div>
    </header>
  );  
};

export default Header;