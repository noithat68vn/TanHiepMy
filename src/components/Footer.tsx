import { Mail, MapPin, Phone, ChevronUp } from 'lucide-react';
import EditableText from './EditableText';
import EditableLogo from './EditableLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#222629] text-white pt-20 pb-8 px-8 relative">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand & Contact */}
        <div>
          <div className="mb-6">
            <EditableLogo defaultText="Tân Hiệp Mỹ" />
          </div>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start">
              <Mail className="w-5 h-5 mr-3 shrink-0 text-white" />
              <span><EditableText initialText="support@tanhiepmy.vn" /></span>
            </li>
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 shrink-0 text-white" />
              <span className="leading-relaxed"><EditableText initialText="2/47/10 Tô Ngọc Vân, Phường An Hội Đông, Tp. Hồ Chí Minh" multiline /></span>
            </li>
            <li className="flex items-start">
              <Phone className="w-5 h-5 mr-3 shrink-0 text-white" />
              <span><EditableText initialText="0869-111-799" /></span>
            </li>
          </ul>
        </div>

        {/* Links 1 */}
        <div>
          <h3 className="text-lg font-bold mb-6">
            <EditableText initialText="Về chúng tôi" />
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-[#C09F7A] transition-colors"><EditableText initialText="Giới thiệu về Tân Hiệp Mỹ" /></a></li>
            <li><a href="#" className="hover:text-[#C09F7A] transition-colors"><EditableText initialText="Tuyển dụng" /></a></li>
            <li><a href="#" className="hover:text-[#C09F7A] transition-colors"><EditableText initialText="Dự án đã thực hiện" /></a></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <h3 className="text-lg font-bold mb-6">
            <EditableText initialText="Portfolio" />
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-[#C09F7A] transition-colors"><EditableText initialText="Thiết kế thi công nội thất nhà ở" /></a></li>
            <li><a href="#" className="hover:text-[#C09F7A] transition-colors"><EditableText initialText="Thiết kế thi công nội thất văn phòng" /></a></li>
            <li><a href="#" className="hover:text-[#C09F7A] transition-colors"><EditableText initialText="Thiết kế thi công không gian thương mại" /></a></li>
            <li><a href="#" className="hover:text-[#C09F7A] transition-colors"><EditableText initialText="Thiết kế cải tạo và phục hồi" /></a></li>
          </ul>
        </div>

        {/* Links 3 */}
        <div>
          <h3 className="text-lg font-bold mb-6">
            <EditableText initialText="Phong cách nội thất" />
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-[#C09F7A] transition-colors"><EditableText initialText="Minimalist tối giản" /></a></li>
            <li><a href="#" className="hover:text-[#C09F7A] transition-colors"><EditableText initialText="Modern Hiện đại" /></a></li>
            <li><a href="#" className="hover:text-[#C09F7A] transition-colors"><EditableText initialText="Cổ điển - Tân Cổ Điển" /></a></li>
            <li><a href="#" className="hover:text-[#C09F7A] transition-colors"><EditableText initialText="Thô Mộc" /></a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
        <p>© Bản quyền thuộc về <span className="font-semibold text-white"><EditableText initialText="Tân Hiệp Mỹ" /></span>.</p>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-50">
        <button onClick={scrollToTop} className="w-12 h-12 bg-[#C09F7A] rounded-full flex items-center justify-center text-white hover:bg-[#b08d66] transition-colors shadow-lg">
          <ChevronUp className="w-5 h-5" />
        </button>
        <button className="w-12 h-12 bg-[#C09F7A] rounded-full flex items-center justify-center text-white hover:bg-[#b08d66] transition-colors shadow-lg">
          <Mail className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}
