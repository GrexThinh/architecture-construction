"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./button";

export default function Banner() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative h-[90vh]">
      <video
        src={encodeURI(
          "https://nhadepshouse.com/Giới Thiệu Quy Trình Thiết Kế - Thi Công S-House.mp4"
        )}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        preload="metadata"
        onCanPlay={(e) => {
          const v = e.currentTarget;
          if (v.paused) v.play().catch(() => {});
        }}
      />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-lg">
          Xây dựng kiến trúc
          <span className="block pt-4 drop-shadow-md">của bạn hôm nay</span>
        </h1>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 transition-transform duration-300 hover:scale-105"
            onClick={() => scrollToSection("#projects")}
          >
            Dự án của chúng tôi
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-dark hover:border-primary transition-transform duration-300 hover:scale-105"
            onClick={() => scrollToSection("#services")}
          >
            Dịch vụ của chúng tôi
          </Button>
        </div>
      </div>
    </div>
  );
}
