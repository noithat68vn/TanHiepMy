import { ArrowRight } from 'lucide-react';
import EditableText from './EditableText';

export default function Services() {
  const services = [
    {
      title: 'Thiết kế Kiến trúc Độc bản',
      desc: 'Mỗi bản vẽ là một tác phẩm "may đo" riêng biệt, kết tinh từ tư duy thẩm mỹ đột phá và sự thấu hiểu sâu sắc lối sống.',
      img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Nghệ thuật Sắp đặt Nội thất',
      desc: 'Thổi hồn vào không gian bằng sự giao thoa tinh tế giữa ánh sáng, chất liệu và màu sắc.',
      img: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Thi công Xây dựng Trọn gói',
      desc: 'Hiện thực hóa giấc mơ từ bản vẽ ra đời thực với sự chính xác tuyệt đối.',
      img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Quy hoạch & Cảnh quan Sân vườn',
      desc: 'Mang hơi thở thiên nhiên len lỏi vào từng ngóc ngách sống.',
      img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section className="py-24 px-8 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#C09F7A] uppercase tracking-wider mb-2">
              <EditableText initialText="Dịch vụ của chúng tôi" />
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
              <EditableText initialText={"Kiến tạo Sự khác biệt –\nGói trọn mọi Ý tưởng"} multiline />
            </h2>
          </div>
          <p className="text-neutral-600 max-w-md">
            <EditableText initialText="Thổi hồn vào không gian với dịch vụ thiết kế nội thất độc bản, nơi mọi mong muốn của bạn được lắng nghe và hiện thực hóa. Chúng tôi đồng hành cùng bạn từ khâu định hình ý tưởng cho đến ngày hoàn thiện từng chi tiết lắp đặt cuối cùng." multiline />
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((svc, idx) => (
            <div key={idx} className="group relative h-[420px] rounded-lg overflow-hidden cursor-pointer">
              <img src={svc.img} alt={svc.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <h3 className="text-xl font-bold mb-3 leading-snug">{svc.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{svc.desc}</p>
                <div className="flex items-center text-sm font-semibold group-hover:text-[#C09F7A] transition-colors">
                  <span className="border-b border-transparent group-hover:border-[#C09F7A] pb-0.5">Xem thêm</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-[#C09F7A] hover:bg-[#b08d66] text-white px-8 py-3 rounded flex items-center font-medium transition-colors">
            Xem thêm dịch vụ <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
