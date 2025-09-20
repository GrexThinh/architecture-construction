import React from "react";
import { ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/app/components/button";
import { Card, CardContent } from "@/app/components/card";
import Link from "next/link";
import Image from "next/image";

interface ServiceDetailProps {
  params: {
    id: string;
  };
}

const ServiceDetail = ({ params }: ServiceDetailProps) => {
  const { id } = params;

  const serviceDetails: Record<
    string,
    {
      title: string;
      description: string;
      image: string;
      services: string[];
      process: string[];
      benefits: string[];
    }
  > = {
    "residential-construction": {
      title: "Dự án dân cư",
      description:
        "Biến ngôi nhà mơ ước của bạn thành hiện thực với dịch vụ xây dựng dân cư toàn diện của chúng tôi. Chúng tôi chuyên về nhà ở tùy chỉnh, cải tạo và phát triển dân cư phản ánh phong cách độc đáo của bạn và đáp ứng nhu cầu của gia đình.",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=600&fit=crop",
      services: [
        "Xây dựng nhà ở tùy chỉnh",
        "Cải tạo và nâng cấp nhà",
        "Nâng cấp nhà bếp & phòng tắm",
        "Mở rộng nhà",
        "Hoàn thiện tầng hầm",
        "Xây dựng bền vững & xanh",
      ],
      process: [
        "Tư vấn ban đầu & Đánh giá địa điểm",
        "Phát triển thiết kế & Lập kế hoạch",
        "Xin giấy phép & Phê duyệt",
        "Xây dựng & Quản lý dự án",
        "Kiểm tra chất lượng & Nghiệm thu cuối",
        "Hỗ trợ sau xây dựng & Bảo hành",
      ],
      benefits: [
        "Giải pháp thiết kế cá nhân hóa",
        "Đảm bảo chất lượng thủ công",
        "Giá cả và thời gian minh bạch",
        "Chuyên gia có giấy phép và bảo hiểm",
        "Thực hành xây dựng bền vững",
        "Bảo hành toàn diện",
      ],
    },
    "commercial-construction": {
      title: "Dự án thương mại",
      description:
        "Xây dựng thành công kinh doanh của bạn với chuyên môn xây dựng thương mại của chúng tôi. Từ tòa nhà văn phòng đến không gian bán lẻ, chúng tôi tạo ra môi trường thương mại chức năng và hấp dẫn nâng cao năng suất và trải nghiệm khách hàng.",
      image: "https://nhadepshouse.com/hinh-anh/quang-cao/trg-1720778380.webp",
      services: [
        "Xây dựng tòa nhà văn phòng",
        "Trung tâm thương mại & Bán lẻ",
        "Nhà hàng & Khách sạn",
        "Cơ sở y tế & Chăm sóc sức khỏe",
        "Tòa nhà giáo dục",
        "Phát triển đa mục đích",
      ],
      process: [
        "Đánh giá nhu cầu kinh doanh",
        "Thiết kế kiến trúc & Lập kế hoạch",
        "Quản lý phân vùng & Giấy phép",
        "Xây dựng & Phối hợp dự án",
        "Tích hợp hệ thống & Kiểm tra",
        "Hỗ trợ chuyển vào & Bảo trì",
      ],
      benefits: [
        "Thiết kế tuân thủ ADA",
        "Hệ thống xây dựng tiết kiệm năng lượng",
        "Lập kế hoạch không gian linh hoạt",
        "Tùy chọn xây dựng nhanh",
        "Giảm thiểu gián đoạn kinh doanh",
        "Hỗ trợ bảo trì dài hạn",
      ],
    },
    "architectural-design": {
      title: "Thiết kế kiến trúc",
      description:
        "Dịch vụ thiết kế kiến trúc hoàn chỉnh từ ý tưởng đến tài liệu xây dựng. Chúng tôi chuyên tạo ra những thiết kế đẹp mắt, chức năng và bền vững phù hợp với nhu cầu và ngân sách của bạn.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop",
      services: [
        "Mô hình hóa & Trực quan hóa 3D",
        "Giải pháp thiết kế bền vững",
        "Tuân thủ quy chuẩn xây dựng",
        "Lập kế hoạch không gian nội thất",
        "Thiết kế cảnh quan",
        "Tư vấn thiết kế",
      ],
      process: [
        "Tư vấn & Phân tích yêu cầu",
        "Phát triển ý tưởng thiết kế",
        "Tạo mô hình 3D & Render",
        "Hoàn thiện bản vẽ kỹ thuật",
        "Xin giấy phép xây dựng",
        "Giám sát thi công",
      ],
      benefits: [
        "Thiết kế độc đáo và sáng tạo",
        "Tối ưu hóa không gian",
        "Tiết kiệm năng lượng",
        "Chi phí xây dựng hợp lý",
        "Thời gian thiết kế nhanh",
        "Hỗ trợ kỹ thuật toàn diện",
      ],
    },
    "construction-management": {
      title: "Quản lý xây dựng",
      description:
        "Dịch vụ quản lý xây dựng toàn diện đảm bảo chất lượng và giao hàng đúng hạn. Chúng tôi quản lý mọi khía cạnh của dự án xây dựng từ lập kế hoạch đến hoàn thành.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=600&fit=crop",
      services: [
        "Lập lịch dự án",
        "Kiểm soát chất lượng",
        "Quản lý ngân sách",
        "Tuân thủ an toàn",
        "Quản lý nhà thầu",
        "Giám sát tiến độ",
      ],
      process: [
        "Lập kế hoạch dự án chi tiết",
        "Tuyển chọn nhà thầu",
        "Quản lý hợp đồng",
        "Giám sát thi công",
        "Kiểm tra chất lượng",
        "Nghiệm thu và bàn giao",
      ],
      benefits: [
        "Đảm bảo tiến độ dự án",
        "Kiểm soát chi phí hiệu quả",
        "Chất lượng xây dựng cao",
        "An toàn lao động tuyệt đối",
        "Quản lý rủi ro tốt",
        "Báo cáo minh bạch",
      ],
    },
    "structural-engineering": {
      title: "Kỹ thuật kết cấu",
      description:
        "Dịch vụ kỹ thuật kết cấu chuyên nghiệp cho các tòa nhà an toàn và hiệu quả. Chúng tôi đảm bảo tính toàn vẹn cấu trúc và tuân thủ các tiêu chuẩn kỹ thuật cao nhất.",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=600&fit=crop",
      services: [
        "Phân tích kết cấu",
        "Thiết kế móng",
        "Kỹ thuật chống động đất",
        "Tính toán tải trọng",
        "Thiết kế bê tông cốt thép",
        "Kiểm tra kết cấu hiện có",
      ],
      process: [
        "Khảo sát địa chất",
        "Phân tích tải trọng",
        "Thiết kế kết cấu",
        "Tính toán chi tiết",
        "Kiểm tra và nghiệm thu",
        "Hướng dẫn thi công",
      ],
      benefits: [
        "An toàn cấu trúc tuyệt đối",
        "Tối ưu hóa vật liệu",
        "Tuân thủ tiêu chuẩn quốc tế",
        "Chi phí xây dựng hợp lý",
        "Thời gian thiết kế nhanh",
        "Hỗ trợ kỹ thuật liên tục",
      ],
    },
    "project-planning": {
      title: "Lập kế hoạch dự án",
      description:
        "Lập kế hoạch dự án toàn diện và nghiên cứu khả thi. Chúng tôi giúp bạn lập kế hoạch chi tiết từ giai đoạn đầu đến khi hoàn thành dự án.",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=600&fit=crop",
      services: [
        "Phân tích địa điểm",
        "Nghiên cứu quy hoạch",
        "Ước tính chi phí",
        "Phát triển thời gian",
        "Đánh giá rủi ro",
        "Lập kế hoạch tài nguyên",
      ],
      process: [
        "Nghiên cứu khả thi",
        "Phân tích địa điểm",
        "Lập kế hoạch tổng thể",
        "Ước tính ngân sách",
        "Lập lịch trình chi tiết",
        "Quản lý thực hiện",
      ],
      benefits: [
        "Tối ưu hóa thời gian",
        "Kiểm soát chi phí hiệu quả",
        "Giảm thiểu rủi ro",
        "Sử dụng tài nguyên tối ưu",
        "Linh hoạt trong thay đổi",
        "Báo cáo tiến độ rõ ràng",
      ],
    },
  };

  const service = serviceDetails[id || ""];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link
              href="/services"
              className="inline-flex items-center text-white mb-4 hover:text-primary transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Services
            </Link>
            <h1 className="text-5xl font-bold text-white mb-4">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold mb-6">Service Overview</h2>
                <p className="text-lg text-gray-700 mb-8">
                  {service.description}
                </p>

                <h3 className="text-2xl font-semibold mb-4">
                  Our Services Include
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {service.services.map((item: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4">Our Process</h3>
                <div className="space-y-4 mb-8">
                  {service.process.map((step: string, index: number) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 pt-1">{step}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Get Started Today
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Ready to discuss your project? Contact us for a free
                    consultation and detailed quote.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="text-gray-700">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span className="text-gray-700">info@buildcraft.com</span>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90 mb-4">
                      Get Free Quote
                    </Button>
                  </Link>

                  <Link href="/projects">
                    <Button variant="outline" className="w-full">
                      View Our Work
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
