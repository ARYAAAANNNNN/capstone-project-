import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  // 1. Siapkan Saklar (State)
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 2. Fungsi saat tombol MASUK diklik
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true); // Munculkan "Memuat..."

    // Tunggu 2 detik untuk proses Memuat
    setTimeout(() => {
      setIsLoading(false); // Hilangkan "Memuat..."
      setIsSuccess(true);  // Munculkan "Selesai"

      // Tunggu 1.5 detik agar tanda Selesai kelihatan, lalu pindah halaman
      setTimeout(() => {
        setIsSuccess(false);
        navigate('/admin');
      }, 1500);

    }, 2000); // Ini kurung penutup yang tadi bikin merah
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F4F6] p-4">
      {/* Kartu Login */}
      <div className="bg-white w-full max-w-lg rounded-[30px] shadow-sm overflow-hidden relative pb-12">
        
        {/* 3. Tampilan Lapisan (Overlay) Loading & Selesai */}
        {(isLoading || isSuccess) && (
          <div className="absolute inset-0 bg-white/90 z-50 flex items-center justify-center">
            <div className="text-center">
              {isLoading ? (
                /* Tampilan Memuat */
                <h1 className="text-4xl font-black text-black">Memuat ...</h1>
              ) : (
                /* Tampilan Selesai (Lingkaran Centang Merah) */
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#B34949] rounded-full flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h1 className="text-3xl font-black text-black">Selesai</h1>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Bagian Visual Atas (Merah Gelombang) */}
        <div className="relative h-32 bg-gradient-to-r from-[#B34949] to-[#FF5F5F]">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,234.7C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>

        {/* Form Isi */}
        <div className="px-12 pt-4 text-center">
          <h2 className="text-3xl font-bold text-[#1A202C] mb-2">Masuk</h2>
          <p className="text-gray-500 text-sm mb-10">Masuk untuk melanjutkan pesanan Anda</p>

          <form onSubmit={handleLogin} className="space-y-6 text-left">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 mb-2 tracking-widest uppercase ml-2">Email :</label>
              <input type="email" placeholder="abc@gmail.com" className="w-full px-6 py-4 bg-[#F0F2F5] border-none rounded-2xl text-gray-600 outline-none" required />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-400 mb-2 tracking-widest uppercase ml-2">Kata Sandi :</label>
              <input type="password" placeholder="............" className="w-full px-6 py-4 bg-[#F0F2F5] border-none rounded-2xl text-gray-600 outline-none" required />
              <div className="text-right mt-2">
                <span className="text-[10px] text-gray-400 cursor-pointer">Lupa Kata Sandi?</span>
              </div>
            </div>

            <div className="pt-6">
              <button type="submit" className="w-full bg-[#B34949] text-white font-bold py-4 rounded-2xl shadow-lg uppercase tracking-widest text-sm">
                Masuk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;