"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Star,
  Info,
  Hammer,
  Home,
  FolderOpen,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "./button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopNavigation = () => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  const navItems = [
    { label: "Trang chủ", href: isMainPage ? "#home" : "/", icon: Home },
    {
      label: "Về chúng tôi",
      href: isMainPage ? "#about" : "/#about",
      icon: Info,
    },
    {
      label: "Dịch vụ",
      href: isMainPage ? "#services" : "/#services",
      icon: Hammer,
    },
    {
      label: "Dự án",
      href: isMainPage ? "#projects" : "/#projects",
      icon: FolderOpen,
    },
    {
      label: "Đánh giá",
      href: isMainPage ? "#feedbacks" : "/#feedbacks",
      icon: Star,
    },
    {
      label: "Liên hệ",
      href: isMainPage ? "#contact" : "/#contact",
      icon: Phone,
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  function getInitialTheme(): "light" | "dark" {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    if (isMainPage) {
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.location.hash = "";
      } else {
        const isProjectDetail = window.location.hash.startsWith("#project/");
        window.location.hash = href;
        if (!isProjectDetail) {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`z-50 transition-all duration-300 
      fixed top-0 left-0 right-0`}
    >
      {/* ===== DESKTOP HEADER (≥ md) ===== */}
      <div className={`hidden md:block`}>
        <div className={`w-full ${isScrolled ? "md:hidden" : "md:block"}`}>
          <div className="bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/logo.jpg"
                    alt="logo"
                    className="w-16 h-16 rounded-sm object-cover"
                  />
                  <div className="text-center text-primary ">
                    <div className="font-bold text-xl leading-tight">
                      CÔNG TY TNHH THIẾT KẾ - XÂY DỰNG VÀ ĐẦU TƯ
                    </div>
                    <div className="text-3xl font-extrabold tracking-wide">
                      BÌNH KHANG
                    </div>
                  </div>
                </div>

                <div className="flex items-stretch gap-4">
                  <div className="relative border-2 border-dashed border-primary/40 rounded-lg px-4 py-2 min-w-56">
                    <div className="absolute -top-3 -left-3 bg-white rounded-full p-1 shadow-sm ring-1 ring-primary/20">
                      <Phone className="text-primary" size={16} />
                    </div>
                    <div className="text-sm text-zinc-600">Hotline hỗ trợ</div>
                    <div className="font-bold text-red-600 text-lg">
                      058 703 0273
                    </div>
                  </div>
                  <div className="relative border-2 border-dashed border-primary/40 rounded-lg px-4 py-2 min-w-56">
                    <div className="absolute -top-3 -left-3 bg-white rounded-full p-1 shadow-sm ring-1 ring-primary/20">
                      <MapPin className="text-primary" size={16} />
                    </div>
                    <div className="text-sm text-zinc-600">Địa chỉ</div>
                    <div className="font-bold text-emerald-700 text-lg">
                      463/62/47 Lê Đức Thọ, Phường An Hội Đông, TP.HCM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second row  */}
        <div className="sticky top-0 z-40 bg-primary shadow">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex justify-start">
                <div className="flex items-center gap-3">
                  <Link href="#" aria-label="Tiếng Việt">
                    <img
                      src="https://flagicons.lipis.dev/flags/4x3/vn.svg"
                      alt="VN"
                      className="h-5 w-[25px] rounded-sm ring-1 ring-zinc-300"
                    />
                  </Link>
                  <Link href="#" aria-label="English">
                    <img
                      src="https://flagicons.lipis.dev/flags/4x3/gb.svg"
                      alt="EN"
                      className="h-5 w-[25px] rounded-sm ring-1 ring-zinc-300"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-8 py-3">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="cursor-pointer text-white/95 hover:text-white font-semibold tracking-wide
                           uppercase decoration-2 underline-offset-8 hover:underline"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="flex-1 flex justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggle}
                  className="h-10 w-10 text-white"
                >
                  {theme == "light" ? (
                    <Sun className="h-4 w-4 rotate-0 transition-all dark:-rotate-90" />
                  ) : (
                    <Moon className="absolute h-4 w-4 rotate-90 transition-all dark:rotate-0" />
                  )}
                  <span className="sr-only">Chuyển đổi giao diện</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===== MOBILE HEADER (default) ===== */}
      <div className="md:hidden">
        <div className={`bg-white ${isScrolled ? "hidden" : "block"}`}>
          <div className="container mx-auto">
            <div className="relative flex items-center justify-center gap-3 py-1 bg-[url('/images/header-bg.jpg')] bg-cover bg-center">
              <div className="absolute inset-0 bg-white/90" />
              <div className="relative z-10 flex items-center gap-3">
                <div className="leading-tight text-center text-primary font-bold">
                  <div className="text-[14px]">
                    CÔNG TY TNHH THIẾT KẾ - XÂY DỰNG VÀ ĐẦU TƯ
                  </div>
                  <div className="text-lg">BÌNH KHANG</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second row  */}
        <div className="bg-primary/95 text-white">
          <div className="container mx-auto px-3">
            <div className="grid grid-cols-3 items-center py-2">
              <div className="flex items-center gap-2">
                <Link href="#" aria-label="Tiếng Việt">
                  <img
                    src="https://flagicons.lipis.dev/flags/4x3/vn.svg"
                    alt="VN"
                    className="h-4 w-[22px] rounded-sm ring-1 ring-white/30"
                  />
                </Link>
                <Link href="#" aria-label="English">
                  <img
                    src="https://flagicons.lipis.dev/flags/4x3/gb.svg"
                    alt="EN"
                    className="h-4 w-[22px] rounded-sm ring-1 ring-white/30"
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggle}
                  className="h-9 w-9 text-white hover:bg-white/10"
                >
                  {theme == "light" ? (
                    <Sun className="h-4 w-4 rotate-0 transition-all dark:-rotate-90" />
                  ) : (
                    <Moon className="absolute h-4 w-4 rotate-90 transition-all dark:rotate-0" />
                  )}
                </Button>
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/logo.jpg"
                  alt="logo"
                  className="w-8 h-8 rounded-sm object-cover ring-1 ring-white/20"
                />
              </div>
              <div className="flex items-end justify-end">
                <button
                  type="button"
                  aria-label="Mở menu"
                  onClick={() => setIsMenuOpen((s) => !s)}
                  className="inline-flex items-center gap-2 font-semibold"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                  <span className="sr-only">Menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t bg-black/90 backdrop-blur-md">
            <div className="container mx-auto px-4 md:px-6">
              <div className="py-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.href}
                      onClick={() => handleNavigation(item.href)}
                      className="flex items-center gap-2 w-full text-left px-2 py-2 
                           text-primary decoration-primary decoration-2 
                           hover:decoration-4 hover:bg-white/5
                           transition-all font-semibold tracking-wide rounded"
                    >
                      <Icon className="h-5 w-5 flex-shrink-0 text-white" />
                      <span className="text-white">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavigation;
