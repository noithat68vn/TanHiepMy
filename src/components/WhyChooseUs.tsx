import { CheckCircle2, Clock, Star, Users } from 'lucide-react';
import EditableText from './EditableText';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-neutral-700" />,
      title: 'Kiến tạo Dấu ấn Độc bản',
      desc: 'Với chúng tôi, kiến trúc không chỉ là sự sắp đặt của gạch đá, mà là bản giao hưởng giữa không gian, ánh sáng và cảm xúc.'
    },
    {
      icon: <Clock className="w-6 h-6 text-neutral-700" />,
      title: 'Vẻ đẹp Thách thức Thời gian',
      desc: 'Một công trình hoàn mỹ không chỉ cần lộng lẫy ở hiện tại mà phải là một di sản vững bền cho mai sau.'
    },
    {
      icon: <Star className="w-6 h-6 text-neutral-700" />,
      title: 'Tinh hoa từ Tâm huyết & Kinh nghiệm',
      desc: 'Đằng sau sự hoàn hảo của mỗi công trình là những trái tim nóng và khối óc tinh anh. Đội ngũ kiến trúc sư của chúng tôi – những người đã dành hơn 15 năm miệt mài sáng tạo'
    },
    {
      icon: <Users className="w-6 h-6 text-neutral-700" />,
      title: 'Hành trình Đồng hành Trọn vẹn',
      desc: 'Xây nhà là hành trình kiến tạo hạnh phúc, và chúng tôi vinh dự được trở thành người bạn tri kỷ trên con đường ấy.'
    }
  ];

  return (
    <section className="py-24 px-8 max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
            <EditableText initialText="Tại sao chọn chúng tôi" />
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
            <EditableText initialText={"Khám phá giá trị chúng tôi mang lại\ntrong mỗi dự án"} multiline />
          </h2>
          <p className="text-neutral-600 mb-10 leading-relaxed">
            <EditableText initialText="Chúng tôi kết hợp sự sáng tạo, quy trình tối ưu và kinh nghiệm chuyên môn để mang đến những dự án chất lượng cao, bền vững và đạt chuẩn quốc tế. Từ ý tưởng đến thi công, đội ngũ chuyên gia luôn đồng hành để đảm bảo mỗi công trình đều vượt trên mong đợi." multiline />
          </p>

          <div className="space-y-8">
            {features.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Grid Images */}
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="space-y-4">
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" alt="Interior" className="w-full h-64 md:h-72 object-cover rounded" />
            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800" alt="Architecture" className="w-full h-72 md:h-80 object-cover rounded" />
          </div>
          <div className="space-y-4 pt-8 md:pt-12">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" alt="Exterior" className="w-full h-64 md:h-72 object-cover rounded" />
            <img src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=800" alt="Details" className="w-full h-72 md:h-80 object-cover rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}
