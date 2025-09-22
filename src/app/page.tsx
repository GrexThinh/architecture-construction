"use client";

import { useState, useEffect } from "react";
import FloatingContacts from "./components/float-contact";
import { ArrowRight, Star } from "lucide-react";
import Banner from "./components/banner";
import AboutPage from "./about/page";
import ServicesPage from "./services/page";
import FeedbackPage from "./feedback/page";
import ContactPage from "./contact/page";
import ProjectsPage from "./projects/page";
import ProjectDetail from "./projects/[id]/ProjectDetail";
import Image from "next/image";

export default function Home() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    // Set initial hash
    setHash(window.location.hash);

    // Listen for hash changes
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Show ProjectDetail if hash starts with #project/
  if (hash.startsWith("#project/")) {
    return <ProjectDetail />;
  }
  return (
    <div className="min-h-screen">
      <main>
        <Banner />
        <section id="about">
          <AboutPage />
        </section>
        <section id="services">
          <ServicesPage />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
        <section id="feedbacks">
          <FeedbackPage />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </main>

      <section className="relative py-12 md:py-24 text-primary-foreground mt-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://vanangroup.com.vn/wp-content/uploads/2024/11/Construction-site-la-gi-Tim-hieu-chi-tiet-ve-cong-trinh-xay-dung.webp')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-3xl md:text-4xl mb-4 text-white">
            Sẵn sàng xây dựng công trình của bạn?
          </h2>
          <p className="text-lg mb-8 max-w-[600px] mx-auto opacity-90 text-white">
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-primary px-5 py-3 font-medium text-white hover:opacity-90"
          >
            Bắt đầu ngay hôm nay
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo.jpg"
                  alt="logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-cover"
                />
                <div>
                  <h1 className="text-base font-bold text-primary">
                    CÔNG TY TNHH TƯ VẤN THIẾT KẾ XÂY DỰNG BÌNH KHANG
                  </h1>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="text-yellow-500 inline-block"
                        fill="currentColor"
                        size={20}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-sm">
                Tạo ra những thiết kế kiến trúc và giải pháp xây dựng đặc biệt
                từ năm 2020.
              </p>
              <Image
                src="/images/certified.png"
                alt="chứng nhận"
                width={300}
                height={200}
                className="w-1/2 h-auto"
              />
            </div>
            <div>
              <h4 className="font-semibold mb-4">Dịch vụ</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Thiết kế kiến trúc</li>
                <li>Quản lý xây dựng</li>
                <li>Lập kế hoạch dự án</li>
                <li>Thiết kế nội thất</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Công ty</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-primary">
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary">
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-primary">
                    Dự án
                  </a>
                </li>
                <li>
                  <a href="#feedbacks" className="hover:text-primary">
                    Đánh giá từ khách hàng
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Thông tin liên hệ</h4>
              <h1 className="mt-0 text-sm mb-2">
                CÔNG TY TNHH TƯ VẤN THIẾT KẾ XÂY DỰNG BÌNH KHANG
              </h1>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>888/40 Lạc Long Quân, Phường Tân Hòa, TP. Hồ Chí Minh</li>
                <li>SĐT: 0832619515</li>
                <li>Email: info@archbuildpro.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Grex Solution. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <FloatingContacts />
    </div>
  );
}
