import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  Hammer,
  PenTool,
  Cog,
  Home,
  Building,
  CheckCircle,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: PenTool,
      title: "Thiết kế kiến trúc",
      description:
        "Dịch vụ thiết kế kiến trúc hoàn chỉnh từ ý tưởng đến tài liệu xây dựng.",
      features: [
        "Mô hình hóa & Trực quan hóa 3D",
        "Giải pháp thiết kế bền vững",
        "Tuân thủ quy chuẩn xây dựng",
        "Lập kế hoạch không gian nội thất",
      ],
    },
    {
      icon: Hammer,
      title: "Quản lý xây dựng",
      description:
        "Dịch vụ quản lý xây dựng toàn diện đảm bảo chất lượng và giao hàng đúng hạn.",
      features: [
        "Lập lịch dự án",
        "Kiểm soát chất lượng",
        "Quản lý ngân sách",
        "Tuân thủ an toàn",
      ],
    },
    {
      icon: Building2,
      title: "Kỹ thuật kết cấu",
      description:
        "Dịch vụ kỹ thuật kết cấu chuyên nghiệp cho các tòa nhà an toàn và hiệu quả.",
      features: [
        "Phân tích kết cấu",
        "Thiết kế móng",
        "Kỹ thuật chống động đất",
        "Tính toán tải trọng",
      ],
    },
    {
      icon: Cog,
      title: "Lập kế hoạch dự án",
      description: "Lập kế hoạch dự án toàn diện và nghiên cứu khả thi.",
      features: [
        "Phân tích địa điểm",
        "Nghiên cứu quy hoạch",
        "Ước tính chi phí",
        "Phát triển thời gian",
      ],
    },
    {
      icon: Home,
      title: "Dự án dân cư",
      description: "Dịch vụ thiết kế và xây dựng nhà ở tùy chỉnh.",
      features: ["Nhà ở tùy chỉnh", "Cải tạo", "Mở rộng", "Tích hợp cảnh quan"],
    },
    {
      icon: Building,
      title: "Dự án thương mại",
      description: "Giải pháp xây dựng thương mại và công nghiệp.",
      features: [
        "Tòa nhà văn phòng",
        "Không gian bán lẻ",
        "Kho bãi",
        "Phát triển đa mục đích",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Tư vấn",
      description:
        "Cuộc họp ban đầu để hiểu tầm nhìn, yêu cầu và ngân sách của bạn.",
    },
    {
      step: "02",
      title: "Phát triển thiết kế",
      description:
        "Tạo ra các thiết kế chi tiết và trực quan hóa 3D để bạn phê duyệt.",
    },
    {
      step: "03",
      title: "Lập kế hoạch & Giấy phép",
      description:
        "Xử lý tất cả các giấy phép cần thiết và phê duyệt quy định.",
    },
    {
      step: "04",
      title: "Xây dựng",
      description:
        "Quản lý xây dựng chuyên nghiệp từ khởi công đến hoàn thành.",
    },
    {
      step: "05",
      title: "Bàn giao",
      description:
        "Kiểm tra cuối cùng và bàn giao dự án đã hoàn thành của bạn.",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-muted/50 dark:bg-muted/20"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Dịch vụ kiến trúc & xây dựng toàn diện
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            Từ ý tưởng ban đầu đến xây dựng cuối cùng, chúng tôi cung cấp giải
            pháp toàn diện cho mọi nhu cầu kiến trúc và xây dựng của bạn.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Quy trình của chúng tôi
          </h3>
          <p className="text-muted-foreground text-lg">
            Phương pháp tiếp cận hiệu quả để biến tầm nhìn của bạn thành hiện
            thực
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {process.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
