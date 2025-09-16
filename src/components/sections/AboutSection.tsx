import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { StatsGrid } from "../ui/statistics";

const AboutSection = () => {
  const values = [
    {
      title: "Đổi mới",
      description:
        "Chúng tôi áp dụng các công nghệ thiết kế tiên tiến và thực hành xây dựng bền vững để tạo ra các giải pháp tiên tiến.",
    },
    {
      title: "Chất lượng",
      description:
        "Mọi dự án đều phản ánh cam kết về sự xuất sắc của chúng tôi, từ ý tưởng thiết kế ban đầu đến chi tiết xây dựng cuối cùng.",
    },
    {
      title: "Hợp tác",
      description:
        "Chúng tôi làm việc chặt chẽ với khách hàng, tư vấn và nhà thầu để đảm bảo giao hàng dự án liền mạch.",
    },
    {
      title: "Bền vững",
      description:
        "Trách nhiệm môi trường là cốt lõi của triết lý thiết kế và thực hành xây dựng của chúng tôi.",
    },
  ];

  const images = [
    {
      title: "Công Trình Thực Tế",
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
      title: "Thi Công Xây Dựng",
      image: "https://nhadepshouse.com/hinh-anh/quang-cao/trg-1720777296.webp",
    },
  ];

  return (
    <section id="about" className="py-10 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-center font-extrabold text-4xl md:text-5xl drop-shadow-lg underline decoration-primary underline-offset-4 decoration-2">
          Về chúng tôi
        </h3>

        <StatsGrid />

        <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tighter mb-4 underline decoration-primary underline-offset-4 decoration-2">
          Các loại công trình đã xây dựng
        </h2>
        {/* <p className="text-center text-muted-foreground text-lg mb-8">
          Khám phá các công trình kiến trúc đa dạng của chúng tôi
        </p> */}
        <div className="relative my-10">
          <Carousel
            className="w-full max-w-7xl mx-auto"
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
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
                    <h3 className="text-center text-xl font-bold text-white absolute bottom-16 left-0 right-0 p-4">
                      {proj.title}
                    </h3>
                    <button className="text-white absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-primary rounded-lg transition-transform duration-300 group-hover:scale-105">
                      Xem chi tiết
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Values */}
        {/* <div className="text-center mb-12">
          <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Giá trị của chúng tôi
          </h3>
          <p className="text-muted-foreground text-lg">
            Những nguyên tắc hướng dẫn mọi việc chúng tôi làm
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="pt-6">
                <h4 className="text-xl font-semibold mb-4 text-primary">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
