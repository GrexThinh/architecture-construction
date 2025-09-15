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
  ArrowRight,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
      step: "1",
      title: "Tư vấn",
      description:
        "Cuộc họp ban đầu để hiểu tầm nhìn, yêu cầu và ngân sách của bạn.",
      image: "https://core29.co.uk/wp-content/uploads/2025/08/Picture4.png",
    },
    {
      step: "2",
      title: "Phát triển thiết kế",
      description:
        "Tạo ra các thiết kế chi tiết và trực quan hóa 3D để bạn phê duyệt.",
      image:
        "https://blogcdn.muaban.net/wp-content/uploads/2022/05/09132110/9-ky-su-xay-dung.jpg",
    },
    {
      step: "3",
      title: "Lập kế hoạch, giấy phép",
      description:
        "Xử lý tất cả các giấy phép cần thiết và phê duyệt quy định.",
      image:
        "https://cdn.vietnambiz.vn/2019/12/1/photo-1-1575201255304457023286.jpg",
    },
    {
      step: "4",
      title: "Xây dựng",
      description:
        "Quản lý xây dựng chuyên nghiệp từ khởi công đến hoàn thành.",
      image:
        "https://core29.co.uk/wp-content/uploads/2025/08/Picture3-768x432.jpg",
    },
    {
      step: "5",
      title: "Bàn giao",
      description:
        "Kiểm tra cuối cùng và bàn giao dự án đã hoàn thành của bạn.",
      image:
        "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2024_1_6_638401392840796085_nganh-xay-dung-0.jpg",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-muted/60 dark:bg-muted/20"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-center font-extrabold sm:text-5xl mb-6 drop-shadow-lg">
            Dịch vụ kiến trúc & xây dựng toàn diện
          </h2>
        </div>

        {/* Services Grid */}
        <div className="relative my-10">
          <Carousel
            className="w-full max-w-6xl mx-auto rounded-lg overflow-hidden shadow-xl"
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
          >
            <CarouselContent>
              {services.map((service, i) => (
                <CarouselItem key={i} className="basis-full">
                  <div className="grid md:grid-cols-2 ">
                    <div className="bg-[#0f1631] text-white px-8 py-10 md:px-14 md:py-16">
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                        {service.title}
                      </h3>

                      <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl">
                        {service.description}
                      </p>

                      <ul className="mt-8 space-y-3">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm sm:text-base"
                          >
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        className="mt-10 inline-flex items-center px-5 py-3 rounded-xl bg-primary font-semibold
                   transition-transform duration-300 hover:scale-[1.03] focus:outline-none"
                      >
                        Xem chi tiết
                      </button>
                    </div>
                    <div className="relative min-h-[260px] md:min-h-[420px]">
                      <img
                        src="https://nhadepshouse.com/hinh-anh/quang-cao/trg-1720778380.webp"
                        alt="công trình"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Process Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Quy trình của chúng tôi
          </h3>
          {/* <p className="text-muted-foreground text-lg">
            Phương pháp tiếp cận hiệu quả để biến tầm nhìn của bạn thành hiện
            thực
          </p> */}
        </div>
        <div className="grid gap-6 md:grid-cols-5 items-stretch relative">
          {process.map((cs, i) => (
            <div key={i} className="relative flex h-full flex-col">
              {i < process.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-12px] -translate-y-1/2 translate-x-1/2 z-10 bg-primary rounded-xl p-1">
                  <ArrowRight className="h-4 w-4 text-zinc-50" />
                </div>
              )}

              <a
                href={"#"}
                className="group inset-0 flex h-full flex-col rounded-lg border bg-card/50 shadow-sm overflow-hidden transition-shadow hover:shadow-lg relative"
              >
                <span className="absolute top-0 left-0 z-20 flex h-10 w-10 items-center justify-center bg-primary text-white font-bold shadow-md">
                  {cs.step}
                </span>

                <div className="space-y-4 p-3 flex-1 mt-10">
                  <h3 className="text-lg font-semibold leading-snug">
                    {cs.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {cs.description}
                  </p>
                </div>

                <div className="relative h-40 w-full">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
