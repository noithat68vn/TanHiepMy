import { Lightbulb, PenTool, Settings, Building } from 'lucide-react';
import EditableText from './EditableText';

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      title: 'Khởi nguồn Cảm hứng & Thấu hiểu',
      desc: 'Chúng tôi bắt đầu bằng việc lắng nghe những mong muốn sâu kín và phong cách sống của bạn, để thấu cảm và định hình nên \'linh hồn\' cho không gian tương lai.'
    },
    {
      num: '02',
      icon: <PenTool className="w-8 h-8 text-white" />,
      title: 'Phác họa Giấc mơ & Concept',
      desc: 'Từ những ý tưởng sơ khởi, các kiến trúc sư tài hoa sẽ \'vẽ\' nên giấc mơ của bạn bằng ngôn ngữ của hình khối và ánh sáng.'
    },
    {
      num: '03',
      icon: <Settings className="w-8 h-8 text-white" />,
      title: 'Tinh chỉnh Chi tiết & Kỹ thuật',
      desc: 'Chúng tôi chuyển hóa những ý tưởng bay bổng thành hệ thống bản vẽ kỹ thuật chính xác tuyệt đối, kết hợp cùng sự tuyển chọn khắt khe về vật liệu để đảm bảo công năng và thẩm mỹ song hành.'
    },
    {
      num: '04',
      icon: <Building className="w-8 h-8 text-white" />,
      title: 'Hiện thực hóa & Trao gửi',
      desc: 'Đội ngũ thi công lành nghề biến bản vẽ thành công trình hiện hữu vững chãi và tinh tế. Khoảnh khắc trao tay chiếc chìa khóa là lời cam kết trọn vẹn cho một tổ ấm viên mãn.'
    }
  ];

  return (
    <section className="py-24 px-8 bg-[#2A2F33] text-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#C09F7A] uppercase tracking-wider mb-2">
              <EditableText initialText="Quy trình thực hiện" />
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <EditableText initialText={"Từ Bản vẽ Sơ phác đến\nCông trình Hoàn thiện"} multiline />
            </h2>
          </div>
          <p className="text-gray-300 max-w-md text-sm md:text-base leading-relaxed">
            <EditableText initialText="Quy trình thiết kế khép kín của chúng tôi sẽ là kim chỉ nam dẫn lối cho bạn: từ bước phác thảo concept, phát triển ý tưởng cho đến hiện thực hóa không gian sống đẳng cấp." multiline />
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="mb-8">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold mb-4 pr-4">
                <span className="text-gray-400 mr-2 block text-sm font-normal mb-1">{step.num}. </span>
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
