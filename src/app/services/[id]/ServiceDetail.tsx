"use client";

import React from "react";
import { ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/app/components/button";
import { Card, CardContent } from "@/app/components/card";
import Link from "next/link";
import Image from "next/image";

interface ServiceDetailProps {
  id: string; // <- simpler, no nested params
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ id }) => {
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

  const service = serviceDetails[id];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy dịch vụ</h1>
          <Link href="/services">
            <Button>Quay lại dịch vụ</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] overflow-hidden"
        aria-label={`Hình ảnh dịch vụ ${service.title}`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
            <Link
              href="/services"
              className="inline-flex items-center text-white/95 mb-4 rounded-lg bg-primary/90 hover:bg-primary px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Quay lại danh sách dịch vụ"
            >
              <ArrowLeft size={18} className="mr-2" />
              Quay lại dịch vụ
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2">
              <header className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Tổng quan dịch vụ
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  {service.description}
                </p>
              </header>

              {/* Services list */}
              <section className="mb-10">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                  Dịch vụ của chúng tôi bao gồm
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {service.services.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-lg border border-border/60 bg-card/60 px-3 py-2.5"
                    >
                      <CheckCircle className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Process timeline */}
              <section className="mb-10">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                  Quy trình thực hiện
                </h3>
                <ol className="relative border-s border-border/60 ps-4 sm:ps-6 space-y-5">
                  {service.process.map((step, index) => (
                    <li key={index} className="ms-2 sm:ms-3">
                      <div className="absolute -start-3 sm:-start-3 mt-1.5 h-6 w-6 rounded-full bg-primary text-white text-xs font-bold grid place-items-center ring-2 ring-primary/30">
                        {index + 1}
                      </div>
                      <p className="text-foreground/90">{step}</p>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Benefits grid */}
              <section>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                  Tại sao chọn chúng tôi
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {service.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2.5"
                    >
                      <CheckCircle className="h-5 w-5 mt-0.5 text-emerald-500 flex-shrink-0" />
                      <span className="text-foreground/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <Card className="sticky top-6">
                <CardContent className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">
                    Bắt đầu ngay hôm nay
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-5">
                    Sẵn sàng thảo luận về dự án của bạn? Liên hệ với chúng tôi
                    để được tư vấn miễn phí và báo giá chi tiết.
                  </p>

                  <div className="space-y-3 sm:space-y-4 mb-5">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <a
                        href="tel:0587030273"
                        className="text-foreground/90 hover:underline"
                      >
                        0587 030 273
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <a
                        href="mailto:info@buildcraft.com"
                        className="text-foreground/90 hover:underline"
                      >
                        info@buildcraft.com
                      </a>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90 mb-3">
                      Nhận báo giá miễn phí
                    </Button>
                  </Link>

                  <Link href="/projects">
                    <Button variant="outline" className="w-full">
                      Xem dự án của chúng tôi
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
