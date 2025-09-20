import {
  ArrowRight,
  Building,
  Building2,
  CheckCircle,
  Cog,
  Hammer,
  Home,
  PenTool,
} from "lucide-react";
import ClientCarousel from "../components/client-carousel";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/carousel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/button";

// export const metadata = {
//   title: "Services",
//   description: "Construction and engineering services by SolidBuild Co.",
// };

export default function ServicesPage() {
  const services = [
    {
      id: "residential-construction",
      icon: Home,
      title: "Dự án dân cư",
      description: "Dịch vụ thiết kế và xây dựng nhà ở tùy chỉnh.",
      features: ["Nhà ở tùy chỉnh", "Cải tạo", "Mở rộng", "Tích hợp cảnh quan"],
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=500&h=300&fit=crop",
    },
    {
      id: "commercial-construction",
      icon: Building,
      title: "Dự án thương mại",
      description: "Giải pháp xây dựng thương mại và công nghiệp.",
      features: [
        "Tòa nhà văn phòng",
        "Không gian bán lẻ",
        "Kho bãi",
        "Phát triển đa mục đích",
      ],
      image: "https://nhadepshouse.com/hinh-anh/quang-cao/trg-1720778380.webp",
    },
    {
      id: "architectural-design",
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
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
    },
    {
      id: "construction-management",
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
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop",
    },
    {
      id: "structural-engineering",
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
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=500&h=300&fit=crop",
    },
    {
      id: "project-planning",
      icon: Cog,
      title: "Lập kế hoạch dự án",
      description: "Lập kế hoạch dự án toàn diện và nghiên cứu khả thi.",
      features: [
        "Phân tích địa điểm",
        "Nghiên cứu quy hoạch",
        "Ước tính chi phí",
        "Phát triển thời gian",
      ],
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Tư vấn",
      description:
        "Cuộc họp ban đầu để hiểu tầm nhìn, yêu cầu và ngân sách của bạn.",
      image:
        "https://cdn.vietnambiz.vn/2019/12/1/photo-1-1575201255304457023286.jpg",
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
        "https://blogcdn.muaban.net/wp-content/uploads/2022/05/09132110/9-ky-su-xay-dung.jpg",
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
    <div className="container mx-auto px-4 md:px-6">
      {/* Header */}
      <div className="text-center mt-24 mb-12">
        <h2 className="text-center font-bold text-4xl md:text-5xl mb-6 drop-shadow-lg underline decoration-primary underline-offset-4 decoration-2">
          Dịch vụ kiến trúc & xây dựng toàn diện
        </h2>
      </div>

      {/* Services Grid */}
      <div className="relative my-10">
        <ClientCarousel
          className="w-full max-w-7xl mx-auto rounded-lg overflow-hidden shadow-xl"
          opts={{ align: "start", loop: true }}
          autoplayDelay={3000}
          autoplayStopOnInteraction
        >
          <CarouselContent>
            {services.map((service, i) => (
              <CarouselItem key={i} className="basis-full">
                <div className="grid md:grid-cols-2 h-full">
                  <div className="bg-[#0f1631] text-white p-8 md:p-14">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
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

                    <Link href={`/services/${service.id}`}>
                      <Button className="mt-10 inline-flex items-center px-5 py-3 rounded-xl bg-primary font-semibold transition-transform duration-300 hover:scale-[1.03] focus:outline-none">
                        Xem chi tiết
                      </Button>
                    </Link>
                  </div>
                  <div className="relative min-h-[260px] md:min-h-[420px]">
                    <Image
                      src={service.image}
                      alt="công trình"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </ClientCarousel>
      </div>

      {/* Process Section */}
      <div className="text-center mb-12">
        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 underline decoration-primary underline-offset-4 decoration-2">
          Quy trình của chúng tôi
        </h3>
      </div>
      <div className="grid md:grid-cols-5 items-stretch relative justify-self-center gap-10">
        {process.map((cs, i) => (
          <div key={i} className="relative flex h-full md:w-[250px] flex-col">
            {i < process.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-[-20px] -translate-y-1/2 translate-x-1/2 z-10 bg-primary rounded-xl p-1">
                <ArrowRight className="h-4 w-4 text-zinc-50" />
              </div>
            )}

            <a
              href={"#"}
              className="group inset-0 flex h-full flex-col rounded-lg border border-stone-900 bg-card/50 shadow-sm overflow-hidden transition-shadow hover:shadow-lg relative"
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
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5" />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
