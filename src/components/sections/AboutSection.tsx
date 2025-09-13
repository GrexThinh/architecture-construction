import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Building, Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { projects } from "./ProjectsSection";

const AboutSection = () => {
  const stats = [
    { icon: Building, value: "200+", label: "Dự án đã hoàn thành" },
    { icon: Users, value: "50+", label: "Thành viên đội ngũ chuyên gia" },
    { icon: Calendar, value: "5+", label: "Năm kinh nghiệm" },
    { icon: Award, value: "25+", label: "Công trình khác nhau" },
  ];

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

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* About Content */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Xây dựng sự xuất sắc từ năm 2020
            </h2>
            <p className="text-lg text-muted-foreground">
              ArchBuild Pro là công ty kiến trúc và xây dựng hàng đầu chuyên tạo
              ra những không gian đặc biệt truyền cảm hứng và bền vững. Đội ngũ
              chuyên gia giàu kinh nghiệm của chúng tôi kết hợp thiết kế đổi mới
              với tay nghề vượt trội để thực hiện các dự án vượt quá mong đợi.
            </p>
            <p className="text-lg text-muted-foreground">
              Từ nhà ở dân cư đến các khu phức hợp thương mại, chúng tôi tiếp
              cận mọi dự án với cùng mức độ đam mê, chú ý đến từng chi tiết, và
              cam kết về chất lượng đã làm cho chúng tôi trở thành tên tuổi đáng
              tin cậy trong ngành.
            </p>
          </div>
          <div className="relative">
            <Carousel
              className="w-full max-w-xl mx-auto"
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
            >
              <CarouselContent>
                {projects.map((proj, i) => (
                  <CarouselItem key={i} className="basis-full">
                    <div className="relative">
                      <img
                        src={proj.image}
                        alt="Kiến trúc hiện đại"
                        className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-shadow"
            >
              <CardContent className="pt-6">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div className="text-center mb-12">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
