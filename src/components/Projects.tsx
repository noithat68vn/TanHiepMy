import { ArrowUpRight, ArrowRight } from 'lucide-react';
import EditableText from './EditableText';

export default function Projects() {
  const projects = [
    {
      title: 'Nhà Hiện Đại 1 Tầng Tại Đà Nẵng – Tổ Ấm Lý Tưởng Cho Gia Đình',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Thiết kế nhà hiện đại và sang trọng tại Đà Nẵng',
      img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Thanh House - Tổ ấm hiện đại 3 phòng ngủ cho cặp đôi trẻ tại Quảng Trị',
      img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section className="py-24 px-8 max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
            <EditableText initialText="Dự án nổi bật" />
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
            <EditableText initialText={"Dấu ấn Sáng tạo –\nTuyên ngôn Phong cách"} multiline />
          </h2>
        </div>
        <p className="text-neutral-600 max-w-md">
          <EditableText initialText="Khám phá bộ sưu tập đa sắc màu của chúng tôi: nơi hội tụ từ những tổ ấm bình yên được chạm khắc tinh tế, đến những không gian thương mại đẳng cấp, nơi công năng và nghệ thuật giao hòa tuyệt đối." multiline />
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-12">
        {projects.map((proj, idx) => (
          <div key={idx} className="group relative h-[350px] md:h-[450px] rounded-lg overflow-hidden cursor-pointer">
            <img src={proj.img} alt={proj.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
            
            {/* Top right icon */}
            <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-5 h-5" />
            </div>

            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-xl font-bold text-white text-center leading-snug">
                {proj.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-[#C09F7A] hover:bg-[#b08d66] text-white px-8 py-3 rounded flex items-center font-medium transition-colors">
          Xem thêm Dự án <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </section>
  );
}
