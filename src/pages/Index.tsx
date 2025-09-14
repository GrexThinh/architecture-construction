import React from "react";
import TopNavigation from "@/components/TopNavigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import { Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingContacts from "@/components/ui/float-contact";

const Index = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <TopNavigation />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <section className="relative py-12 md:py-24 text-primary-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://vanangroup.com.vn/wp-content/uploads/2024/11/Construction-site-la-gi-Tim-hieu-chi-tiet-ve-cong-trinh-xay-dung.webp')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Sẵn sàng bắt đầu dự án của bạn?
          </h2>
          <p className="text-lg mb-8 max-w-[600px] mx-auto opacity-90">
            Hãy thảo luận về tầm nhìn của bạn và biến nó thành hiện thực. Liên
            hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí.
          </p>
          <Button size="lg" onClick={() => scrollToSection("#contact")}>
            Bắt đầu ngay hôm nay
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Building2 className="text-primary" size={24} />
                <span className="font-bold text-lg">ArchBuild Pro</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Tạo ra những thiết kế kiến trúc và giải pháp xây dựng đặc biệt
                từ năm 2020.
              </p>
              <img
                src="https://nhadepshouse.com/images/bct.png"
                alt="chứng nhận"
                className="w-1/2"
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
                  <button
                    onClick={() => scrollToSection("#about")}
                    className="hover:text-primary"
                  >
                    Về chúng tôi
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("#projects")}
                    className="hover:text-primary"
                  >
                    Dự án
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("#contact")}
                    className="hover:text-primary"
                  >
                    Liên hệ
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Thông tin liên hệ</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>888/40 Lạc Long Quân</li>
                <li>Phường Tân Hòa, TP. Hồ Chí Minh, Việt Nam</li>
                <li>+84 832619515</li>
                <li>info@archbuildpro.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Grex Solution. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>

      <FloatingContacts />
    </div>
  );
};

export default Index;
