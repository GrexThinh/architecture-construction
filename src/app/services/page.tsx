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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/accordion";

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
      images: [
        "https://cdn.vietnambiz.vn/2019/12/1/photo-1-1575201255304457023286.jpg",
        "https://blogcdn.muaban.net/wp-content/uploads/2022/05/09132110/9-ky-su-xay-dung.jpg",
        "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2024_1_6_638401392840796085_nganh-xay-dung-0.jpg",
      ],
    },
    {
      step: "2",
      title: "Phát triển thiết kế",
      description:
        "Tạo ra các thiết kế chi tiết và trực quan hóa 3D để bạn phê duyệt.",
      images: [
        "https://cdn.vietnambiz.vn/2019/12/1/photo-1-1575201255304457023286.jpg",
        "https://blogcdn.muaban.net/wp-content/uploads/2022/05/09132110/9-ky-su-xay-dung.jpg",
        "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2024_1_6_638401392840796085_nganh-xay-dung-0.jpg",
      ],
    },
    {
      step: "3",
      title: "Lập kế hoạch, giấy phép",
      description:
        "Xử lý tất cả các giấy phép cần thiết và phê duyệt quy định.",
      images: [
        "https://cdn.vietnambiz.vn/2019/12/1/photo-1-1575201255304457023286.jpg",
        "https://blogcdn.muaban.net/wp-content/uploads/2022/05/09132110/9-ky-su-xay-dung.jpg",
        "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2024_1_6_638401392840796085_nganh-xay-dung-0.jpg",
      ],
    },
    {
      step: "4",
      title: "Xây dựng",
      description:
        "Quản lý xây dựng chuyên nghiệp từ khởi công đến hoàn thành.",
      images: [
        "https://cdn.vietnambiz.vn/2019/12/1/photo-1-1575201255304457023286.jpg",
        "https://blogcdn.muaban.net/wp-content/uploads/2022/05/09132110/9-ky-su-xay-dung.jpg",
        "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2024_1_6_638401392840796085_nganh-xay-dung-0.jpg",
      ],
    },
    {
      step: "5",
      title: "Bàn giao",
      description:
        "Kiểm tra cuối cùng và bàn giao dự án đã hoàn thành của bạn.",
      images: [
        "https://cdn.vietnambiz.vn/2019/12/1/photo-1-1575201255304457023286.jpg",
        "https://blogcdn.muaban.net/wp-content/uploads/2022/05/09132110/9-ky-su-xay-dung.jpg",
        "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2024_1_6_638401392840796085_nganh-xay-dung-0.jpg",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      {/* Header */}
      <div className="text-center mt-24 mb-12">
        <h2 className="text-center font-bold text-3xl md:text-4xl mb-6 drop-shadow-lg decoration-primary decoration-2">
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
                    <h3 className="text-3xl sm:text-3xl md:text-4xl font-bold">
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
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </ClientCarousel>
      </div>
      {/* Process Section */}
      <div className="mx-auto mt-16 max-w-5xl px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-3xl sm:text-3xl md:text-4xl font-bold tracking-tight decoration-primar decoration-2">
            Quy trình của chúng tôi
          </h3>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="space-y-3 sm:space-y-4"
        >
          {process.map((cs, i) => {
            const imageList = Array.isArray(cs.images)
              ? cs.images
              : cs.images
              ? [cs.images]
              : [];

            return (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="group rounded-xl border border-border/70 bg-card/60 backdrop-blur-sm shadow-sm transition-all
                   hover:shadow-md focus-within:border-primary"
              >
                <AccordionTrigger
                  className="group flex w-full items-center gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left
                     transition-colors hover:bg-muted/40 rounded-xl hover:no-underline cursor-pointer focus-visible:outline-none"
                >
                  {/* Step badge */}
                  <span
                    className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full
                           bg-primary text-white text-sm sm:text-base font-bold shadow ring-1 ring-primary/40 flex-shrink-0"
                  >
                    {cs.step}
                  </span>

                  {/* Title + tiny description preview on wide screens */}
                  <span className="flex-1 min-w-0">
                    <span className="block text-base sm:text-lg md:text-xl font-semibold leading-snug truncate">
                      {cs.title}
                    </span>
                    <span className="hidden sm:block text-sm text-muted-foreground mt-0.5 line-clamp-1">
                      {cs.description}
                    </span>
                  </span>

                  {/* Rotating arrow */}
                  <ArrowRight
                    className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-90"
                    aria-hidden="true"
                  />
                </AccordionTrigger>

                <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="flex flex-col gap-4 md:gap-6">
                    {/* text */}
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {cs.description}
                    </p>

                    {/* gallery (1 hoặc nhiều ảnh) */}
                    {imageList.length > 0 && (
                      <div
                        className={
                          imageList.length === 1
                            ? "relative w-full md:w-48 lg:w-56 h-36 sm:h-40 md:h-32 lg:h-36 overflow-hidden rounded-lg ring-1 ring-border/60"
                            : "grid grid-cols-2 sm:grid-cols-3 gap-3"
                        }
                      >
                        {imageList.length === 1 ? (
                          <Image
                            src={imageList[0]}
                            alt={cs.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 220px"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                            priority={i === 0}
                          />
                        ) : (
                          imageList.map((img, idx) => (
                            <div
                              key={idx}
                              className="relative h-28 sm:h-32 md:h-36 overflow-hidden rounded-lg ring-1 ring-border/60"
                            >
                              <Image
                                src={img}
                                alt={`${cs.title} - ${idx + 1}`}
                                fill
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                priority={i === 0 && idx < 2}
                              />
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
