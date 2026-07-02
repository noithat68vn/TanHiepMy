import { ArrowRight } from 'lucide-react';
import EditableText from './EditableText';

export default function News() {
  const articles = [
    {
      img: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=800',
      title: '4 nguyên tắc thiết kế nội thất của người Bắc Âu',
      desc: 'Không chỉ đẹp và tiện dụng, phong cách nội thất Scandinavia của Đan Mạch, Na Uy và Thụy Điển (Bắc...',
      date: '04/11/2025'
    },
    {
      img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
      title: 'Gợi ý ứng dụng bề mặt bóng trong không gian nội thất',
      desc: 'Bề mặt bóng với phong cách riêng luôn được đánh giá cao về tính thẩm mỹ. Tuy nhiên, giống như một...',
      date: '04/11/2025'
    },
    {
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      title: 'Giếng trời - Hơi thở thiên nhiên trong mỗi công trình',
      desc: 'Không đơn thuần là một hình thức của cảnh quan sân vườn, việc đưa thiên nhiên vào bên trong công...',
      date: '04/11/2025'
    }
  ];

  return (
    <section className="py-24 px-8 max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
            <EditableText initialText="Tin mới nhất" />
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
            <EditableText initialText="Góc nhìn & Xu hướng" />
          </h2>
        </div>
        <p className="text-neutral-600 max-w-md">
          <EditableText initialText="Khởi đầu hành trình sáng tạo không gian sống. Khám phá kho kiến thức đa dạng của chúng tôi, bao gồm các bí quyết thiết kế thực tiễn và những xu hướng nội thất dẫn đầu thị trường." multiline />
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-24">
        {articles.map((article, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-6">
              <img src={article.img} alt={article.title} className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#C09F7A] transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-neutral-600 mb-4 line-clamp-2 text-sm leading-relaxed">
              {article.desc}
            </p>
            <p className="text-sm text-gray-400 font-medium">{article.date}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center max-w-2xl mx-auto border-t border-neutral-200 pt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          <EditableText initialText="Sẵn sàng bắt đầu dự án của bạn?" />
        </h2>
        <p className="text-neutral-600 mb-8 leading-relaxed">
          <EditableText initialText={"Liên hệ với chúng tôi ngay hôm nay để tư vấn miễn phí về dự án kiến trúc của bạn.\nĐội ngũ chuyên gia của chúng tôi sẵn sàng giúp bạn."} multiline />
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-[#C09F7A] hover:bg-[#b08d66] text-white px-8 py-3 rounded flex items-center font-medium transition-colors w-full sm:w-auto justify-center">
            Liên hệ ngay <ArrowRight className="w-4 h-4 ml-2" />
          </button>
          <button className="bg-transparent border border-neutral-300 hover:border-[#C09F7A] hover:text-[#C09F7A] text-neutral-700 px-8 py-3 rounded flex items-center font-medium transition-colors w-full sm:w-auto justify-center">
            Xem portfolio <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
