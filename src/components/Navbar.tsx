import { useState } from 'react';
import { Search, User, Heart, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';
import EditableLogo from './EditableLogo';
import EditableText from './EditableText';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Trang chủ', hasDropdown: false },
    { name: 'Giới thiệu', hasDropdown: false },
    { name: 'Tin tức', hasDropdown: true, subItems: ['Tin mới', 'Sự kiện', 'Báo chí'] },
    { name: 'Dự án', hasDropdown: true, subItems: ['Nhà ở', 'Thương mại', 'Nghỉ dưỡng', 'Cảnh quan'] },
    { name: 'Sản phẩm', hasDropdown: true, subItems: ['Nội thất', 'Ngoại thất', 'Trang trí', 'Vật liệu'] },
    { name: 'Dịch vụ', hasDropdown: false },
    { name: 'Xu hướng', hasDropdown: true, subItems: ['Minimalism', 'Modern', 'Classic', 'Indochine'] },
    { name: 'Liên hệ', hasDropdown: false },
    { name: 'FAQs', hasDropdown: false },
  ];

  return (
    <nav className="absolute top-0 w-full z-50 text-white py-4 px-4 md:px-8 border-b border-white/20">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <EditableLogo defaultText="WolfArch" />
        
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
          <User className="w-5 h-5 cursor-pointer hover:text-[#C09F7A] transition-colors hidden sm:block" />
          <div className="relative cursor-pointer hover:text-[#C09F7A] transition-colors">
            <Heart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </div>
          <div className="relative cursor-pointer hover:text-[#C09F7A] transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
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
            <User className="w-6 h-6 cursor-pointer hover:text-[#C09F7A] transition-colors" />
          </div>
        </div>
      </div>
    </nav>
  );
}
