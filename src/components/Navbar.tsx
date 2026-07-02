import { useState } from 'react';
import { Search, User, Heart, ChevronDown, Menu, X, KeySquare, LogOut } from 'lucide-react';
import EditableLogo from './EditableLogo';
import EditableText from './EditableText';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);
  
  const { role, login, logout } = useAuth();

  const navLinks = [
    { name: 'Trang chủ', hasDropdown: false },
    { name: 'Giới thiệu', hasDropdown: false },
    { name: 'Nội Thất nhà ở', hasDropdown: false },
    { name: 'Nội Thất Văn phòng', hasDropdown: false },
    { name: 'Sản phẩm', hasDropdown: false },
    { name: 'Thương mại', hasDropdown: false },
    { name: 'Dự án', hasDropdown: false },
    { name: 'Tin tức', hasDropdown: false },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(passwordInput)) {
      setIsLoginModalOpen(false);
      setPasswordInput('');
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  return (
    <>
      <nav className="absolute top-0 w-full z-50 text-white py-4 px-4 md:px-8 border-b border-white/20">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <EditableLogo defaultText="Tân Hiệp Mỹ" />
          
          {/* Desktop Links */}
          <div className="hidden xl:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group flex items-center cursor-pointer transition-colors py-2">
                <span className="group-hover:text-[#C09F7A] transition-colors flex items-center">
                  <EditableText initialText={link.name} />
                  {link.hasDropdown && <ChevronDown className="ml-1 w-4 h-4 group-hover:-rotate-180 transition-transform duration-300" />}
                </span>

                {/* Dropdown Menu */}
                {link.hasDropdown && link.subItems && (
                  <div className="absolute top-[100%] left-0 mt-0 w-48 bg-white text-black shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {link.subItems.map((sub, idx) => (
                        <div key={idx} className="px-4 py-2 hover:bg-[#C09F7A] hover:text-white transition-colors cursor-pointer text-sm">
                          <EditableText initialText={sub} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Icons & Mobile Toggle */}
          <div className="flex items-center space-x-4 md:space-x-5">
            <Search className="w-5 h-5 cursor-pointer hover:text-[#C09F7A] transition-colors hidden sm:block" />
            <div 
              className="relative cursor-pointer hover:text-[#C09F7A] transition-colors hidden sm:flex items-center"
              onClick={() => setIsLoginModalOpen(true)}
              title={role === 'admin' ? "Tài khoản Admin" : "Tài khoản khách"}
            >
              {role === 'admin' ? <KeySquare className="w-5 h-5 text-[#C09F7A]" /> : <User className="w-5 h-5" />}
            </div>
            <div className="relative cursor-pointer hover:text-[#C09F7A] transition-colors">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </div>
            <button 
              className="xl:hidden ml-2 text-white hover:text-[#C09F7A] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`xl:hidden fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-neutral-900 overflow-y-auto transition-transform duration-300 origin-top ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} flex flex-col`}>
          <div className="p-6 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-neutral-800 pb-4">
                <div className="flex justify-between items-center text-lg font-medium text-white">
                  <EditableText initialText={link.name} />
                  {link.hasDropdown && <ChevronDown className="w-5 h-5 text-neutral-400" />}
                </div>
                {link.hasDropdown && link.subItems && (
                  <div className="pl-4 mt-3 space-y-3">
                    {link.subItems.map((sub, idx) => (
                      <div key={idx} className="text-neutral-400 hover:text-white transition-colors">
                        <EditableText initialText={sub} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center space-x-6 pt-4 text-white justify-center sm:hidden">
              <Search className="w-6 h-6 cursor-pointer hover:text-[#C09F7A] transition-colors" />
              <div 
                className="cursor-pointer hover:text-[#C09F7A] transition-colors"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsLoginModalOpen(true);
                }}
              >
                {role === 'admin' ? <KeySquare className="w-6 h-6 text-[#C09F7A]" /> : <User className="w-6 h-6" />}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white text-neutral-900 w-full max-w-sm rounded-lg shadow-xl overflow-hidden relative">
            <button 
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Tài khoản</h3>
              <p className="text-neutral-500 text-sm mb-6">
                {role === 'admin' 
                  ? 'Bạn đang đăng nhập với tư cách Quản trị viên (Admin).' 
                  : 'Đăng nhập với tư cách Quản trị viên để chỉnh sửa nội dung.'}
              </p>

              {role === 'admin' ? (
                <button
                  onClick={() => {
                    logout();
                    setIsLoginModalOpen(false);
                  }}
                  className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-3 rounded font-medium transition-colors flex justify-center items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Đăng xuất khỏi Admin
                </button>
              ) : (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Mật khẩu Admin</label>
                    <input 
                      type="password"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      className={`w-full border ${loginError ? 'border-red-500' : 'border-neutral-300'} px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C09F7A]/50`}
                      placeholder="Nhập mật khẩu..."
                      autoFocus
                    />
                    {loginError && <p className="text-red-500 text-xs mt-1">Mật khẩu không đúng.</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#C09F7A] hover:bg-[#b08d66] text-white py-3 rounded font-medium transition-colors"
                  >
                    Đăng nhập
                  </button>
                </form>
              )}
              
              {role === 'guest' && (
                <div className="mt-6 pt-6 border-t border-neutral-100 text-center">
                  <p className="text-sm text-neutral-500">Mật khẩu mẫu: <strong className="text-neutral-900">admin123</strong></p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
