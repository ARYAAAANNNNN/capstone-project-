import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 flex items-center gap-5 hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Gambar Item - Lebih Besar */}
      <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info Item */}
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-gray-800 text-lg truncate">
          {item.name}
        </h4>
        <span className="text-sm text-gray-500 font-medium">{item.category}</span>
      </div>

      {/* Tombol quantity - Lebih Besar */}
      <div className="flex items-center gap-3 bg-gray-50 rounded-2xl p-2">
        <button
          onClick={() => decrementQuantity(item.id)}
          className="w-10 h-10 rounded-full bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>

        <span className="w-10 text-center font-bold text-gray-800 text-xl">
          {item.quantity}
        </span>

        <button
          onClick={() => incrementQuantity(item.id)}
          className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Tombol Hapus - Lebih Besar */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="w-12 h-12 rounded-full bg-red-50 hover:bg-red-100 text-red-500 flex items-center justify-center transition-colors flex-shrink-0"
        title="Hapus item"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;

