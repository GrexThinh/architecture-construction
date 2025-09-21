import ClientCarousel from "../components/client-carousel";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/carousel";
import { StatsGrid } from "../components/stats-grid";

// export const metadata = {
//   title: "About",
//   description:
//     "CÔNG TY TNHH TƯ VẤN THIẾT KẾ XÂY DỰNG BÌNH KHANG - Binh Khang Company",
// };

export default function AboutPage() {
  const images = [
    {
      title: "Thiết Kế Cảnh Quan",
      image: "https://nhadepshouse.com/hinh-anh/quang-cao/trg-1720778380.webp",
    },
    {
      title: "Thiết Kế Kiến Trúc",
      image: "https://nhadepshouse.com/hinh-anh/quang-cao/trg-1700711160.webp",
    },
    {
      title: "Thiết Kế Nội Thất",
      image: "https://nhadepshouse.com/hinh-anh/quang-cao/trg-1710228304.webp",
    },
    {
      title: "Thiết Kế Điện Nước",
      image: "https://nhadepshouse.com/hinh-anh/quang-cao/trg-1720777296.webp",
    },
  ];
  return (
    <div className="container mx-auto px-4 md:px-6 mt-10">
      <h3 className="text-center font-bold text-3xl md:text-4xl drop-shadow-lg underline decoration-primary underline-offset-4 decoration-2">
        Về chúng tôi
      </h3>

      <StatsGrid />

      <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tighter mb-4 underline decoration-primary underline-offset-4 decoration-2">
        Các loại thiết kế đã xây dựng
      </h2>
      <div className="relative my-10">
        <ClientCarousel
          className="w-full max-w-7xl mx-auto"
          opts={{ align: "start", loop: true }}
          autoplayDelay={3000}
          autoplayStopOnInteraction
        >
          <CarouselContent>
            {images.map((proj, i) => (
              <CarouselItem
                key={i}
                className="
                    basis-full 
                    sm:basis-1/2 
                    md:basis-1/3 
                    lg:basis-1/4
                  "
              >
                <div className="relative group">
                  <img
                    src={proj.image}
                    alt="công trình"
                    className="rounded-lg shadow-2xl w-full h-[400px] object-cover cursor-pointer transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-lg transition duration-300 group-hover:bg-black/10" />
                  <h3 className="text-center text-xl font-bold text-white absolute bottom-5 left-0 right-0 p-4">
                    {proj.title}
                  </h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </ClientCarousel>
      </div>
    </div>
  );
}
