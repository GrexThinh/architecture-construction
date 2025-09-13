import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { projects } from "./ProjectsSection";
import Autoplay from "embla-carousel-autoplay";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-primary/5 pt-16 md:pt-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Xây dựng kiến trúc
              <span className="text-primary block pt-3">của bạn hôm nay</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-[600px] mx-auto lg:mx-0">
              Chúng tôi tạo ra những thiết kế kiến trúc đặc biệt và thực hiện
              các dự án xây dựng xuất sắc vượt qua thử thách thời gian. Từ ý
              tưởng đến hoàn thành, chúng tôi là đối tác đáng tin cậy của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={() => scrollToSection("#projects")}>
                Xem dự án của chúng tôi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#services")}
              >
                Dịch vụ của chúng tôi
              </Button>
            </div>
          </div>
          <div className="relative">
            <Carousel
              className="w-full max-w-xl mx-auto"
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
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
      </div>
    </section>
  );
};

export default HeroSection;
