"use client";

import { Building, Hammer } from "lucide-react";
import { Button } from "./button";

export default function Banner() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative h-[100vh]">
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
      <div className="absolute inset-0 bg-black/60" />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-5">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 transition-transform duration-300 hover:scale-105"
            onClick={() => scrollToSection("#projects")}
          >
            Dự án của chúng tôi
            <Building className="ml-1 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-dark hover:border-primary transition-transform duration-300 hover:scale-105"
            onClick={() => scrollToSection("#services")}
          >
            Dịch vụ của chúng tôi <Hammer className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
