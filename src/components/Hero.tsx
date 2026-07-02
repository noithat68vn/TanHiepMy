import EditableText from './EditableText';

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 w-full mt-16">
        <div className="max-w-2xl text-white">
          <p className="text-sm font-medium mb-4 tracking-wider uppercase">
            <EditableText initialText="Sáng tạo không giới hạn" />
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <EditableText initialText={"Thiết kế\nđộc đáo"} multiline />
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-lg leading-relaxed">
            <EditableText initialText="Mỗi dự án là một câu chuyện, mỗi thiết kế là một tác phẩm nghệ thuật độc lập." multiline />
          </p>
          <button className="bg-[#C09F7A] hover:bg-[#b08d66] text-white px-8 py-4 rounded font-medium transition-colors">
            Khám phá thêm
          </button>
        </div>
      </div>
    </div>
  );
}
